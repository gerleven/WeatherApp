import { DomElementSchemaRegistry } from '@angular/compiler';
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

  weatherResult: WeatherInterface = {} as WeatherInterface;
  favoriteCities : WeatherInterface[] = [] as WeatherInterface[];

  ngOnInit(): void {
    this.testApi();
    
  }

  receiveWeatherResponse(event: WeatherInterface){
    this.weatherResult = event;
  }

  addFavorite(event: boolean){
    this.favoriteCities.push(this.weatherResult);
  }
  onClose(event: boolean){
    this.weatherResult = {} as WeatherInterface;
  }

  showCard(){
    return Object.keys(this.weatherResult).length!=0;
  }

  deleteCity(city: WeatherInterface){
    let index = this.favoriteCities.indexOf(city);
    if(index!=-1){
      this.favoriteCities.splice(index,1);
    }
  }

  // test(){
  // }

  testApi(){
    
    let payload: WeatherPayload = {
      lat: "-30",
      lon: "-60"
    } as WeatherPayload;
    this.weatherService.GetWeather(payload).subscribe(
      ()=>{},
      ()=>{
        this.notificationService.ShowNotification({
          severity: NotificationSeverity.warning,
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
