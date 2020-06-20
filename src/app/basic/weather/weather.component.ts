import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/common/service/weather.service';
import { Weather } from 'src/app/common/data/weather';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cityName:String;

  // weather = { 
  //   name: "Paris",
  //   feels_like: 18.06
  // }

  weather : Weather

  onGetCurrentWeather(){

    console.log("++++++++ onGetCurrentWeather ++++++++"); 

    //first I want to ee that I can get the name of the city 
    //console.log("this.weather.name = " + this.cityName);
    //Then I will see if I can get the weather of that city with the method of nodejs     
    //Observable<this.weather> = this.weatherService.recupererWeather();
    // this.weatherService.recupererWeather()
    // .subscribe(
    //   (weatherFound)=>{this.weather},
    //   (error) => { console.log(error); }
    // );
    // console.log("this.weather = "+this.weather)
  }

  constructor(private _WeatherService : WeatherService) { }
  //constructor() { }

  getweather(){
    this._WeatherService.recupererWeather().subscribe(
      data => this.weather= data
      
    )
  }


  ngOnInit(): void {
    this.getweather();
 


}}
