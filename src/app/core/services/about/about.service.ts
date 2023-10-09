import { Injectable } from '@angular/core';
import { about, buttonLabel } from './data';
import { languageStringToEnum } from 'src/app/shared/helper/language';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Language } from 'src/app/shared/components/template/navbar/components/language-select/types';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  readonly language = Language

  constructor(private languageService: LanguageService) {
  }

  getAboutModuleData() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return {
      about: about[languageStringToEnum(language)],
      buttonLabel: buttonLabel[languageStringToEnum(language)],
    };
  }

}
