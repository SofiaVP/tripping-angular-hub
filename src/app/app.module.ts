import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from "@angular/common";

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge'; 
import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';


import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { WeatherComponent } from './basic/weather/weather.component';
import { TestComponent } from './basic/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ListsComponent } from './lists/lists.component';
import { SiderComponent } from './sider/sider.component';
import { UserComponent } from './user/user.component';
import { AboutMyTripComponent } from './about-my-trip/about-my-trip.component';
import { MainTripInfoComponent } from './about-my-trip/main-trip-info/main-trip-info.component';
import { ExtraTripInfoComponent } from './about-my-trip/extra-trip-info/extra-trip-info.component';
import { WeatherforecastComponent } from './basic/weather/weather-forecast/weather-forecast.component';

import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ForecastComponent } from './forecast/forecast.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableTestComponent } from './table-test/table-test.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DashbordMyTripComponent } from './dashbord-my-trip/dashbord-my-trip.component';
import { DashbordListsComponent } from './dashbord-lists/dashbord-lists.component';
import { DashbordWelcomeComponent } from './dashbord-welcome/dashbord-welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { FormTestComponent } from './form-test/form-test.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    WeatherComponent,
    TestComponent,
    ListsComponent,
    SiderComponent,
    UserComponent,
    AboutMyTripComponent,
    MainTripInfoComponent,
    ExtraTripInfoComponent,
    WeatherforecastComponent,
    ForecastComponent,
    NavigationComponent,
    TableTestComponent,
    DashbordListsComponent,
    DashbordMyTripComponent,
    DashbordWelcomeComponent,
    LoginComponent,
    RegisterComponent,
    FormTestComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule, 
    FormsModule, 
    BrowserAnimationsModule,   
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule, 
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatBadgeModule,
    NgxMatDrpModule,
    FlexLayoutModule,
    HttpClientModule,
    CheckBoxModule,
    LayoutModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
