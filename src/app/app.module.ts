import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './weather/home/home.component';
import { CityWeatherComponent } from './weather/city-weather/city-weather.component';
import { DayWeatherComponent } from './weather/day-weather/day-weather.component';
import { NotFoundComponent } from './weather/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherReportComponent } from './weather/weather-report/weather-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityWeatherComponent,
    DayWeatherComponent,
    NotFoundComponent,
    WeatherReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
