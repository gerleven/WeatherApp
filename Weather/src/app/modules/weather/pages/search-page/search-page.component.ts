import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';
import { WeatherInterface } from '../../interfaces/weather-service.interface';
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

  ngOnInit(): void {
    
  }

  favoriteList: WeatherInterface[] = [] as WeatherInterface[];


  addCityToFavoriteList(city: WeatherInterface){
    this.favoriteList.push(city);
  }

}
