import { Component, EventEmitter, Input, Output } from '@angular/core';
import { gsap } from 'gsap';
import { ContactService } from 'src/app/core/services/contact/contact.service';

@Component({
  selector: 'app-send-email-button',
  templateUrl: './send-email-button.component.html',
  styleUrls: ['./send-email-button.component.less']
})
export class SendEmailButtonComponent {
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    document.querySelectorAll('.button').forEach(button => {
      let getVar = (variable: string) =>
        getComputedStyle(button).getPropertyValue(variable);

      button.addEventListener('click', e => {
        e.preventDefault();

        if (!button.classList.contains('active')) {
          button.classList.add('active');

          gsap.to(button, {
            keyframes: [
              {
                '--left-wing-first-x': '50%',
                '--left-wing-first-y': '100%',
                '--right-wing-second-x': '50%',
                '--right-wing-second-y': '100%',
                duration: 0.2,
                onComplete() {
                  gsap.set(button, {
                    '--left-wing-first-y': '0%',
                    '--left-wing-second-x': '40%',
                    '--left-wing-second-y': '100%',
                    '--left-wing-third-x': '0%',
                    '--left-wing-third-y': '100%',
                    '--left-body-third-x': '40%',
                    '--right-wing-first-x': '50%',
                    '--right-wing-first-y': '0%',
                    '--right-wing-second-x': '60%',
                    '--right-wing-second-y': '100%',
                    '--right-wing-third-x': '100%',
                    '--right-wing-third-y': '100%',
                    '--right-body-third-x': '60%'
                  });
                }
              },
              {
                '--left-wing-third-x': '20%',
                '--left-wing-third-y': '90%',
                '--left-wing-second-y': '90%',
                '--left-body-third-y': '90%',
                '--right-wing-third-x': '80%',
                '--right-wing-third-y': '90%',
                '--right-body-third-y': '90%',
                '--right-wing-second-y': '90%',
                duration: 0.2
              },
              {
                '--rotate': '50deg',
                '--left-wing-third-y': '95%',
                '--left-wing-third-x': '27%',
                '--right-body-third-x': '45%',
                '--right-wing-second-x': '45%',
                '--right-wing-third-x': '60%',
                '--right-wing-third-y': '83%',
                duration: 0.25
              },
              {
                '--rotate': '60deg',
                '--plane-x': '-8px',
                '--plane-y': '40px',
                duration: 0.2
              },
              {
                '--rotate': '40deg',
                '--plane-x': '45px',
                '--plane-y': '-300px',
                '--plane-opacity': 0,
                duration: 0.375,
                onComplete() {
                  setTimeout(() => {
                    button.removeAttribute('style');
                    gsap.fromTo(
                      button,
                      {
                        opacity: 0,
                        y: -8
                      },
                      {
                        opacity: 1,
                        y: 0,
                        clearProps: true,
                        duration: 0.3,
                        onComplete() {
                          button.classList.remove('active');
                        }
                      }
                    );
                  }, 1800);
                }
              }
            ]
          });

          gsap.to(button, {
            keyframes: [
              {
                '--text-opacity': 0,
                '--border-radius': '0px',
                '--left-wing-background': getVar('--primary-dark'),
                '--right-wing-background': getVar('--primary-dark'),
                duration: 0.1
              },
              {
                '--left-wing-background': getVar('--primary'),
                '--right-wing-background': getVar('--primary'),
                duration: 0.15
              },
              {
                '--left-body-background': getVar('--primary-dark'),
                '--right-body-background': getVar('--primary-darkest'),
                duration: 0.25,
                delay: 0.1
              },
              {
                '--trails-stroke': '171px',
                duration: 0.22,
                delay: 0.22
              },
              {
                '--success-opacity': 1,
                '--success-x': '0px',
                duration: 0.2,
                delay: 0.15
              },
              {
                '--success-stroke': '0px',
                duration: 0.15
              }
            ]
          });
        }
      });
    });
  }

  get emailFormTexts() {
    return this.contactService.getButtonText();
  }

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
