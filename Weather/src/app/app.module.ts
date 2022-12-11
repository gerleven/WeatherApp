import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './global-components/footer/footer.component';
import { PageViewComponent } from './global-components/page-view/page-view.component';

import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UsersPageViewComponent } from './modules/users/users-page-view/users-page-view.component';
import { WeatherPageViewComponent } from './modules/weather/weather-page-view/weather-page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageViewComponent,
    UsersPageViewComponent, WeatherPageViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    ButtonModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}