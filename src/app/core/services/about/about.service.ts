import { Injectable } from '@angular/core';
import { bioIntroduction } from './data';
import { languageStringToEnum } from 'src/app/shared/helper/language';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Language } from 'src/app/shared/components/navbar/components/language-select/types';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
 readonly language = Language

  constructor(private languageService: LanguageService) { 
  }

  getBio() {
    const language = this.languageService.appLanguage || this.language.Portuguese;
    return bioIntroduction[languageStringToEnum(language)];
  }

  getProjects() {
    return [
      { name: "Projeto 1", description: "Descrição do Projeto 1" },
      { name: "Projeto 2", description: "Descrição do Projeto 2" },
      { name: "Projeto 3", description: "Descrição do Projeto 3" }
    ];
  }

  getSkills() {
    return ["JavaScript", "Angular", "React", "HTML/CSS"];
  }
}
