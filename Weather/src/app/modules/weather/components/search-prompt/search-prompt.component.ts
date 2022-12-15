import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';
import { WeatherService } from '../../services/weather.service';
import { InputModeEnum } from 'src/app/global-enums/input-mode';
import { LanguageEnum } from 'src/app/global-enums/languages';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';
import { TempUnitsEnum } from 'src/app/global-enums/temp-units';
import {
  CoordinatesByNameInterface,
  CoordinatesByNamePayload,
  CoordinatesByZipCodePayload,
  WeatherInterface,
  WeatherPayload,
} from '../../interfaces/weather-service.interface';

@Component({
  selector: 'app-search-prompt',
  templateUrl: './search-prompt.component.html',
  styleUrls: ['./search-prompt.component.css'],
})
export class SearchPromptComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    // this.inputValueLatitude ="-31.6187";
    // this.inputValueLongitude ="-60.702";
    this.inputValueByName="tucuman,ar"
    this.onClickSearch();
  }

  @Output() emitterWeatherResponse = new EventEmitter<WeatherInterface>();

  /* Variables: */
  inputValueByName: string = '';
  inputValueZipCode: string = '';
  inputValueLatitude: string = '';
  inputValueLongitude: string = '';

  loading = false;


  private weatherApiResponse:WeatherInterface = {} as WeatherInterface;
    
  //Permutations:
  tempUnitSelected: TempUnitsEnum = TempUnitsEnum.F;
  tempUnitsPermutationMap = {
    [TempUnitsEnum.F]: TempUnitsEnum.C,
    [TempUnitsEnum.C]: TempUnitsEnum.K,
    [TempUnitsEnum.K]: TempUnitsEnum.F,
  };

  languageSelected: LanguageEnum = LanguageEnum.english;
  languagePermutationMap = {
    [LanguageEnum.english]: LanguageEnum.spanish,
    [LanguageEnum.spanish]: LanguageEnum.english,
  };

  inputModeSelected: InputModeEnum = InputModeEnum.byName;
  inputModePermutationMap = {
    [InputModeEnum.byCordinates]: InputModeEnum.byName,
    [InputModeEnum.byName]: InputModeEnum.byZip,
    [InputModeEnum.byZip]: InputModeEnum.byCordinates,
  };

  /* Functions */

  onClickSearch() {
    this.loading=true;
    if(this.inputModeSelected==InputModeEnum.byName){
      let payloadByName: CoordinatesByNamePayload = {input: this.inputValueByName} as CoordinatesByNamePayload;
      this.weatherService.GetCoordinatesByName(payloadByName).subscribe(
        (data: any) => {
          this.loading=false;
          if(data[0]){
            let response: CoordinatesByNameInterface = data[0];
            this.inputValueLatitude=response.lat;
            this.inputValueLongitude=response.lon;
            this.callWeatherApi();
          }else{
            this.notificationService.ShowNotification({
              severity: NotificationSeverity.info,
              message: 'No results',
              details: 'Check input and try again',
            });
          }
        },
        (error) => {this.loading=false;},
      );
    }
    if(this.inputModeSelected==InputModeEnum.byZip){
      let payloadByZipCode: CoordinatesByZipCodePayload = {zip_code: this.inputValueZipCode} as CoordinatesByZipCodePayload;
      this.weatherService.GetCoordinatesByZipCode(payloadByZipCode).subscribe(
        (data)=>{
          this.loading = false;
          if(data){
            this.inputValueLatitude = data.lat;
            this.inputValueLongitude = data.lon;
            this.callWeatherApi();
          }else{
            this.notificationService.ShowNotification({
              severity: NotificationSeverity.info,
              message: 'No results',
              details: 'Check input and try again',
            });
          }
          
        },
        ()=>{this.loading = false;},
      );
    } 
    if(this.inputModeSelected==InputModeEnum.byCordinates){
      this.callWeatherApi();
    } 
  }

  callWeatherApi(){
    this.loading=true;
    let payload: WeatherPayload = {
      lat: this.inputValueLatitude,
      lon: this.inputValueLongitude,
      units: this.tempUnitSelected,
      lang: this.languageSelected,

    } as WeatherPayload;

    this.weatherService.GetWeather(payload).subscribe(
      (data: any) => {
        this.loading=false;
        
        if(data){
          this.weatherApiResponse = data as WeatherInterface;
          this.weatherApiResponse.tempUnitLabel = this.getTempUnitSelected();
          this.emitterWeatherResponse.emit(this.weatherApiResponse);
        }else{
          this.notificationService.ShowNotification({
            severity: NotificationSeverity.info,
            message: 'No results',
            details: 'Check input and try again',
          });
        }
      },
      (error) => {this.loading=false;},
    );

  }

  getTempUnitSelected(){
    let tempUnitsMap = {
      "standard":"k°",
      "metric":"C°",
      "imperial":"F°",
    }
    return tempUnitsMap[this.tempUnitSelected];
  }


  //Permutation functions
  changeTempUnit() {
    this.tempUnitSelected = this.tempUnitsPermutationMap[this.tempUnitSelected];
  }

  changeLanguage() {
    this.languageSelected = this.languagePermutationMap[this.languageSelected];
  }

  changeInputMode() {
    this.inputModeSelected = this.inputModePermutationMap[this.inputModeSelected];
    
    

  }
}
