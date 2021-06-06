import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY: string;

  constructor(private httpclient: HttpClient) {
    this.API_KEY = '3d8b309701a13f65b660fa2c64cdc517';

  }

  getWeatherByCity = (city: string, state: string = 'uk') => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${this.API_KEY}`;
    return new Promise((resolve, reject) => {
      this.httpclient.get(url).subscribe(data => {
        if (data)
          resolve(data);
        else
          reject("Error occured");
      })
    })
  }

  GetAllCitiesData = async (cities: string):Promise<Array<any>> => {
    let citiesArr = cities.split(',');
    let alldata=[];
    for (let city of citiesArr) {
      const data = await this.getWeatherByCity(city)
      alldata.push(data);
    }
    return alldata;
  }



  GetReportBycount = (id) => {
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?id=${id}&cnt=5&appid=${this.API_KEY}`;
    return this.httpclient.get(url);
  }

}
