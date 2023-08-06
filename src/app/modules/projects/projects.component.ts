import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {
  galleryImages = [
    '../../../assets/img/fast_medic.jpeg',
    '../../../assets/img/fast_medic.jpeg',
    '../../../assets/img/fast_medic.jpeg',
    '../../../assets/img/fast_medic.jpeg'
  ];
}
