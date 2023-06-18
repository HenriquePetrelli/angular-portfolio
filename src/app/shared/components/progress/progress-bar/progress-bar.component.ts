import { DarkModeService } from './../../../services/dark-mode.service';
import { Component, Input } from '@angular/core';
import { ProgressBarColors } from './types';
import { getKeyframeFormat, setKeyframeInStyle } from './utils';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent {
  readonly progressBarcolors = ProgressBarColors;
  @Input() progress: number = 0;
  @Input() label: string = '';
  @Input() barColor?: ProgressBarColors;

  constructor(private darkModeService: DarkModeService) {}

  ngAfterViewInit() {
    const progressBar = this.getComponentHtmlElement('progress-bar');
    const progressBarLegend = this.getComponentHtmlElement('legend');
    progressBarLegend.style.animation = `percentLabel${this.label} 6s`;
    this.setProgressBarStyle(progressBar, progressBarLegend);
    this.setProgressAnimationClass(progressBar);
    this.setComponentKeyframes();
  }

  getComponentHtmlElement(id: string) {
    return document.getElementById(
      this.getProgressElementId(id)
    ) as HTMLElement;
  }

  setProgressBarWidth(element: HTMLElement) {
    element.style.width = `${this.progress}%`;
  }

  setProgressAnimationClass(element: HTMLElement) {
    const progressAnimationClass = this.getProgressElementId('progress-bar');
    element.classList.add(progressAnimationClass);
    const classElement = document.querySelector(
      '.' + progressAnimationClass
    ) as HTMLElement;

    classElement.style.animation = `progressAnimation${this.label} 6s`;
  }

  setProgressBarColor(element: HTMLElement) {
    if (this.barColor) {
      element.style.backgroundColor = `${this.barColor}`;
    } else {
      element.style.backgroundColor = this.progressBarcolors.purple;
    }
  }

  setProgressBarPercentColor(element: HTMLElement) {
    if (this.progress < 99) {
      element.style.color = 'var(--text-color)';
    }
  }

  setProgressBarStyle(
    progressBar: HTMLElement,
    progressBarLegend: HTMLElement
  ) {
    this.setProgressBarWidth(progressBar);
    this.setProgressBarColor(progressBar);
    this.setProgressBarPercentColor(progressBarLegend);
  }

  setComponentKeyframes() {
    setKeyframeInStyle(this.getProgressKeyframe());
    setKeyframeInStyle(this.getPercentLabelKeyframe());
    setKeyframeInStyle(this.getProgressAnimationLabelKeyframe());
  }

  getProgressElementId(id: string) {
    return id + '-' + this.label?.toLowerCase();
  }

  getProgressKeyframe() {
    return getKeyframeFormat(
      `progressAnimation${this.label}`,
      'width: 0',
      `width: ${this.progress}%`
    );
  }

  getPercentLabelKeyframe() {
    return `
      @keyframes percentLabel${this.label} {
        0% { color: transparent }
        99% { color: transparent }
      `;
  }

  getProgressAnimationLabelKeyframe() {
    const color = this.darkModeService.isDarkModeEnabled
      ? 'white'
      : 'var(--text-color)';
    const from = `color: ${color}
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: rgba(0, 0, 0, 0);`;
    const to = `color: white;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background: rgba(0, 0, 0, 0.25);`;
    return getKeyframeFormat('progressAnimationLabel', from, to);
  }
}
