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
    password: [null],
    lastName: [null],
    email: [null],
    gender: ['whocares']
  });
  hasExtraInfoUser = false;
  user : User = new User();
  message : string = 'Hello '+this.user.username+' welcome to tripping';
  // action : string = ' ٩(♡ε♡ )۶ '

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    public userService: UserService, 
    private _snackBar: MatSnackBar
    ) {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      () => {
        this._snackBar.open(this.message, '٩(♡ε♡ )۶', {
          duration: 4000
        });
        sessionStorage.setItem("user", this.user.username); 
        this.userService.isUserLoggedIn.next(true);
        console.log("conected user ==========> "+sessionStorage.getItem("user"))
        this.router.navigate(['tripping-welcome']);
      }
    )
  }
}
