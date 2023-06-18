import { AboutService } from 'src/app/core/services/about/about.service';
import { Component } from '@angular/core';
import { LanguageService } from '../../../../../services/language.service';
import { Language } from './types';
import { StorageKeys } from 'src/app/shared/services/local-storage';

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
    const localStorageLanguage = localStorage.getItem(StorageKeys.appLanguage);
    if (localStorageLanguage) {
      this.currentLanguage = localStorageLanguage;
      localStorage.setItem(StorageKeys.appLanguage, localStorageLanguage);
      this.setLanguageGlobally(localStorageLanguage);
    } else {
      localStorage.setItem(StorageKeys.appLanguage, this.language.Portuguese);
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
    const selectedLanguage = localStorage.getItem(StorageKeys.appLanguage);

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
    }
  }

  setLocalStorageLanguage(language: string) {
    localStorage.setItem(StorageKeys.appLanguage, language);
  }

  setLanguageGlobally(language: string) {
    this.languageService.appLanguage = language;
  }
}
