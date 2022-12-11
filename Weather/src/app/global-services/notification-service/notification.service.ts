import { Injectable } from '@angular/core';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';


@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  public ShowNotification(message: string, severity: string): void{
    alert(message);
  }

  public ShowSuccessNotification(message: string): void{
    this.ShowNotification(message, NotificationSeverity.success);
  }
  public ShowErrorNotification(message: string): void{
    this.ShowNotification(message, NotificationSeverity.error);
  }
  public ShowInfoNotification(message: string): void{
    this.ShowNotification(message, NotificationSeverity.info);
  }
  public ShowWarningNotification(message: string): void{
    this.ShowNotification(message, NotificationSeverity.warning);
  }
}
