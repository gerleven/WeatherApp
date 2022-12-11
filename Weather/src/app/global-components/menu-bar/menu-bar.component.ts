import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NotificationService } from 'src/app/global-services/notification-service/notification.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  itemsMenu: MenuItem[] = [] as MenuItem[];

  ngOnInit(): void {
    this.itemsMenu = [
      // {
      //   label: 'Menu',
      //   icon: 'pi pi-fw pi-bars',
      // },
    ];
  }

  onSingout(){
    alert("SingOut event")
    this.notificationService.ShowSuccessNotification("Success example");
  }

}
