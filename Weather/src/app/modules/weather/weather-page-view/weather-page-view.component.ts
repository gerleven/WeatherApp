import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-page-view',
  templateUrl: './weather-page-view.component.html',
  styleUrls: ['./weather-page-view.component.css']
})
export class WeatherPageViewComponent implements OnInit {

  constructor() { }

  pageTitle: string = "Always visible search bar"

  ngOnInit(): void {
  }

}
