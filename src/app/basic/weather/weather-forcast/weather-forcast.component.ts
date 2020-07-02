import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/common/service/weather.service';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.scss']
})
export class WeatherForcastComponent implements OnInit {

  constructor(  private weatherService: WeatherService,) { }

  ngOnInit(): void {
  }

  // fetchLocationByCoords(coords) {
    
  //   const { lat, lng } = coords; // Event from click on map
  //   this.weatherService.fetchWeatherByCoords(lat, lng).subscribe((data) => {
  //     this.weatherData = data;
  //     this.userGeoTimezone = data.timezone;
  //     //  console.log(data);
  //     this.fetchLocationTimes(data);
  //     this.fetchAllSearchedLocations();
  //   }, (error) => {
  //     console.log('err: ', error);
  //     this.errorMessage = error;
  //   });
  // }

}
