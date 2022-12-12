import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  
  private url: string = "http://api.openweathermap.org/geo/1.0/direct?q=Santa Fe,AR&limit=&appid=";
  private apiKey = "b70c09c7012c40b88c45aa7daf0ee288";
  
  public GetCoordinatesByName(input: string, limit: number){
    let url: string = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=${limit}&appid=${this.apiKey}`;
    return this.httpClient.get(this.url).pipe(
        tap(
          (data)=>{debugger},
          (error)=>{debugger}
        )
    );
}
}
