import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

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

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { WeatherForcastComponent } from './basic/weather/weather-forcast/weather-forcast.component';
import { ClothesComponent } from './lists/clothes/clothes.component';
import { ToiletriesComponent } from './lists/toiletries/toiletries.component';
import { EntretainmentComponent } from './lists/entretainment/entretainment.component';
import { VitalStuffComponent } from './lists/vital-stuff/vital-stuff.component';


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
    WeatherForcastComponent,
    ClothesComponent,
    ToiletriesComponent,
    EntretainmentComponent,
    VitalStuffComponent
  ],
  imports: [
    BrowserModule,
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
    NgxMatDrpModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
