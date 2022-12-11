import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { AlertsPageComponent } from './pages/alerts-page/alerts-page.component';



@NgModule({
  declarations: [
    SearchPageComponent,
    CitiesPageComponent,
    AlertsPageComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
