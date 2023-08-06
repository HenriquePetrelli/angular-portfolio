import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Language } from 'src/app/shared/components/template/navbar/components/language-select/types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact/contact.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.less']
})
export class EmailFormComponent {
  Language = Language;
  templateCode = '';
  recruiterForm!: FormGroup;
  normalForm!: FormGroup;
  isToggleRecruiter = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.recruiterForm = this.formBuilder.group({
      name: ['', Validators.required],
      celNumber: ['', Validators.required],
      email: ['', [(Validators.required, Validators.email)]],
      company: ['', Validators.required],
      companyWebsite: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.normalForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [(Validators.required, Validators.email)]],
      ocupation: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get emailFormTexts() {
    return this.contactService.getEmailFormTexts();
  }

  handleClick(): void {
    console.log('O botão primário foi clicado!');
  }

  onSubmit(): void {
    if (this.recruiterForm.invalid) {
      return;
    }

    // Aqui você pode implementar a lógica para enviar o e-mail
    console.log(this.recruiterForm.value);
  }

  sendEmail() {
    const emailParams = {
      fromName: this.recruiterForm.value.name,
      celNumber: this.recruiterForm.value.celNumber,
      fromEmail: this.recruiterForm.value.email,
      fromCompany: this.recruiterForm.value.company,
      companyWebsite: this.recruiterForm.value.companyWebsite,
      message: this.recruiterForm.value.message,
      toName: 'Henrique Petrelli'
    };

    emailjs
      .send(
        'service_nyij07m',
        this.templateCode,
        emailParams,
        't60C0vIypjaZcXprh'
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('E-mail enviado com sucesso!', response);
          // Faça alguma ação adicional após o envio do e-mail, se necessário
        },
        error => {
          console.log('Erro ao enviar o e-mail:', error);
          // Trate o erro adequadamente, exibindo uma mensagem de erro para o usuário, por exemplo
        }
      );
  }

  toggleEmailForm(value: boolean) {
    this.isToggleRecruiter = value;
    this.isToggleRecruiter
      ? document
          .getElementById('flip-card')
          ?.classList.add('email-form__flip-card__content--rotate')
      : document
          .getElementById('flip-card')
          ?.classList.remove('email-form__flip-card__content--rotate');
  }
}
