import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  @Input('city') city: any;
  @Output() emitEvent = new EventEmitter();
  constructor() {  }

  ngOnInit(): void {
  }

  GetDailyReport(city) {
    this.emitEvent.emit(city);
  }

}
