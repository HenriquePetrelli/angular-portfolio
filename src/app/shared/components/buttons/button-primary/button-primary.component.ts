import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.less']
})
export class ButtonPrimaryComponent {
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
