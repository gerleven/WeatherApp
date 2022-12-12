import { Component, OnInit } from '@angular/core';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';
import {
  CoordinatesByNameInterface,
  CoordinatesByNamePayload,
  CoordinatesByZipCodeInterface,
  CoordinatesByZipCodePayload,
  CoordinatesRevertInterface,
  CoordinatesRevertPayload,
  WeatherInterface,
  WeatherPayload,
} from '../../interfaces/weather-service.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  private response:
    | CoordinatesByNameInterface
    | CoordinatesByZipCodeInterface
    | CoordinatesRevertInterface
    | WeatherInterface = {} as any;
  private santafe= {
    lat: '-31.6333',
    lon: '-60.7',
  };

  CallCoordinatesByName() {
    let payload: CoordinatesByNamePayload = { input: 'Santa Fe,AR', limit: 1 };
    this.weatherService.GetCoordinatesByName(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }
  CallCoordinatesByZipCode() {
    let payload: CoordinatesByZipCodePayload = { zip_code: '3000,AR' };
    this.weatherService.GetCoordinatesByZipCode(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }
  CallCoordinatesRevert() {
    let payload: CoordinatesRevertPayload = { lat: this.santafe.lat, lon: this.santafe.lon };
    this.weatherService.GetCoordinatesRevert(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }
  CallWeatherInterface() {
    let payload: WeatherPayload = { lat: this.santafe.lat, lon: this.santafe.lon };
    this.weatherService.GetWeather(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }

  checkResponse() {
    this.response;
    debugger;
  }
  showSeccessNotification() {
    this.notificationService.ShowNotification({
      severity: NotificationSeverity.success,
      message: 'Success test from search page',
      details: 'details...',
    });
  }
  showErrorNotification() {
    this.notificationService.ShowNotification({
      severity: NotificationSeverity.error,
      message: 'Error test from search page',
      details: 'details...',
    });
  }

  showSuccess() {}
}
