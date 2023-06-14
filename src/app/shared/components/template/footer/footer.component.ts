import {
  whatsAppParams,
  linkedinParams,
  emailParams,
  githubParams
} from './data';
import { Component } from '@angular/core';
import { FooterButtons } from './types';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  readonly FooterButtons = FooterButtons;

  readonly whatsAppParams = whatsAppParams;
  readonly linkedinParams = linkedinParams;
  readonly emailParams = emailParams;
  readonly githubParams = githubParams;

  onClickOpenPage(footerButton: string) {
    switch (footerButton) {
      case FooterButtons.WhatsApp:
        this.redirectToWhatsAppChatWithMessage();
        break;

      case FooterButtons.Linkedin:
        window.open(linkedinParams.baseUrl + linkedinParams.userName, '_blank');
        break;

      case FooterButtons.Email:
        break;

      case FooterButtons.Github:
        window.open(githubParams.baseUrl + githubParams.userName, '_blank');
        break;
    }
  }

  redirectToWhatsAppChatWithMessage() {
    window.open(
      whatsAppParams.baseUrl +
        whatsAppParams.number +
        '?text=' +
        encodeURIComponent(whatsAppParams.message),
      '_blank'
    );
  }
}
