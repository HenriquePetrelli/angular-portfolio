import { NgModule } from '@angular/core';
import { ExperienceComponent } from './experience.component';
import { RouterModule, Routes } from '@angular/router';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { CommonModule } from '@angular/common';
import { ExperienceDetailModalComponent } from './components/experience-detail-modal/experience-detail-modal.component';
import { ModalComponent } from 'src/app/shared/components/modals/modal/modal.component';
import { SlideShowComponent } from 'src/app/shared/components/image-exibition/slide-show/slide-show.component';
import { CloseButtonComponent } from 'src/app/shared/components/buttons/close-button/close-button.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
  },
];

@NgModule({
  declarations: [
    ExperienceComponent,
    TimeLineComponent,
    ExperienceDetailModalComponent,
    ModalComponent,
    SlideShowComponent,
    CloseButtonComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ExperienceModule { }
