import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather';

  itemsAppBar: MenuItem[] = [] as MenuItem[];
  itemsMenu: MenuItem[] = [] as MenuItem[];

  ngOnInit() {
    this.itemsAppBar = [
      {
        label: 'Menu',
        icon: 'pi pi-fw pi-bars',
      },
    ];

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
          {
            label: 'Cities',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['/weather/cities'],
          },
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
      }
    ] as MenuItem[];
  }
}
