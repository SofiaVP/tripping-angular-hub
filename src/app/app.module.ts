import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import {MatCardModule} from '@angular/material/card'
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
    UserComponent
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
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
