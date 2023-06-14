import { Injectable } from '@angular/core';
import { greet } from './data';
import { languageStringToEnum } from 'src/app/shared/helper/language';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Language } from 'src/app/shared/components/template/navbar/components/language-select/types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 readonly language = Language

  constructor(private languageService: LanguageService) {}

  getGreet() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return greet[languageStringToEnum(language)];
  }
}
