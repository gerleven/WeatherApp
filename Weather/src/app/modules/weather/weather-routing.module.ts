import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsPageComponent } from './pages/alerts-page/alerts-page.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "search",
    pathMatch: "full"
  }
  ,
  {
    path: "search",
    component: SearchPageComponent
  }
  ,
  {
    path: "cities",
    component: CitiesPageComponent
  }
  ,
  {
    path: "alerts",
    component: AlertsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
