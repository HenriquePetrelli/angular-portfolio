import { Component } from '@angular/core';
import { AboutService } from 'src/app/core/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  constructor(private aboutService: AboutService) {}

  get getBio() {
    return this.aboutService.getBio();
  }
}
