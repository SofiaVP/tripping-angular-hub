import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { UserService } from '../common/service/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit  {

  user = sessionStorage.getItem("user");
  @Input()
  isSignedIn : boolean 

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public userService : UserService) {
    //this.userService.isUserLoggedIn.subscribe(value => {this.isSignedIn = value})
    console.log("this.isSingnedIn = " + this.isSignedIn +" conected user ==========>"+sessionStorage.getItem("user"));
    
  }

  onDarkModeSwitched({checked} : MatSlideToggleChange){
    this.darkModeSwitched.emit(checked);
  }

  doLogOut(){
    this.userService.logOut();
    console.log("je suis dans navigation component .ts dans doLogOut, conected user " + sessionStorage.getItem("user"))
    this.isSignedIn = false;
  }
  ngOnInit(): void {
    if (this.userService.isSignedIn = true)
      this.isSignedIn = true;
  }


}
