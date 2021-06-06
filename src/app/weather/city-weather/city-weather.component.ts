import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  daysReport:Array<any>=[];

  constructor(private route: ActivatedRoute, private service: WeatherService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.getDayReportData(id);
    });
  }

  ngOnInit(): void {
  }

  getDayReportData(id){
    this.service.GetReportBycount(id).subscribe(daysReport=>{
      //console.log(daysReport);
      this.daysReport = daysReport['list'];
    })
  }

}
