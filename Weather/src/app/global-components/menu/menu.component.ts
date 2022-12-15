import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  
  itemsMenu: MenuItem[] = [] as MenuItem[];

  ngOnInit(): void {
    this.itemsMenu = [
      {
        label: 'Weather',
        escape: false,
        items: [
          {
            label: 'Search',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['/weather/search'],
          },
          // {
          //   label: 'Cities',
          //   icon: 'pi pi-fw pi-circle',
          //   routerLink: ['/weather/cities'],
          // },
          {
            label: 'Alerts',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['/weather/alerts'],
          }
        ],
      },
      {
        label: 'Users',
        escape: false,
        items: [
          {
            label: 'Registered Users',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['/users/users-manager'],
          },
        ],
      },
      {
        label: 'About',
        escape: false,
        items: [
          {
            label: 'This project',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['/about/this-rpoject'],
          },
          {
            label: 'Applied knowledge',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['/about/applied-knowledge'],
          },
        ],
      }
    ] as MenuItem[];
  }

}
