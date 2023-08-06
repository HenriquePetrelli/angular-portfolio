import { Injectable } from '@angular/core';
import { languageStringToEnum } from 'src/app/shared/helper/language';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Language } from 'src/app/shared/components/template/navbar/components/language-select/types';
import { buttonLabel, feedbackMessage, formLabels, thanksMessage } from './data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 readonly language = Language

  constructor(private languageService: LanguageService) {}

  getContactModuleTexts() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return {
        thanksMessage: thanksMessage[languageStringToEnum(language)],
        feedbackMessage: feedbackMessage[languageStringToEnum(language)],
    }
  }

  getEmailFormTexts() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return formLabels[languageStringToEnum(language)]
  }

  getButtonText() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return buttonLabel[languageStringToEnum(language)]
  }
}
