import { Component } from '@angular/core';
import { ProgressBarColors } from 'src/app/shared/components/progress/progress-bar/types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {
  readonly progressBarColors = ProgressBarColors;
}
