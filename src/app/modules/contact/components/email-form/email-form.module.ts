import { NgModule } from '@angular/core';
import { EmailFormComponent } from './email-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [EmailFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule] 
})
export class EmailFormModule { }