import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  redirectToWhatsAppChatWithMessage() {
    window.open(
      "https://wa.me/" + "41999459041" + "?text=" + encodeURIComponent("Olá Henrique, tudo bem?"), "_blank");
  }
}
