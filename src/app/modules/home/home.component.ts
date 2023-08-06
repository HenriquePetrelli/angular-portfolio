import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';
import { HomeService } from 'src/app/core/services/home/home.service';
import { Router } from '@angular/router';
import { ModuleName } from 'src/app/shared/components/template/navbar/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  age: number | undefined;
  readonly ModuleName = ModuleName;

  constructor(
    private homeService: HomeService,
    private darkModeService: DarkModeService,
    private router: Router
  ) {
    this.getAge();
  }

  get homeModuleTexts() {
    return this.homeService.getHomeModuleTexts();
  }

  getAge() {
    const dateOfBirth = new Date(1996, 8, 22);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

    // Check if the birthday has occurred this year
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const birthMonth = dateOfBirth.getMonth();
    const birthDay = dateOfBirth.getDate();

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age--;
    }

    this.age = age;
  }

  get isDarkModeEnable() {
    return this.darkModeService.isDarkModeEnabled;
  }

  openPage(moduleName: string) {
    this.router.navigate([moduleName]);
  }
}
