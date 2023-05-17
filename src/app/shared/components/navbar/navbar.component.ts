import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  isDarkTheme: string | null;
  isToggleThemeChecked = false;
  lastTabActive = 'home';

  constructor() {
    this.isDarkTheme = localStorage.getItem('darkTheme');
    this.handdleAppTheme()
  }

  ngOnInit() {
    document.getElementById(this.lastTabActive)?.classList.add('tab-active');
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
    console.log(this.isToggleThemeChecked)
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
      document.getElementById(this.lastTabActive)?.classList.remove('tab-active');
    this.lastTabActive = tabActive;
    document.getElementById(tabActive)?.classList.add('tab-active');
  }
}
