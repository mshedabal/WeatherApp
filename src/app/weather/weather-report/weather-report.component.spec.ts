import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherReportComponent } from './weather-report.component';
import { WeatherService } from 'src/app/services/weather.service';

describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('WeatherService', ['getWeatherByCity']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: WeatherService, useValue: spy }],
      declarations: [WeatherReportComponent]
    })
      .compileComponents();

      weatherServiceSpy = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    component.city = { "coord": { "lon": -0.1257, "lat": 51.5085 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 294.66, "feels_like": 294.62, "temp_min": 292.72, "temp_max": 296.21, "pressure": 1025, "humidity": 67 }, "visibility": 10000, "wind": { "speed": 0.45, "deg": 282, "gust": 2.24 }, "clouds": { "all": 75 }, "dt": 1622991919, "sys": { "type": 2, "id": 2019646, "country": "GB", "sunrise": 1622951143, "sunset": 1623010379 }, "timezone": 3600, "id": 2643743, "name": "London", "cod": 200 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
});
