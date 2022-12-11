import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footerData = [
    {name: "linkedin", label: "in/german-levental", link: "https://www.linkedin.com/in/german-levental/", icon: "pi-linkedin", toolTipText: "Go to my linkedin"},
    {name: "openWeatherApi", label: "Open Weather Api doc", link: "https://openweathermap.org/current", icon: "pi-link", toolTipText: "Go to Open Weather Api documentation"},
    {name: "geocoding", label: "Geocoding Api doc", link: "https://openweathermap.org/api/geocoding-api", icon: "pi-link", toolTipText: "Go to Geocoding Api documentation"},
    {name: "conditions", label: "Weather Conditions list", link: "https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2", icon: "pi-link", toolTipText: "List of conditions"},
  ]

}
