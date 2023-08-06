import { Injectable } from '@angular/core';
import { experiencePeriodLabels, experiences } from './data';
import { languageStringToEnum } from 'src/app/shared/helper/language';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Language } from 'src/app/shared/components/template/navbar/components/language-select/types';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
 readonly language = Language

  constructor(private languageService: LanguageService) {}

  getExperienceModuleTexts() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return experiences[languageStringToEnum(language)]
  }

  getExperiencePeriodLabel() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return experiencePeriodLabels[languageStringToEnum(language)]
  }
}
