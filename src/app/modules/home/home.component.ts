import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';
import { HomeService } from 'src/app/core/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  age: number | undefined;

  constructor(
    private homeService: HomeService,
    private darkModeService: DarkModeService
  ) {
    this.getAge();
  }

  get greetText() {
    return this.homeService.getGreet();
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
}
