import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';
import { WeatherService } from '../../services/weather.service';
import { InputModeEnum } from 'src/app/global-enums/input-mode';
import { LanguageEnum } from 'src/app/global-enums/languages';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';
import { TempUnitsEnum } from 'src/app/global-enums/temp-units';
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

  ngOnInit(): void {}

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

  //Test Variables
  modeTest = false;
  private response:
    | CoordinatesByNameInterface
    | CoordinatesByZipCodeInterface
    | CoordinatesRevertInterface
    | WeatherInterface = {} as any;
  private santafe = {
    lat: '-31.6333',
    lon: '-60.7',
  };

  /* Functions */

  onClickSearch() {
    this.loading=true;
    if(this.inputModeSelected==InputModeEnum.byName){
      let payloadByName: CoordinatesByNamePayload = {input: this.inputValueByName} as CoordinatesByNamePayload;
      this.weatherService.GetCoordinatesByName(payloadByName).subscribe(
        (data: any) => {
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
        (error) => {}
      );
    }
    if(this.inputModeSelected==InputModeEnum.byZip){
      this.notificationService.ShowNotification({
        severity: NotificationSeverity.info,
        message: 'Search by Zip Code is not implemented yet',
        details: 'Will be available in the next version, try search by Name',
      });
    } 
    if(this.inputModeSelected==InputModeEnum.byCordinates){
      this.notificationService.ShowNotification({
        severity: NotificationSeverity.info,
        message: 'Search by Coordinates is not implemented yet',
        details: 'Will be available in the next version, try search by Name',
      });
    } 
  }

  callWeatherApi(){
    this.inputModeSelected;

    this.inputValueByName;
    this.inputValueZipCode;
    this.inputValueLatitude;
    this.inputValueLongitude;

    this.languageSelected;
    this.tempUnitSelected;

    let payload: WeatherPayload = {
      lat: this.inputValueLatitude,
      lon: this.inputValueLongitude,
      mode: "json",
      units: this.tempUnitSelected,
      lang: this.languageSelected,

    } as WeatherPayload;

    this.weatherService.GetWeather(payload).subscribe(
      (data: any) => {
        
        if(data){
          this.weatherApiResponse = data as WeatherInterface;
          debugger
          console.log(this.weatherApiResponse);
          this.notificationService.ShowNotification({
            severity: NotificationSeverity.success,
            message: `${this.weatherApiResponse.main.temp} ${this.getTempUnitSelected()} - ${this.weatherApiResponse.weather[0].main} `,
            details: `${this.weatherApiResponse.name}`,
          });
          this.notificationService.ShowNotification({
            severity: NotificationSeverity.info,
            message: "A card presentation will be implemented in the next version",
            details: "",
          });
        }else{
          this.notificationService.ShowNotification({
            severity: NotificationSeverity.info,
            message: 'No results',
            details: 'Check input and try again',
          });
        }
        debugger
      },
      (error) => {},
      ()=>{this.loading=false}
    );

  }

  getTempUnitSelected(){
    let unit:string = "" + (this.tempUnitSelected=="standard"?"k°":"") + (this.tempUnitSelected=="metric"?"C°":"") + (this.tempUnitSelected=="imperial"?"F°":"");
    return unit;
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

  //Test Buttons functions:
  changeModeTest() {
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
    let payload: CoordinatesRevertPayload = {
      lat: this.santafe.lat,
      lon: this.santafe.lon,
    };
    this.weatherService.GetCoordinatesRevert(payload).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {}
    );
  }
  CallWeatherInterface() {
    let payload: WeatherPayload = {
      lat: this.santafe.lat,
      lon: this.santafe.lon,
    };
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
