import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page-view',
  templateUrl: './users-page-view.component.html',
  styleUrls: ['./users-page-view.component.css']
})
export class UsersPageViewComponent implements OnInit {

  constructor() { }

  pageTitle: string = "Users Manager";
  pageSubTitle: string = "The following table shows the registered users";

  ngOnInit(): void {
  }

}
