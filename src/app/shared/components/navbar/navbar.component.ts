import { Component } from '@angular/core';
import { ModuleName } from './types';
import {
  navbarEnUsTabs,
  navbarEsTabs,
  navbarPtBrTabs,
  navbarTabs
} from './data';
import { LanguageService } from '../../services/language.service';
import { Language } from './components/language-select/types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  readonly ModuleName = ModuleName;
  readonly language = Language;

  private lastTabActive = 'Home';

  navbarPtBrTabs = navbarPtBrTabs;
  navbarEnUsTabs = navbarEnUsTabs;
  navbarEsTabs = navbarEsTabs;
  tabs = navbarTabs;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    console.log(this.languageService.appLanguage);
    this.getTabLabel();
  }

  ngAfterViewInit() {
    const path = location.pathname.toString().substring(1);
    this.lastTabActive = path;
    document.getElementById(`tab-${path}`)?.classList.add('tab-active');
  }

  tabChange(tabActive: string) {
    if (this.lastTabActive !== tabActive)
      document
        .getElementById(`tab-${this.lastTabActive.toLowerCase()}`)
        ?.classList.remove('tab-active');
    this.lastTabActive = tabActive;
    document
      .getElementById(`tab-${tabActive.toLowerCase()}`)
      ?.classList.add('tab-active');
  }

  getTabLabel() {
    switch (this.languageService.appLanguage) {
      case this.language.Portuguese:
        this.tabs.map(tab => {
          tab.label = navbarPtBrTabs[tab.moduleName];
        });
        break;
      case this.language.English:
        this.tabs.map(tab => {
          tab.label = navbarEnUsTabs[tab.moduleName];
        });
        break;
      case this.language.Spanish:
        this.tabs.map(tab => {
          tab.label = navbarEsTabs[tab.moduleName];
        });
        break;
    }
  }
}
