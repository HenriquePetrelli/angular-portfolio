import { GalleryHoverComponent } from './../../shared/components/image-exibition/gallery-hover/gallery-hover.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from "@angular/common";
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
})
export class ProjectsModule { }
