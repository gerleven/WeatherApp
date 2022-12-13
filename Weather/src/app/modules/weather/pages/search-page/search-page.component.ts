import { Component, OnInit } from '@angular/core';
import { InputModeEnum } from 'src/app/global-enums/input-mode';
import { LanguageEnum } from 'src/app/global-enums/languages';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';
import { TempUnitsEnum } from 'src/app/global-enums/temp-units';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';
import {
  CoordinatesByNameInterface,
  CoordinatesByNamePayload,
  CoordinatesByZipCodeInterface,
  CoordinatesByZipCodePayload,
  CoordinatesRevertInterface,
  CoordinatesRevertPayload,
  WeatherInterface,
  WeatherPayload,
} from '../../interfaces/weather-service.interface';
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
    this.changeTempUnit();
    this.changeLanguage();
  }

  value: string = "";

  /* Variables: */
  weatherPayload: WeatherPayload = {} as WeatherPayload;
  
  //Permutations:
  tempUnitSelected:TempUnitsEnum = TempUnitsEnum.standard;
  tempUnitsPermutationMap = {
    [TempUnitsEnum.imperial]: TempUnitsEnum.metric,
    [TempUnitsEnum.metric]: TempUnitsEnum.standard,
    [TempUnitsEnum.standard]: TempUnitsEnum.imperial,
  }

  languageSelected: LanguageEnum = LanguageEnum.english;
  languagePermutationMap = {
    [LanguageEnum.english]: LanguageEnum.spanish,
    [LanguageEnum.spanish]: LanguageEnum.english,
  }
  
  inputModeSelected: InputModeEnum = InputModeEnum.byName;
  inputModePermutationMap = {
    [InputModeEnum.byCordinates] : InputModeEnum.byName,
    [InputModeEnum.byName] : InputModeEnum.byZip,
    [InputModeEnum.byZip] : InputModeEnum.byCordinates,
  }

  //Test Variables
  modeTest = true;
  private response:
    | CoordinatesByNameInterface
    | CoordinatesByZipCodeInterface
    | CoordinatesRevertInterface
    | WeatherInterface = {} as any;
  private santafe= {
    lat: '-31.6333',
    lon: '-60.7',
  };


  /* Functions */

  //Permutation functions
  changeTempUnit(){
    this.tempUnitSelected = this.tempUnitsPermutationMap[this.tempUnitSelected];
  }

  changeLanguage(){
    this.languageSelected = this.languagePermutationMap[this.languageSelected];
  }
  
  changeInputMode(){
    this.inputModeSelected = this.inputModePermutationMap[this.inputModeSelected];
  }

  //Test Buttons functions:
  changeModeTest(){
    this.modeTest = !this.modeTest;
  }
  CallCoordinatesByName() {
    let payload: CoordinatesByNamePayload = { input: 'Santa Fe,AR', limit: 1 };
    this.weatherService.GetCoordinatesByName(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }
  CallCoordinatesByZipCode() {
    let payload: CoordinatesByZipCodePayload = { zip_code: '3000,AR' };
    this.weatherService.GetCoordinatesByZipCode(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }
  CallCoordinatesRevert() {
    let payload: CoordinatesRevertPayload = { lat: this.santafe.lat, lon: this.santafe.lon };
    this.weatherService.GetCoordinatesRevert(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }
  CallWeatherInterface() {
    let payload: WeatherPayload = { lat: this.santafe.lat, lon: this.santafe.lon };
    this.weatherService.GetWeather(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }

  checkResponse() {
    this.response;
    debugger;
  }
  showSeccessNotification() {
    this.notificationService.ShowNotification({
      severity: NotificationSeverity.success,
      message: 'Success test from search page',
      details: 'details...',
    });
  }
  showErrorNotification() {
    this.notificationService.ShowNotification({
      severity: NotificationSeverity.error,
      message: 'Error test from search page',
      details: 'details...',
    });
  }

}
