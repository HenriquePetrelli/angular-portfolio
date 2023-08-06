import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.less']
})
export class SlideShowComponent {
  @Input() imagesPath: Array<string> = [];

  ngOnInit() {
    this.incrementImageDelay();
  }
  incrementImageDelay() {
    for (let index = 0; index < this.imagesPath.length; index++) {
      const className = `.slide--${index + 1}`;
      const delayValue = index === 0 ? '0s' : `${index * 4}s`;
      const cssClass = `${className} {
        animation-delay: ${delayValue} !important;
      }`;
      this.addClassInStyle(cssClass);
    }
  }

  addClassInStyle(cssClass: string) {
    const styleElement = document.createElement('style');
    styleElement.textContent = cssClass;
    const headElement =
      document.head || document.getElementsByTagName('head')[0];
    headElement.appendChild(styleElement);
  }
}
