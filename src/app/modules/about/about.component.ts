import { Component } from '@angular/core';
import { AboutService } from 'src/app/core/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  bio: string;

  constructor(private aboutService: AboutService) {
    this.bio = this.aboutService.getBio();
  }
}
