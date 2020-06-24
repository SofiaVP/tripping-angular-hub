import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/common/service/weather.service';
import { Weather } from 'src/app/common/data/weather';
import { Observable, observable } from 'rxjs';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cityName:String;
  weather : Weather 
  pipe = new DatePipe('en-US');
  now : any = Date.now()  ;
  
  

  convert(){
    //dateToConv = this.weather.dt;
    //this.date = moment(this.weather.dt);
    //var day = moment(1318781876406);
    const myFormattedDate = this.pipe.transform(this.now, 'short');
  }

  constructor(private _WeatherService : WeatherService) {
    //this.date = this.convert();
   }

  onGetweather(){
    console.log("in component.ts, cityName ="+this.cityName)
    this._WeatherService.recupererWeather(this.cityName)
    .subscribe(
      weatherRecup => this.weather= weatherRecup,
      error => console.log(error),
      )
  }


  ngOnInit(): void {
 
}
}
