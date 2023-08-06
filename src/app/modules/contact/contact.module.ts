import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from 'src/app/shared/components/buttons/toggle-switch/toggle-switch.component';
import { SendEmailButtonComponent } from './components/send-email-button/send-email-button.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [
    ContactComponent,
    EmailFormComponent,
    ToggleSwitchComponent,
    SendEmailButtonComponent
  ],
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class ContactModule { }
