import { Component, OnInit } from '@angular/core';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';
import { CoordinatesByNameInterface } from '../../interfaces/weather-service.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor( private weatherService: WeatherService, private notificationService: NotificationService) { }

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
  test3(){
    this.notificationService.ShowNotification({
      severity: NotificationSeverity.success,
      message: 'Success test from search page',
      details: "details..."
    });
  }
  test4(){
    this.notificationService.ShowNotification({
      severity: NotificationSeverity.error,
      message: 'Error test from search page',
      details: "details..."
    });
  }

  showSuccess(){

  }

}
