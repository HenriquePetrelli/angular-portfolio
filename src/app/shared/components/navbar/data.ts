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
    label: 'Experiências'
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
