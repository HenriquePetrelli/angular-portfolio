import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-hover',
  templateUrl: './gallery-hover.component.html',
  styleUrls: ['./gallery-hover.component.less']
})
export class GalleryHoverComponent {
  @Input() imageList!: Array<String>;
}
