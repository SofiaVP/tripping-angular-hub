import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../common/service/user.service';
import { Login } from '../common/data/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login();
  message : String = "";

  doLogin() {
    this.userService.fetchUser(this.login).subscribe(
      (response)=>{
        if(response == null) {
          this.message = this.login.username + " has not been registered yet";
          return;
        }

        if (response.password === this.login.password) 
        {
          this.message = "";
          this.router.navigate(['/tripping-welcome'])
          console.log("in login component, conected user ==========> "+sessionStorage.getItem("user"))
          this.userService.isUserLoggedIn.next(true);
          this.userService.isSignedIn = true;
        
        }
        else {
          this.login.password = "";
          this.message = "Wrong password";
          sessionStorage.removeItem("user")
         
        }},
      (error) => { console.log(error)}
      );
  }

  onSignUp() {
    this.router.navigate(['/tripping-register'])
  }

  constructor(private router : Router, public userService : UserService) { }

  ngOnInit(): void {
    sessionStorage.removeItem("user");
    this.userService.isUserLoggedIn.next(false);
  }

}
