import { Component, Input, OnInit } from '@angular/core';
import { WeatherInterface } from '../../interfaces/weather-service.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card-bigger',
  templateUrl: './weather-card-bigger.component.html',
  styleUrls: ['./weather-card-bigger.component.css']
})
export class WeatherCardBiggerComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getIcon(iconId:string ,bigIcon?:boolean){
    return this.weatherService.GetIcon(iconId,bigIcon);
  }

  @Input() weatherData: WeatherInterface = {} as WeatherInterface;

  onClickCancel(){
    alert("Not implemented yet.");
  }
  addFavorite(){
    alert("Not implemented yet.");
  }

}
