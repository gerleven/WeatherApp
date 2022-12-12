import { Component, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { NotificationService } from './global-services/notification-service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'Weather';

  constructor(private messageService: MessageService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.messageService.add({severity: "success", summary:'Service Message', detail: "Hola"});
    this.notificationService.toastEmitter.asObservable().subscribe(
      data=>{this.messageService.add({severity: data.severity, summary: data.message, detail: data.details});}
    );
  }
}
