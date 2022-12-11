import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page-view',
  templateUrl: './about-page-view.component.html',
  styleUrls: ['./about-page-view.component.css']
})
export class AboutPageViewComponent implements OnInit {

  constructor() { }

  pageTitle: string = "About this Project";
  pageSubTitle: string = "In this section you will found all the info about the development procces of this project";

  ngOnInit(): void {
  }

}
