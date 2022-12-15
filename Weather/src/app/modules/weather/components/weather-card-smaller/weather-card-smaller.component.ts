import { Component, Input, OnInit } from '@angular/core';
import { WeatherInterface } from '../../interfaces/weather-service.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card-smaller',
  templateUrl: './weather-card-smaller.component.html',
  styleUrls: ['./weather-card-smaller.component.css'],
})


export class WeatherCardSmallerComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
    
  }

  getIcon(iconId:string ,bigIcon?:boolean){
    return this.weatherService.GetIcon(iconId,bigIcon);
  }

  @Input() weatherData: WeatherInterface = {} as WeatherInterface;

  onDelete(){
    alert("Not implemented yet.");
  }
}
