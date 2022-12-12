import { Injectable } from '@angular/core';
import { NotificationSeverity } from 'src/app/global-enums/notification-sererity';
import { ToastMessageInterface } from 'src/app/global-interfaces/toastMessage.interface';


@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  
  //Since I'm using the MessageService (it need to be in the appComponent so all the children components can use it) in order to can wrapp it (for more decoupling), this emitter is for conect my service with MessageService.
  // public toastEmitter = new EventEmitter<ToastMessageInterface>();

  public ShowNotification(toastMessage: ToastMessageInterface): void{
    // this.toastEmitter.emit(toastMessage);
  }
}
