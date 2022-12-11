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
import { TooltipModule } from 'primeng/tooltip';
import { MenuComponent } from './global-components/menu/menu.component';
import { MenuBarComponent } from './global-components/menu-bar/menu-bar.component';
import { CustomButtonComponent } from './utils/custom-button/custom-button.component';
import { CustomDropdownComponent } from './utils/custom-dropdown/custom-dropdown.component';
import { ToastModule } from 'primeng/toast';
import { AboutPageViewComponent } from './modules/about/about-page-view/about-page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageViewComponent,
    UsersPageViewComponent,
    WeatherPageViewComponent,
    MenuComponent,
    MenuBarComponent,
    CustomButtonComponent,
    CustomDropdownComponent,
    AboutPageViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
