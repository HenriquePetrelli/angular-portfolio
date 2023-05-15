import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'] 
})
export class HomeComponent implements OnInit {

  bio: string;
  projects: {name: string, description: string}[];
  skills: string[];

  constructor(private dataService: DataService) {
    this.bio = this.dataService.getBio();
    this.projects = this.dataService.getProjects();
    this.skills = this.dataService.getSkills();
  } 

  redirectToWhatsAppChatWithMessage() {
    window.open(
      "https://wa.me/" + "41999459041" + "?text=" + encodeURIComponent("Olá Henrique, tudo bem?"), "_blank");
  }

  ngOnInit() {
  }

}
