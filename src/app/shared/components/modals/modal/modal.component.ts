import { Component, EventEmitter, Input, Output } from '@angular/core';
import { lockScroll, unlockScroll } from 'src/app/shared/helper/pageScroll';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.less']
})
export class ModalComponent {
  @Input() isOpen!: boolean;
  @Input() title!: string;
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    lockScroll();
    console.log(this.title);
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.closeModalEvent.emit();
    unlockScroll();
  }
}
