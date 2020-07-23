import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../common/service/user.service';
import { User } from '../common/data/user';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  addressForm = this.fb.group({
    // company: null,
    username: [null, Validators.required],
    firstName: [null],
    password: [null,Validators.required ],
    lastName: [null],
    email: [null],
    gender: ['female']
  });
  hasExtraInfoUser = false;
  user : User = new User();
  message : string = 'Hello! Welcome to tripping';
  // action : string = ' ٩(♡ε♡ )۶ '

  registeredUsers = [];

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    public userService: UserService, 
    private _snackBar: MatSnackBar
    ) {}

    demo(){
      
      this.user.username = "Sof"
      this.user.email = "sofiavayped@gmail.com"
      this.user.firstName = "Sofia"
      this.user.password = "vayS0104"
      this.addressForm.setValue(this.user)
      
      // // this.user.password = "vayS0104"
      // this.user.firstName = "Sofia"
      // this.user.email ="sofiavayas@hotmail.com"
    }


 

    onSubmit() {

      this.userService.getAllUsernames().subscribe(
        (user) => {
          this.registeredUsers = user
          console.log(this.registeredUsers)
          if (!this.registeredUsers.some((user) => (user == this.user.username))) 
          { 
            this.userService.createUser(this.user).subscribe( 
                () => {
                  this.message = "New user : " + this.user.username + " has been registered"
                  sessionStorage.setItem("user", this.user.username)
                  this.userService.isSignedIn = true;
                  this.router.navigate(['tripping-welcome'])
                }
              )
          }
          else this.message = "The user " + this.user.username + " has already been registered"
        }
      )
  
    }
  // onSubmit() {
  //   this.userService.getAllUsernames().subscribe(
  //     (user) => this.registeredUsers = user;
  //     if (!this.registeredUsers.some((user) => (user == this.user.username))){
  //       this.userService.createUser(this.user).subscribe(
  //         () => {
  //           this._snackBar.open(this.message, '٩(♡ε♡ )۶', {
  //             duration: 4000
  //           });
  //           sessionStorage.setItem("user", this.user.username); 
  //           this.userService.isUserLoggedIn.next(true);
  //           console.log("conected user ==========> "+sessionStorage.getItem("user"))
  //           this.router.navigate(['tripping-welcome']);
  //         }
  //       )
  //     }
  //   )
    
  // }

  ngOnInit(): void {
  }
}
