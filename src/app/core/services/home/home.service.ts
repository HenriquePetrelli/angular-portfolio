import { Injectable } from '@angular/core';
import { aboutButtonLabel, contactButtonLabel, description, greet, introdution, ocupation } from './data';
import { languageStringToEnum } from 'src/app/shared/helper/language';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Language } from 'src/app/shared/components/template/navbar/components/language-select/types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 readonly language = Language

  constructor(private languageService: LanguageService) {}

  getHomeModuleTexts() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return { 
      greet: greet[languageStringToEnum(language)],
      introdution: introdution[languageStringToEnum(language)],
      ocupation: ocupation[languageStringToEnum(language)],
      description: description[languageStringToEnum(language)],
      aboutButtonLabel: aboutButtonLabel[languageStringToEnum(language)],
      contactButtonLabel: contactButtonLabel[languageStringToEnum(language)]};
  }
}
