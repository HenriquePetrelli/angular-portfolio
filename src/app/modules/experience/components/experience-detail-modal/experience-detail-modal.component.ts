import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExperienceItem } from 'src/app/core/services/experience/types';

@Component({
  selector: 'app-experience-detail-modal',
  templateUrl: './experience-detail-modal.component.html',
  styleUrls: ['./experience-detail-modal.component.less']
})
export class ExperienceDetailModalComponent {
  @Input() isOpenDetail!: boolean;
  @Input() details!: ExperienceItem;
  @Output() closeDetail: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {}

  slideShowImages = [
    '../../../../../assets/img/experiences/warren_tech_academy.jpeg',
    '../../../../../assets/img/experiences/alexandre_costa_acessibilidade.jpeg'
  ];

  closeModal() {
    this.closeDetail.emit();
  }
}
