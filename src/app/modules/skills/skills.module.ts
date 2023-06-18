import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarComponent } from 'src/app/shared/components/progress/progress-bar/progress-bar.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
  },
];

@NgModule({
  declarations: [SkillsComponent, ProgressBarComponent],
  imports: [RouterModule.forChild(routes)],
})
export class SkillsModule { }
