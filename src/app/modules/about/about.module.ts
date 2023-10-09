import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from 'src/app/shared/components/slider/card-slider/card-slider.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent, CardSliderComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AboutModule { }
