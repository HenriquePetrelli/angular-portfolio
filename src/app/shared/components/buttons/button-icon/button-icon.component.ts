import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IconSize } from '../../icon/types';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.less']
})
export class ButtonIconComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() color = '#000000';
  @Input() size?: IconSize = IconSize.md;
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  buttonId!: string;

  constructor() { }

  ngOnInit() {
    this.buttonId = this.icon + "-" + "button"
   
  }

  ngAfterViewInit() { this.setElementSize();}

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  setElementSize() {
    const element = document.getElementById(this.buttonId) as HTMLElement;
    element.style.width = `${this.size}px`;
    element.style.height = `${this.size}px`;
  }
}
