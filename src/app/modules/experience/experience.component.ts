import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/core/services/experience/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {
  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {}
}
