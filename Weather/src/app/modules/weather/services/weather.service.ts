import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoordinatesByNameInterface } from '../interfaces/weather-service.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  private apiKey = 'b70c09c7012c40b88c45aa7daf0ee288';

  public GetCoordinatesByName(input: string,limit: number): Observable<CoordinatesByNameInterface> {
    let url: string = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=${limit}&appid=${this.apiKey}`;
    return this.httpClient.get<CoordinatesByNameInterface>(url).pipe(
      tap(
        (data) => {},
        (error) => {}
      )
    );
  }

  // GetCoordinatesByZipCOde
  // http://api.openweathermap.org/geo/1.0/zip?zip=3000,AR&appid={{API key}}

  // GetCoordinatesRevert
  // http://api.openweathermap.org/geo/1.0/reverse?lat=-31&lon=-60&limit=&appid={{API key}}


  // GetWeather
  // https://api.openweathermap.org/data/2.5/weather?lat=-31&lon=-60&appid={{API key}}&lang=es&mode=json&units=metric
}
