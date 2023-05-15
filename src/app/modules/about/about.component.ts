import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  bio: string;

  constructor(private dataService: DataService) {
    this.bio = this.dataService.getBio();
  } 
}
