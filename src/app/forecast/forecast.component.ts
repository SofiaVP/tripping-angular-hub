import { Component, OnInit } from '@angular/core';
import { SingleWeatherforecast } from '../common/data/single-weather-forecast';
import { WeatherService } from '../common/service/weather.service';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  city : string ;
  forecast : SingleWeatherforecast[];
  //locationIcon
  iconURL : string = ''
  locationIcon: any;
  

  constructor(public weatherService: WeatherService) { }

  onFetchforecastByCityName(){
    this.weatherService.fetchWeatherforecastByCityname(this.city)
      .subscribe(
        (fetchedforecast) => {this.forecast= fetchedforecast; 
         for (let forecast of this.forecast){
        //   //  this.icon = '../common/images/icons/'+f.icon
            forecast.icon = "../../assets/icons/"+forecast.icon+".png"
           console.log(forecast.icon);
           
        //   this.locationIcon.innerHTML = `<img src="../common/images/${this.iconURL}.png">`;
           
        //    console.log (this.iconURL);
         }
          console.log("In weather-forecast.component.ts, fetchedforecast = "+ JSON.stringify(fetchedforecast[0]));
        },
        (error)=> {console.log(error)}
      )
  }

  demo(){
    this.city = "Copenhagen"
  }

  
  ngOnInit(): void {
    // let locationIcon = document.querySelector('weather-icon');
    
    // locationIcon.innerHTML = `<img src="../common/images/${this.iconURL}.png">`;
    // locationIcon.innerHTML ="../common/images/icons/" +this.iconURL+ ".png' alt='Icon depicting current weather.'>"
    //this.onFetchforecastByCityName();
  }

}
