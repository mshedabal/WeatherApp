import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allCities:Array<any> = []

  cities = 'London,Birmingham,Leicester,Manchester,Oxford';

  constructor(private service: WeatherService, private route:Router) { }

  ngOnInit(): void {  
    this.service.GetAllCitiesData(this.cities)
    .then(data=>{
     this.allCities = [...data];
    })
  }

  GetDailyReport(city){
    this.route.navigate(['/cityReport', city.id])
  }

}
