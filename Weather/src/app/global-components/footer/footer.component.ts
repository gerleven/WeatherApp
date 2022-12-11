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

  private footerData = [{name: "linkedin", label: "in/german-levental", link: "https://www.linkedin.com/in/german-levental/", icon: "pi-linkedin"},]

}
