import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';
import { CoordinatesByNameInterface, CoordinatesByNamePayload, CoordinatesByZipCodeInterface, CoordinatesByZipCodePayload, CoordinatesRevertInterface, CoordinatesRevertPayload, WeatherInterface, WeatherPayload } from '../interfaces/weather-service.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient, private notificationService: NotificationService) {}

  private apiKey = 'b70c09c7012c40b88c45aa7daf0ee288';

  public GetCoordinatesByName(payload: CoordinatesByNamePayload): Observable<CoordinatesByNameInterface> {
    let url: string = `http://api.openweathermap.org/geo/1.0/direct?q=${payload.input}&limit=${payload.limit?payload.limit:''}&appid=${this.apiKey}`;
    return this.httpClient.get<CoordinatesByNameInterface>(url).pipe(
      tap(
        (data) => {},
        (error) => {this.notificationService.ShowNotification({
          severity: NotificationSeverity.error,
          message: "Coordinates By Name couldn't be retrieved"
        })}
      )
    );
  }

  public GetCoordinatesByZipCode(payload: CoordinatesByZipCodePayload): Observable<CoordinatesByZipCodeInterface> {
    let url: string = `http://api.openweathermap.org/geo/1.0/zip?zip=${payload.zip_code}&appid=${this.apiKey}`;
    return this.httpClient.get<CoordinatesByZipCodeInterface>(url).pipe(
      tap(
        (data) => {},
        (error) => {this.notificationService.ShowNotification({
          severity: NotificationSeverity.error,
          message: "Coordinates By ZipCode couldn't be retrieved"
        })}
      )
    );
  }

  public GetCoordinatesRevert(payload: CoordinatesRevertPayload): Observable<CoordinatesRevertInterface> {
    let url: string = `http://api.openweathermap.org/geo/1.0/reverse?lat=${payload.lat}&lon=${payload.lon}&limit${payload.limit?payload.limit:''}=&appid=${this.apiKey}`;
    return this.httpClient.get<CoordinatesRevertInterface>(url).pipe(
      tap(
        (data) => {},
        (error) => {this.notificationService.ShowNotification({
          severity: NotificationSeverity.error,
          message: "The City name for this Coordinates couldn't be retrieved"
        })}
      )
    );
  }

  public GetWeather(payload: WeatherPayload): Observable<WeatherInterface> {
    let url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}&lang=${payload.lang?payload.lang:''}&mode=${payload.mode?payload.mode:''}&units=${payload.units?payload.units:''}&appid=${this.apiKey}`;
    return this.httpClient.get<WeatherInterface>(url).pipe(
      tap(
        (data) => {},
        (error) => {this.notificationService.ShowNotification({
          severity: NotificationSeverity.error,
          message: "Weather couldn't be retrieved"
        })}
      )
    );
  }
}
