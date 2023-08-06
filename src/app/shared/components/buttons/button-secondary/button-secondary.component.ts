import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.less']
})
export class ButtonSecondaryComponent {
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
