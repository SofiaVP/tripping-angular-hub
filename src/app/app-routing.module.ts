import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { BasicComponent } from './basic/basic.component';
import { DashbordMyTripComponent } from './dashbord-my-trip/dashbord-my-trip.component';
import { DashbordListsComponent } from './dashbord-lists/dashbord-lists.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashbordWelcomeComponent } from './dashbord-welcome/dashbord-welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';


const routes: Routes = [
  // { path: 'tripping-welcome', component: NavigationComponent, 

  //   children:[
  //     {path: 'trip', component: DashbordMyTripComponent },
  //     { path: 'list', component: DashbordTestComponent  }
  //   ]
  // },

  
  { path: 'tripping-welcome', component: DashbordWelcomeComponent},
  { path: 'tripping-trip', component: DashbordMyTripComponent},
  { path: 'tripping-list', component: DashbordListsComponent},
  { path: 'tripping-login', component: LoginComponent},
  { path: 'tripping-register', component: RegisterComponent},
  { path: 'tripping-to-do', component: DragAndDropComponent},

  { path: '', redirectTo: '/tripping-login', pathMatch: 'full'},

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
