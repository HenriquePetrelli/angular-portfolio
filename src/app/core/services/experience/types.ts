export interface ExperienceItem {
  title: string;
  location: string;
  model: string;
  description: string;
  subItems: ExperienceSubItem[];
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  current: string;
  logo: string;
  results: Array<string>;
  softSkills: Array<string>;
  hardSkills: Array<string>;
  images: Array<string>;
}

interface ExperienceSubItem {
  title: string;
  date: string;
}

export interface ExperiencePeriodLabels {
  yearLabel: string;
  yearsLabel: string;
  monthLabel: string;
  monthsLabel: string;
  conjunction: string;
}
