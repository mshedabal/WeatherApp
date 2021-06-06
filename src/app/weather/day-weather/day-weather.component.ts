import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent implements OnInit {

  @Input('day') day:any;
  constructor() { }

  ngOnInit(): void {
  }

}
