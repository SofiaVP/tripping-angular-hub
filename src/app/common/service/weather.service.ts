import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Weather } from '../data/weather';
import { Observable } from 'rxjs';
import { CompleteWeather } from '../data/complete-weather';
import { SingleWeatherforecast } from '../data/single-weather-forecast';
import { map , flatMap ,toArray ,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  baseURL = 'http://localhost:8282'; //dev

  public fetchWeatherforecastByCityname(cityname: String) :Observable<SingleWeatherforecast[]> {
    let url = `${this.baseURL}`+`/weather-api/public/forecastbycity/`+`${cityname}`; 
    console.log("In service, name = "+cityname+ "url= "+ url);
    return this.http.get<SingleWeatherforecast[]>(url);
  }

  public fetchWeatherByCoords(lat: number, lon: number):  Observable<CompleteWeather>{
    let url = `${this.baseURL}`+`/weather-api/forecastByCoords/`+`${lat}`+`/`+`${lon}`
    console.log("In service, lat = " + lat + " lon = " + lon+ " url = "+ url);    
    return this.http.get<CompleteWeather>(url)
  }

  public recupererWeather(name : String) :Observable<Weather>{
    let url =`${this.baseURL}`+`/weather-api/public/current/`+`${name}`; //url relative avec ng serve --proxy-config proxy.conf.json en mode DEV pour dediriger vers nodeJs
    console.log("In service, name = "+name+ "url= "+ url);
    return this.http.get<Weather>(url)
    .pipe(
                  map((weather:Weather)=>{return weather; })
               );

    //++++++++++++++++++++ HELP +++++++++++++++++++++++++++++++++++
    //Dans myapp (cours didier) il y a cette méthode que je ne comprends pas très bien le pipe et le map 
    // public convertir(montant:number ,codeMonnaieSource : string , codeMonnaieCible : string ) : Observable<number> {
    //    //return of(1.12345678); //simulation
    //    //let url ="http://localhost:8282/devise-api/public/convert?source=EUR&target=USD&amount=200";
    //  let url =`./devise-api/public/convert/`+`?source=${codeMonnaieSource}&target=${codeMonnaieCible}&amount=${montant}`; 
    //  return this.http.get<ResConv>(url)
    //          .pipe(
    //             map((objResConv:ResConv)=>{return objResConv.result; })
    //          );
    //  }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  }

  
}
