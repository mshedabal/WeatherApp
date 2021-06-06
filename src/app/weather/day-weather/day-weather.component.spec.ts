import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWeatherComponent } from './day-weather.component';

describe('DayWeatherComponent', () => {
  let component: DayWeatherComponent;
  let fixture: ComponentFixture<DayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWeatherComponent);
    component = fixture.componentInstance;
    component.day =    {
      "dt": 1622977200,
      "sunrise": 1622951143,
      "sunset": 1623010379,
      "temp": {
        "day": 294.89,
        "min": 286.46,
        "max": 294.94,
        "night": 288.43,
        "eve": 293.77,
        "morn": 286.94
      },
      "feels_like": {
        "day": 294.45,
        "night": 288.52,
        "eve": 293.74,
        "morn": 286.62
      },
      "pressure": 1024,
      "humidity": 51,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 3.48,
      "deg": 218,
      "gust": 5.17,
      "clouds": 47,
      "pop": 0.81,
      "rain": 4.28
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
