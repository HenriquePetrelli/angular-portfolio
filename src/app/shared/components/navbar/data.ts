import { ModuleName } from './types';

export const navbarTabs = [
  {
    moduleName: ModuleName.Home,
    id: 'tab-home',
    route: 'home',
    label: 'Home'
  },
  {
    moduleName: ModuleName.About,
    id: 'tab-about',
    route: 'about',
    label: 'Sobre'
  },
  {
    moduleName: ModuleName.Experience,
    id: 'tab-experience',
    route: 'experience',
    label: 'Experiência'
  },
  {
    moduleName: ModuleName.Skills,
    id: 'tab-skills',
    route: 'skills',
    label: 'Habilidades'
  },
  {
    moduleName: ModuleName.Projects,
    id: 'tab-projects',
    route: 'projects',
    label: 'Projetos'
  },
  {
    moduleName: ModuleName.Education,
    id: 'tab-education',
    route: 'education',
    label: 'Educação'
  },
  {
    moduleName: ModuleName.Contact,
    id: 'tab-contact',
    route: 'contact',
    label: 'Contato'
  }
];

export const navbarPtBrTabs: { [key: string]: string } = {
  home: 'Home',
  about: 'Sobre',
  experience: 'Experiência',
  skills: 'Habilidades',
  projects: 'Projetos',
  education: 'Educação',
  contact: 'Contato'
};

export const navbarEnUsTabs: { [key: string]: string } = {
  home: 'Home',
  about: 'About',
  experience: 'Experience',
  skills: 'Skills',
  projects: 'Projects',
  education: 'Education',
  contact: 'Contact'
};

export const navbarEsTabs: { [key: string]: string } = {
  home: 'Home',
  about: 'Acerca',
  experience: 'Experiencia',
  skills: 'Habilidades',
  projects: 'Proyectos',
  education: 'Educación',
  contact: 'Contacto'
};
