import { Component, Input, OnInit } from '@angular/core';
import { WeatherInterface } from '../../interfaces/weather-service.interface';

@Component({
  selector: 'app-weather-card-smaller',
  templateUrl: './weather-card-smaller.component.html',
  styleUrls: ['./weather-card-smaller.component.css'],
})


export class WeatherCardSmallerComponent implements OnInit {
  constructor() {}


  ngOnInit(): void {
    
  }

  @Input() weatherData: WeatherInterface = {} as WeatherInterface;
}
