import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageViewComponent } from './modules/about/about-page-view/about-page-view.component';
import { UsersPageViewComponent } from './modules/users/users-page-view/users-page-view.component';
import { WeatherPageViewComponent } from './modules/weather/weather-page-view/weather-page-view.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "weather",
    pathMatch: "full"
  }
  ,
  {
    path: "weather",
    component: WeatherPageViewComponent,
    loadChildren: ()=> import("./modules/weather/weather.module").then((m)=>m.WeatherModule),
  }
  ,
  {
    path: "users",
    component: UsersPageViewComponent,
    loadChildren: ()=> import("./modules/users/users.module").then((m)=>m.UsersModule),
  }
  ,
  {
    path: "about",
    component: AboutPageViewComponent,
    loadChildren: ()=> import("./modules/about/about.module").then((m)=>m.AboutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
