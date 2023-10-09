import { Component } from '@angular/core';
import { AboutService } from 'src/app/core/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  constructor(private aboutService: AboutService) {}

  get getAboutData() {
    return this.aboutService.getAboutModuleData().about;
  }

  get getbuttonLabel() {
    return this.aboutService.getAboutModuleData().buttonLabel;
  }
}
