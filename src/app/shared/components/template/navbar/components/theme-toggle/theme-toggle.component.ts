import { Component } from '@angular/core';
import { DarkModeService } from '../../../../../services/dark-mode.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.less']
})
export class ThemeToggleComponent {
  private isDarkTheme: string | null;
  isToggleThemeChecked = false;

  constructor(private darkModeService: DarkModeService) {
    this.isDarkTheme = localStorage.getItem('dark-theme');
    this.handdleAppTheme();
  }

  handdleAppTheme() {
    switch (this.isDarkTheme) {
      case null:
        this.setLocalStorageDarkTheme(false);
        document.body.classList.add('light-theme');
        this.darkModeService.isDarkModeEnabled = false;
        break;

      case 'true':
        this.isToggleThemeChecked = true;
        document.body.classList.add('dark-theme');
        this.darkModeService.isDarkModeEnabled = true;
        break;

      case 'false':
        this.isToggleThemeChecked = false;
        document.body.classList.add('light-theme');
        this.darkModeService.isDarkModeEnabled = false;
        break;
    }
  }

  toggleAppTheme() {
    if (this.isToggleThemeChecked) {
      this.setLocalStorageDarkTheme(true);
      this.setDarkTheme();
    } else {
      this.setLocalStorageDarkTheme(false);
      this.setLightTheme();
    }
  }

  setLocalStorageDarkTheme(isDarkTheme: boolean) {
    localStorage.setItem('dark-theme', String(isDarkTheme));
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
