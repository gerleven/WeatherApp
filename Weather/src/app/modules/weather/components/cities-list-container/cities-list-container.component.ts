import { Component, Input, OnInit } from '@angular/core';
import { WeatherInterface } from '../../interfaces/weather-service.interface';

@Component({
  selector: 'app-cities-list-container',
  templateUrl: './cities-list-container.component.html',
  styleUrls: ['./cities-list-container.component.css']
})
export class CitiesListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() favoriteList: WeatherInterface[] = [] as WeatherInterface[];

}
