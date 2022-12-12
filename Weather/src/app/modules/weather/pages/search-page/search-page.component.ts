import { Component, OnInit } from '@angular/core';
import { CoordinatesByNameInterface } from '../../interfaces/weather-service.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  private response: CoordinatesByNameInterface = {} as CoordinatesByNameInterface;

  test(){
    this.weatherService.GetCoordinatesByName("Santa Fe,AR",1).subscribe(
      (data)=>{this.response = data},
      (error)=>{},
    );
  }

  test2(){
    this.response;
    debugger
  }

}
