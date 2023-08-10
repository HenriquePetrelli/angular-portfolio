import { DarkModeService } from './../../../services/dark-mode.service';
import { Component } from '@angular/core';
import { ModuleName, ModuleTranslateAnimationDistance } from './types';
import { navbarEnUsTabs, navbarPtBrTabs, navbarTabs } from './data';
import { LanguageService } from '../../../services/language.service';
import { Language } from './components/language-select/types';
import { StorageKeys } from 'src/app/shared/services/local-storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  readonly ModuleName = ModuleName;
  readonly Language = Language;

  tabs = navbarTabs;
  navbarPtBrTabs = navbarPtBrTabs;
  navbarEnUsTabs = navbarEnUsTabs;

  constructor(
    private languageService: LanguageService,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit() {
    this.restoreLastTabAnimation();
  }

  get isDarkModeEnabled() {
    return this.darkModeService.isDarkModeEnabled;
  }

  get getTabs() {
    const tabs = this.tabs.map(tab => {
      tab.label =
        this.languageService.appLanguage === this.Language.Portuguese
          ? navbarPtBrTabs[tab.moduleName]
          : navbarEnUsTabs[tab.moduleName];
      return tab;
    });
    return tabs;
  }

  restoreLastTabAnimation() {
    const lastTab = localStorage.getItem(StorageKeys.lastTabActive);
    if (lastTab) {
      this.translateAnimation(lastTab);
    }
  }

  tabChangeAnimation(tabActive: string) {
    localStorage.setItem(StorageKeys.lastTabActive, tabActive);
    this.translateAnimation(tabActive);
  }

  translateAnimation(tabActive: string) {
    const activeBars = document.getElementsByClassName('active');
    if (activeBars.length > 0) {
      const activeBarElement = activeBars[0] as HTMLElement;
      activeBarElement.style.transform = `translateX(${ModuleTranslateAnimationDistance[tabActive]}rem)`;
    }
  }
}
