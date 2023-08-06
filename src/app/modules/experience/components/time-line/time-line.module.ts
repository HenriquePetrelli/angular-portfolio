import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimeLineComponent } from './time-line.component';
import { ExperienceDetailModalComponent } from '../experience-detail-modal/experience-detail-modal.component';

@NgModule({
  declarations: [
    TimeLineComponent,
    ExperienceDetailModalComponent,
  ],
  imports: [CommonModule]
})
export class TimeLineModule { }
