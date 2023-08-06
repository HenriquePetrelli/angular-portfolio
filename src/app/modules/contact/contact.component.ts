import { Component } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {
  constructor(private contactService: ContactService) {}

  get contactModuleTexts() {
    return this.contactService.getContactModuleTexts();
  }
}
