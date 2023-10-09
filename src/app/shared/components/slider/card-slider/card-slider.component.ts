import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { AboutItem } from 'src/app/core/services/about/types';
import { IconSize } from '../../icon/types';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.less']
})
export class CardSliderComponent implements OnInit  {
  @Input() cardsAbout!: AboutItem[];
  @Input() cardButtonLabel!: string;

  readonly IconSize = IconSize;

  currentIndex: number = 0;
  visibleIndices: number[] = [4, 0, 1];
  middleIndex: number = 0;
  size!: number;
  tamanhoSubject = new BehaviorSubject<any>(100);

  @ViewChild('carouselFrame') carouselFrame?: ElementRef;
  private startX: number | undefined = undefined;

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.handleDragEnd(event.clientX);
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.handleDragEnd(event.changedTouches[0].clientX);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.handleDrag(event.clientX);
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    this.handleDrag(event.touches[0].clientX);
  }

  constructor() {
  }
  ngOnInit() {
    // Inscreva-se no BehaviorSubject e atualize o tamanho com base no valor atual
    this.tamanhoSubject.subscribe((tamanho) => {
      // Faça algo com o tamanho, como atualizar o tamanho do ícone
    });
  }

  mudarTamanho(isMiddle: boolean) {
    console.log(isMiddle)
    // Atualize o valor do BehaviorSubject com base na condição
    this.tamanhoSubject.next(isMiddle ? 250 : 100);
  }

  handleDragStart(event: MouseEvent | TouchEvent) {
    if (event instanceof MouseEvent) {
      this.startX = event.clientX;
    } else if (event instanceof TouchEvent) {
      this.startX = event.touches[0].clientX;
    }
  }

  handleDrag(clientX: number) {
    if (this.startX !== undefined) {
      const deltaX = clientX - this.startX;
      if (deltaX > 50) {
        this.prevSlide();
        this.startX = undefined;
      } else if (deltaX < -50) {
        this.nextSlide();
        this.startX = undefined;
      }
    }
  }

  handleDragEnd(clientX: number) {
    this.startX = undefined;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.cardsAbout.length) % this.cardsAbout.length;
    this.updateVisibleIndices();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cardsAbout.length;
    this.updateVisibleIndices();
  }

  changePagination(index: number) {
    this.currentIndex = index;
    this.updateVisibleIndices();
  }

  updateVisibleIndices() {
    this.middleIndex = this.currentIndex;
    const prevIndex = (this.middleIndex - 1 + this.cardsAbout.length) % this.cardsAbout.length;
    const nextIndex = (this.middleIndex + 1) % this.cardsAbout.length;
    this.visibleIndices = [prevIndex, this.middleIndex, nextIndex];
    // this.imageSize()
    // this.updateImageSize()
  }

  // updateImageSize() {
  //   this.cardsAbout.forEach((card, index) => {
  //     card.size = index === this.middleIndex ? 315 : 235;
  //     console.log(card.title + " " + card.size)
  //   });
  //   // console.log(this.cardsAbout)
  // }

  // get getSize() {
  //   return this.size;
  // }

  // imageSize(isMiddle: boolean) {
  //  return isMiddle ? 235 : 315;
  // }

  // setImageSize(index: number) {
  //   console.log( this.middleIndex === index)
  //   // console.log(this.middleIndex === this.visibleIndices[1])
  //   return this.middleIndex === index ? 180 : 235;
  // }

  openDetail(cardItem: AboutItem) {
    console.log(cardItem);
  }
}
