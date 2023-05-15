import { NgModule } from '@angular/core';
import { ExperienceComponent } from './experience.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class ExperienceModule { }
