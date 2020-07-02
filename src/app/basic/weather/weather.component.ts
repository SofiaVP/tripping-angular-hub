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

  today : Date = new Date();
  cityName: String = "";
  weather: Weather = new Weather("", this.today, 0, 0, 0, 0);


  constructor(private _WeatherService: WeatherService) {
  }

  onGetWeather() {
    console.log("In component.ts, cityName =" + this.cityName)
    this._WeatherService.recupererWeather(this.cityName)
      .subscribe(
        (weatherRecup) => {
          this.weather = weatherRecup;
          console.log("in weatherComponent.ts, in onGetWeather, weather = " + JSON.stringify(this.weather));
        },
        (error) => {console.log(error)},
      )
    console.log("in weatherComponent.ts, in onGetWeather, weather = " + JSON.stringify(this.weather));
  }


  ngOnInit(): void {


  }
}
