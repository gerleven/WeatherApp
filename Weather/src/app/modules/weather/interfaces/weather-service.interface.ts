export interface CoordinatesByNameInterface {
  country: string;
  lat: string;
  local_names: {};
  lon: string;
  name: string;
  state: string;
}

export interface CoordinatesByZipCodeInterface {
  zip: string;
  name: string;
  lat: string;
  lon: string;
  country: string;
}

export interface CoordinatesRevertInterface {
  name: string;
  local_names: {};
  lat: string;
  lon: string;
  country: string;
  state: string;
}

export interface WeatherInterface {
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
    temp_min: string;
    temp_max: string;
    pressure: string;
    humidity: string;
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
  dt: string;
  sys: {
    country: string;
    sunrise: string;
    sunset: string;
  };
  timezone: string;
  id: string;
  name: string;
  cod: string;
}
