import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../data/login';
import { User } from '../data/user';
import { tap, flatMap, map, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // baseURL = 'https://tripping-ms-user.herokuapp.com';
  baseURL = 'http://localhost:9999';

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isSignedIn : boolean; 

  public fetchUser(login: Login): Observable<User>{
    let url = `${this.baseURL}`+`/tripping/user/findUserByUsername/`+`${login.username}`;
    return this.http.get<User>(url)
    .pipe(
      tap( (logRes) => { this.saveUser(logRes)})
   )
  }

  public saveUser(user : User) {
    if (user != null) sessionStorage.setItem("user", user.username)
  }

  public createUser(user: User){
    let url = `${this.baseURL}`+`/tripping/user/registerUser`
    return this.http.post<User>(url, user);
  }

  public logOut() {
    sessionStorage.removeItem("user");
  }

  public getAllUsernames():Observable<String[]> {
    let url = `${this.baseURL}`+`/tripping/user/findAllUsers`
    return this.http.get<User[]>(url).pipe(
      flatMap(e=>e),
      map( e => e.username),
      toArray())
  }
  constructor(private http : HttpClient) {
    
    if (sessionStorage.getItem("user") !=null)
      this.isSignedIn = true;
   }
}
