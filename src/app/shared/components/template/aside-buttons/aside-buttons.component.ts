import { Component } from '@angular/core';
import { AsideButtons } from './types';
import { ToolbarButtons } from './data';
@Component({
  selector: 'app-aside-buttons',
  templateUrl: './aside-buttons.component.html',
  styleUrls: ['./aside-buttons.component.less']
})
export class AsideButtonsComponent {
  toolbarButtons = ToolbarButtons;

  // readonly AsideButtons = AsideButtons;

  onClickOpenPage(asideButtons: string) {
    console.log(asideButtons);
    // switch (asideButtons) {
    //   case AsideButtons.WhatsApp:
    //     this.redirectToWhatsAppChatWithMessage();
    //     break;

    //   case AsideButtons.Linkedin:
    //     window.open(linkedinParams.baseUrl + linkedinParams.userName, '_blank');
    //     break;

    //   case AsideButtons.Email:
    //     break;

    //   case AsideButtons.Github:
    //     window.open(githubParams.baseUrl + githubParams.userName, '_blank');
    //     break;
    // }
  }

  // redirectToWhatsAppChatWithMessage() {
  //   window.open(
  //     whatsAppParams.baseUrl +
  //       whatsAppParams.number +
  //       '?text=' +
  //       encodeURIComponent(whatsAppParams.message),
  //     '_blank'
  //   );
  // }
}
