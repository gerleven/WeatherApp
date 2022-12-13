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
import { CustomDropdownComponent } from './utils/custom-dropdown/custom-dropdown.component';
import { ToastModule } from 'primeng/toast';
import { AboutPageViewComponent } from './modules/about/about-page-view/about-page-view.component';
import { HttpClientModule } from '@angular/common/http';

import { CustomButtonComponent } from './utils/custom-button/custom-button.component';
import { SearchPageComponent } from './modules/weather/pages/search-page/search-page.component';
import { CitiesPageComponent } from './modules/weather/pages/cities-page/cities-page.component';
import { AlertsPageComponent } from './modules/weather/pages/alerts-page/alerts-page.component';
import { UsersManagerPageComponent } from './modules/users/pages/users-manager-page/users-manager-page.component';
import { AboutThisProjectComponent } from './modules/about/pages/about-this-project/about-this-project.component';
import { AppliedKnowledgeComponent } from './modules/about/pages/applied-knowledge/applied-knowledge.component';
import { FormsModule } from '@angular/forms';
import { SearchPromptComponent } from './modules/weather/components/search-prompt/search-prompt.component';
import { CitiesListContainerComponent } from './modules/weather/components/cities-list-container/cities-list-container.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    AppComponent,
    FooterComponent,
    PageViewComponent,
    UsersPageViewComponent,
    WeatherPageViewComponent,
    MenuComponent,
    MenuBarComponent,
    CustomDropdownComponent,
    AboutPageViewComponent,
    SearchPageComponent,
    CitiesPageComponent,
    AlertsPageComponent,
    UsersManagerPageComponent,
    AboutThisProjectComponent,
    AppliedKnowledgeComponent,
    SearchPromptComponent,
    CitiesListContainerComponent,
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
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
