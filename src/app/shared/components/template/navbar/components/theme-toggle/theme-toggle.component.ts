import { Component } from '@angular/core';
import { DarkModeService } from '../../../../../services/dark-mode.service';
import { StorageKeys } from 'src/app/shared/services/local-storage';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.less']
})
export class ThemeToggleComponent {
  private isDarkTheme: string | null;
  isToggleThemeChecked = false;

  constructor(private darkModeService: DarkModeService) {
    this.isDarkTheme = localStorage.getItem(StorageKeys.appTheme);
    this.handdleAppTheme();
  }

  handdleAppTheme() {
    switch (this.isDarkTheme) {
      case null:
        this.setLocalStorageDarkTheme('light');
        document.body.classList.add('light-theme');
        this.darkModeService.isDarkModeEnabled = false;
        break;

      case 'dark':
        this.isToggleThemeChecked = true;
        document.body.classList.add('dark-theme');
        this.darkModeService.isDarkModeEnabled = true;
        break;

      case 'light':
        this.isToggleThemeChecked = false;
        document.body.classList.add('light-theme');
        this.darkModeService.isDarkModeEnabled = false;
        break;
    }
  }

  toggleAppTheme() {
    if (this.isToggleThemeChecked) {
      this.setLocalStorageDarkTheme('dark');
      this.setDarkTheme();
    } else {
      this.setLocalStorageDarkTheme('light');
      this.setLightTheme();
    }
  }

  setLocalStorageDarkTheme(appTheme: string) {
    localStorage.setItem(StorageKeys.appTheme, appTheme);
  }

  setDarkTheme() {
    if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
    }
    document.body.classList.add('dark-theme');
    this.darkModeService.isDarkModeEnabled = true;
  }

  setLightTheme() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
    }
    document.body.classList.add('light-theme');
    this.darkModeService.isDarkModeEnabled = false;
  }
}
