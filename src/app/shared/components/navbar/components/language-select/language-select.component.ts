import { Component } from '@angular/core';
import { LanguageService } from './../../../../services/language.service';
import { Language } from './types';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.less']
})
export class LanguageSelectComponent {
  currentLanguage = '';
  readonly language = Language;

  constructor(private languageService: LanguageService) {
    const localStorageLanguage = localStorage.getItem('app-language');
    if (localStorageLanguage) {
      this.currentLanguage = localStorageLanguage;
      localStorage.setItem('app-language', localStorageLanguage);
      this.setLanguageGlobally(localStorageLanguage);
    } else {
      this.currentLanguage = this.language.Portuguese;
      localStorage.setItem('app-language', this.language.Portuguese);
      this.setLanguageGlobally(this.language.Portuguese);
    }
  }

  onChangeLanguage() {
    switch (this.currentLanguage) {
      case this.language.Portuguese:
        this.setLocalStorageLanguage(this.language.English);
        this.setLanguageGlobally(this.language.English);
        this.currentLanguage = this.language.English;
        break;

      case this.language.English:
        this.setLocalStorageLanguage(this.language.Spanish);
        this.setLanguageGlobally(this.language.Spanish);
        this.currentLanguage = this.language.Spanish;
        break;

      case this.language.Spanish:
        this.setLocalStorageLanguage(this.language.Portuguese);
        this.setLanguageGlobally(this.language.Portuguese);
        this.currentLanguage = this.language.Portuguese;
        break;
    }
    location.reload();
  }

  setLocalStorageLanguage(language: string) {
    localStorage.setItem('app-language', language);
  }

  setLanguageGlobally(language: string) {
    this.languageService.appLanguage = language;
  }
}
