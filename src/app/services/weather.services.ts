import {HttpClient, HttpParams} from "@angular/common/http";
import {weatherweather} from "../Interfaces/weather.interfaces";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class WeatherServices{
  static BASE_URL: string = 'https://api.openweathermap.org/data/2.5/';
  static APPID: string = '09a71427c59d38d6a34f89b47d75975c';
  constructor(private httpClient: HttpClient) {
  }
  currenweather(cityCode: string){
    var parameters = new HttpParams();
    parameters = parameters.append('q',cityCode);
    parameters = parameters.append('appid',WeatherServices.APPID);
    parameters = parameters.append('units','metric');
      return  this.httpClient.get<weatherweather>(WeatherServices.BASE_URL+"weather",
      {
        params: parameters
      })
  }
  foreCast(cityCode: string){
    var parameters = new HttpParams();
    parameters = parameters.append('q',cityCode);
    parameters = parameters.append('appid',WeatherServices.APPID);
    parameters = parameters.append('units','metric');
    return  this.httpClient.get<weatherweather>(WeatherServices.BASE_URL+"forecast",
      {
        params: parameters
      })
  }
}
