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

//>>>>>>>>>>>>>>>>>>>>>> I need to find a way to find coordinates by location, my idea would be to 
//>>>>>>>>>>>>>>>>>>>>>> use the method recupererWeather (that incidently should be called feachWeatherByName)
//>>>>>>>>>>>>>>>>>>>>>> and then do this.weather.cords, il faut changer la méthode pour qu'elle retourne un completeweather et non pas un weather

  // fetchLocationByCoords(coords) {
    
  //   const { lat, lng } = coords; // Event from click on map
  //   this.weatherService.fetchWeatherByCoords(lat, lng).subscribe((data) => {
  //     this.weatherData = data;
  //     this.userGeoTimezone = data.timezone;
  //      console.log(data);
  //     this.fetchLocationTimes(data);
  //     this.fetchAllSearchedLocations();
  //   }, (error) => {
  //     console.log('err: ', error);
  //     this.errorMessage = error;
  //   });
  // }

}
