import { Component } from '@angular/core';
import { getRangeDate } from './utils';
import { ExperienceService } from 'src/app/core/services/experience/experience.service';
import { ExperienceItem } from 'src/app/core/services/experience/types';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.less']
})
export class TimeLineComponent {
  isOpenDetailModal = false;
  itemDetail!: ExperienceItem;
  
  constructor(private experienceService: ExperienceService) {}

  get homeModuleTexts() {
    return this.experienceService.getExperienceModuleTexts();
  }

  get companyPeriodLabel() {
    return this.experienceService.getExperiencePeriodLabel();
  }

  companyPeriodFormatted(startDate: string, finalDate: string) {
    const { yearNumber, monthNumber } = getRangeDate(startDate, finalDate);
    const yearLabel = this.yearLabelFormatted(yearNumber);
    const monthLabel = this.monthLabelFormatted(monthNumber);

    let text = '';
    if (yearNumber === 0 && monthNumber > 0) {
      text = `${monthNumber} ${monthLabel}`;
    } else if (yearNumber > 0 && monthNumber === 0) {
      text = `${yearNumber} ${yearLabel}`;
    } else if (yearNumber > 0 && monthNumber > 0) {
      text = `${yearNumber} ${yearLabel} ${this.companyPeriodLabel.conjunction} ${monthNumber} ${monthLabel}`;
    }

    return text;
  }

  yearLabelFormatted(yearNumber: number) {
    switch (yearNumber) {
      case 0:
        return '';
      case 1:
        return this.companyPeriodLabel.yearLabel;
      default:
        return this.companyPeriodLabel.yearsLabel;
    }
  }

  monthLabelFormatted(monthNumber: number) {
    switch (monthNumber) {
      case 0:
        return '';
      case 1:
        return this.companyPeriodLabel.monthLabel;
      default:
        return this.companyPeriodLabel.monthsLabel;
    }
  }

  closeDetailModal() {
    this.isOpenDetailModal = false;
  }

  openDetail(item: ExperienceItem) {
    this.itemDetail = item;
    this.isOpenDetailModal = true;
  }
}
