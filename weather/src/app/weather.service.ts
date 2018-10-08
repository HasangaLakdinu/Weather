import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';



@Injectable()
export class WeatherService {

  apiKey='5585263207a33de98687a527c231cc40';
  url;

  constructor(private http:Http) { 
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());

  }
  }


