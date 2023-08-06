import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

const rotas: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({ 
  imports: [
    RouterModule.forChild(rotas),
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }