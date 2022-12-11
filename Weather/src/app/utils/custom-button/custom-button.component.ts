import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomButtonVariant } from './interfaces/custom-button.interfaces';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent implements OnInit {
  constructor() {}

  @Input() label: string = '';
  @Input() variant: CustomButtonVariant = {} as CustomButtonVariant;
  @Input() preIcon: string = '';
  @Input() postIcon: string = '';
  @Input() style: string = '';

  @Output() onClickAction = new EventEmitter<boolean>();

  onClickEvent() {
    this.onClickAction.emit();
  }

  private iconsMap: any = {
    user: 'pi pi-user',
    'power-off': 'pi pi-power-off',
  };

  getIcon() {
    return this.iconsMap[this.preIcon];
  }

  getPostIcon() {
    return this.iconsMap[this.postIcon];
  }

  getStyle() {
    return this.style ? this.style : '';
  }

  getClass() {
    return 'p-button-raised p-button-text p-button-plain ' + (this.variant.rouned ? 'p-button-rounded' : '');
  }

  ngOnInit(): void {}
}
