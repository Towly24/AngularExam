import {Component} from "@angular/core";
import {weatherweather} from "../Interfaces/weather.interfaces";
import {HttpClient, HttpParams} from "@angular/common/http";
import {WeatherServices} from "../services/weather.services";

@Component({
  selector:"app-weather",
  templateUrl: "./weather.component.html"
})

export class WeatherComponent {

  // @ts-ignore
  data :weatherweather = null;
  cityCode: string = 'hanoi';
  constructor(private service: WeatherServices) {
  }



  ngOnInit(){
    this.getData('');
  }

  getData(city: string){
    this.service.currenweather(this.cityCode)
      .subscribe( value=>{
        this.data = value;
      })
  }

  hanoi(){
    this.cityCode = 'Hanoi'
    this.getData('');
  }
  london(){
    this.cityCode = 'london'
    this.getData('');
  }
}
