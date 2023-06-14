import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.less']
})
export class ToggleSwitchComponent {
  @Input() value?: boolean;
  @Input() label?: string;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSwitch(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const checked = target.checked;
      this.value = checked;
      this.valueChange.emit(this.value);
    }
  }
}
