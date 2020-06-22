import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../data/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather: Weather

  public recupererWeather(name : String) :Observable<Weather>{
    let url =`http://localhost:8282/weather-api/current/`+`${name}`; //url relative avec 
    console.log("In service, name = "+name+ "url= "+ url);
    // ng serve --proxy-config proxy.conf.json en mode DEV pour dediriger vers nodeJs
    return this.http.get<Weather>(url);

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

  constructor(private http: HttpClient) { }
}
