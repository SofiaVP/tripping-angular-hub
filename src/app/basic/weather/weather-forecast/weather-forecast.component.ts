import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/common/service/weather.service';
import { SingleWeatherforecast } from 'src/app/common/data/single-weather-forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherforecastComponent implements OnInit {

  city : string = "Paris";
  forecast : SingleWeatherforecast[];

  constructor(  private _weatherService: WeatherService) { }
  
  onFetchforecastByCityName(){
    this._weatherService.fetchWeatherforecastByCityname(this.city)
      .subscribe(
        (fetchedforecast) => {
           this.forecast= fetchedforecast; 
          console.log("In weather-forecast.component.ts, fetchedforecast = "+ JSON.stringify(fetchedforecast));
        }, 
        (error)=> {console.log(error)}
      )
  }


  ngOnInit(): void {
    this.onFetchforecastByCityName();

  }



}
