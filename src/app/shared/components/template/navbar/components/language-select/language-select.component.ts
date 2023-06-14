import { AboutService } from 'src/app/core/services/about/about.service';
import { Component } from '@angular/core';
import { LanguageService } from '../../../../../services/language.service';
import { Language } from './types';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.less']
})
export class LanguageSelectComponent {
  readonly language = Language;
  currentLanguage = '';

  constructor(
    private languageService: LanguageService,
    private aboutService: AboutService
  ) {
    const localStorageLanguage = localStorage.getItem('app-language');
    if (localStorageLanguage) {
      this.currentLanguage = localStorageLanguage;
      localStorage.setItem('app-language', localStorageLanguage);
      this.setLanguageGlobally(localStorageLanguage);
    } else {
      localStorage.setItem('app-language', this.language.Portuguese);
      this.setLanguageGlobally(this.language.Portuguese);
      this.currentLanguage = this.language.Portuguese;
    }
  }

  ngOnInit() {
    this.checkSelectedLanguage();
  }

  flipFlag() {
    const flag = document.querySelector('.flag');
    flag?.classList.toggle('flip');
    this.onChangeLanguage();
  }

  checkSelectedLanguage() {
    const flag = document.getElementById('flag');
    const selectedLanguage = localStorage.getItem('app-language');

    if (selectedLanguage === this.language.English) {
      this.currentLanguage = this.language.English;
      flag?.classList.add('flip');
    } else {
      flag?.classList.remove('flip');
      this.currentLanguage = this.language.Portuguese;
    }
  }

  onChangeLanguage() {
    switch (this.currentLanguage) {
      case this.language.Portuguese:
        this.setLocalStorageLanguage(this.language.English);
        this.setLanguageGlobally(this.language.English);
        this.currentLanguage = this.language.English;
        this.aboutService.getBio();
        break;
      case this.language.English:
        this.setLocalStorageLanguage(this.language.Portuguese);
        this.setLanguageGlobally(this.language.Portuguese);
        this.currentLanguage = this.language.Portuguese;
        this.aboutService.getBio();
        break;
      // case this.language.Spanish:
      //   this.setLocalStorageLanguage(this.language.Portuguese);
      //   this.setLanguageGlobally(this.language.Portuguese);
      //   this.currentLanguage = this.language.Portuguese;
      //   break;
    }
    // location.reload();
  }

  setLocalStorageLanguage(language: string) {
    localStorage.setItem('app-language', language);
  }

  setLanguageGlobally(language: string) {
    this.languageService.appLanguage = language;
  }
}
