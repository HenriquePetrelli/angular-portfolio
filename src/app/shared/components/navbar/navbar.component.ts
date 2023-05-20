import { Component } from '@angular/core';
import { ModuleName } from './types';
import { navbarTabs } from './data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  readonly ModuleName = ModuleName;

  private isDarkTheme: string | null;
  private lastTabActive = 'Home';

  tabs = navbarTabs;
  isToggleThemeChecked = false;

  constructor() {
    this.isDarkTheme = localStorage.getItem('darkTheme');
    this.handdleAppTheme();
  }

  ngAfterViewInit() {
    const path = location.pathname.toString().substring(1);
    this.lastTabActive = path;
    document.getElementById(`tab-${path}`)?.classList.add('tab-active');
  }

  handdleAppTheme() {
    switch (this.isDarkTheme) {
      case null:
        this.setLocalStorageDarkTheme(false);
        document.body.classList.add('light-theme');
        break;

      case 'true':
        this.isToggleThemeChecked = true;
        document.body.classList.add('dark-theme');
        break;

      case 'false':
        this.isToggleThemeChecked = false;
        document.body.classList.add('light-theme');
        break;
    }
  }

  toggleDarkTheme() {
    if (this.isToggleThemeChecked) {
      this.setLocalStorageDarkTheme(true);
      this.setDarkTheme();
    } else {
      this.setLocalStorageDarkTheme(false);
      this.setLightTheme();
    }
  }

  setLocalStorageDarkTheme(isDarkTheme: boolean) {
    localStorage.setItem('darkTheme', String(isDarkTheme));
  }

  setDarkTheme() {
    if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
    }
    document.body.classList.add('dark-theme');
  }

  setLightTheme() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
    }
    document.body.classList.add('light-theme');
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
}
