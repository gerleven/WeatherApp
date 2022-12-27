import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherInterface } from '../../interfaces/weather-service.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card-smaller',
  templateUrl: './weather-card-smaller.component.html',
  styleUrls: ['./weather-card-smaller.component.css'],
})


export class WeatherCardSmallerComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  @Input() weatherData: WeatherInterface = {} as WeatherInterface;
  @Output() deleteCity = new EventEmitter<WeatherInterface>();
  @Output() openWeatherBigCard = new EventEmitter<WeatherInterface>();

  ngOnInit(): void {
    
  }

  getIcon(iconId:string ,bigIcon?:boolean){
    return this.weatherService.GetIcon(iconId,bigIcon);
  }


  onDelete(){
    this.deleteCity.emit(this.weatherData);
  }

  onOpenWeatherBigCard(){
    this.openWeatherBigCard.emit(this.weatherData);
  }
}
