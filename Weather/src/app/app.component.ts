import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'Weather';

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.messageService.add({severity: "success", summary:'Service Message', detail: "Hola"});
  }

  showSuccess(message: string, detail?: string) {
      this.messageService.add({severity:'success', summary: message, detail: detail});
  }

  showInfo(message: string, detail?: string) {
      this.messageService.add({severity:'info', summary: message, detail: detail});
  }

  showWarn(message: string, detail?: string) {
      this.messageService.add({severity:'warn', summary: message, detail: detail});
  }

  showError(message: string, detail?: string) {
      this.messageService.add({severity:'error', summary: message, detail: detail});
  }
}
