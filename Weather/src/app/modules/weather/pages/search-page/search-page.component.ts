import { Component, OnInit } from '@angular/core';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';
import { WeatherInterface, WeatherPayload } from '../../interfaces/weather-service.interface';
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
    this.notificationService.ShowNotification({
      severity: NotificationSeverity.info,
      message: 'Testing Api...',
      details: "It'll check for CORS and others problems"
    });
    setTimeout(this.testApi, 2000);
    
  }

  testApi(){
    
    let payload: WeatherPayload = {
      lat: "-30",
      lon: "-60"
    } as WeatherPayload;
    this.weatherService.GetWeather(payload).subscribe(
      ()=>{
        this.notificationService.ShowNotification({
          severity: NotificationSeverity.success,
          message: 'Api works...',
        });
      },
      ()=>{
        this.notificationService.ShowNotification({
          severity: NotificationSeverity.success,
          message: 'The call Api is not working...',
          details: "Check network on devtools, if having CORS problems run in localy"
        });
      },
      ()=>{},
    );
  }

  favoriteList: WeatherInterface[] = [] as WeatherInterface[];


  addCityToFavoriteList(city: WeatherInterface){
    this.favoriteList.push(city);
  }

}
