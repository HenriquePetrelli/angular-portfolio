import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../core/services/about/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  bio: string;
  projects: { name: string; description: string }[];
  skills: string[];
  age: number | undefined;

  constructor(private aboutService: AboutService) {
    this.bio = this.aboutService.getBio();
    this.projects = this.aboutService.getProjects();
    this.skills = this.aboutService.getSkills();
    this.getAge();
  }

  ngOnInit() {}

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
}
