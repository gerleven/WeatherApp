//Direct geocoding
//Direct geocoding allows to get geographical coordinates (lat, lon) by using name of the location (city name or area name).

import { InputModeEnum } from 'src/app/global-enums/input-mode';

//Coordinates by location name:
export interface CoordinatesByNamePayload {
  input: string; //City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.
  limit?: number;
}
export interface CoordinatesByNameInterface {
  name: string;
  local_names: {};
  lat: string;
  lon: string;
  country: string;
  state?: string;
}

//Coordinates by zip/post code
export interface CoordinatesByZipCodePayload {
  zip_code: string; //Zip/post code and country code divided by comma. Please use ISO 3166 country codes.
}
export interface CoordinatesByZipCodeInterface {
  zip: string;
  name: string;
  lat: string;
  lon: string;
  country: string;
}

//Reverse geocoding
//Allows to get name of the location (city name or area name) by using geografical coordinates (lat, lon)
export interface CoordinatesRevertPayload {
  lat: string; //Geographical coordinates
  lon: string; //Geographical coordinates
  limit?: number; //Number of the location names in the API response (several results can be returned in the API response)
}
export interface CoordinatesRevertInterface {
  name: string;
  local_names: {};
  lat: string;
  lon: string;
  country: string;
  state?: string;
}

export interface WeatherPayload {
  lat: string; //Geographical coordinates
  lon: string; //Geographical coordinates
  mode?: string; //Response format. Possible values are xml and html (json by default)
  units?: string; //Units of measurement. standard, metric and imperial. standard by default
  lang?: string; //You can use this parameter to get the output in your language.
}
export interface WeatherInterface {
  tempUnitLabel?: string;
  coord: {
    lon: string;
    lat: string;
  };
  weather: {
    id: string;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: string;
    feels_like: string;
    pressure: string;
    humidity: string;
    temp_min: string;
    temp_max: string;
    sea_level: string;
    grnd_level: string;
  };
  visibility: string;
  wind: {
    speed: string;
    deg: string;
    gust: string;
  };
  clouds: {
    all: string;
  };
  rain: {
    '1h': string;
    '3h': string;
  };
  snow: {
    '1h': string;
    '3h': string;
  };
  dt: string;
  sys: {
    type: string;
    id: string;
    message: string;
    country: string;
    sunrise: string;
    sunset: string;
  };
  timezone: string;
  id: string;
  name: string;
  cod: string;
}
