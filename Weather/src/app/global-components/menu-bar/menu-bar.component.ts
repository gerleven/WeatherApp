import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  itemsMenu: MenuItem[] = [] as MenuItem[];


  ngOnInit(): void {
    this.itemsMenu = [
      // {
      //   label: 'Menu',
      //   icon: 'pi pi-fw pi-bars',
      // },
    ];
  }

}
