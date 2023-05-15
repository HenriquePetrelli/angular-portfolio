import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBio() {
    return "Olá, meu nome é [seu nome] e eu sou um desenvolvedor de software com [x] anos de experiência.";
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
