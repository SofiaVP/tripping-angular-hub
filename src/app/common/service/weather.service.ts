import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../data/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather: Weather

  public recupererWeather() :Observable<Weather>{
    //return of(this.tabDevises); //simulation
    //let url ="http://localhost:8282/devise-api/public/devise";
    let url ="http://localhost:8282/weather-api/public/weather/Paris"; //url relative avec 
    // ng serve --proxy-config proxy.conf.json en mode DEV pour dediriger vers nodeJs
    return this.http.get<Weather>(url);
  }

  constructor(private http: HttpClient) { }
}
