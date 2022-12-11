import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

  constructor() {}

  @Input() pageViewTitle: string = "";
  @Input() pageViewSubTitle: string = "";

  ngOnInit(): void {
  }

}
