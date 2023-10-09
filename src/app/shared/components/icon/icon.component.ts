import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IconSize } from './types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})

export class IconComponent implements OnInit {
  @Input() icon!: string;
  @Input() label?: string;
  @Input() size?: IconSize | number = IconSize.sm;
  @Input() color!: string;
  @Input() isButton? = false
  iconPath!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const unsafeUrl = this.getIconPathFormatted();
    this.iconPath = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

  getIconPathFormatted() {
    return `assets/icons/${this.icon}.svg`;
  }

  onSvgObjectLoad(event: Event) {
    const svgObject = event.target as HTMLObjectElement;
    this.setIconAttributes(svgObject)
  }

  setIconAttributes(svgObject: HTMLElement | null) {
    if (svgObject) {
      this.setIconColor(svgObject);
      this.setIconSize(svgObject);
    } else {
      console.error("O ícone que está tentando acessar não é um SVG");
    }
  }

  setIconColor(svgElement: HTMLElement | null) {
    const svgDocument = (svgElement as HTMLObjectElement).contentDocument;
    if (svgDocument) {
      const pathElement = svgDocument.querySelector(`#${this.icon}`);
      if (pathElement) {
        pathElement.setAttribute('fill', this.color);
      } else {
        // console.error(`Elemento com ID '${this.icon}' não encontrado no SVG.`);
      }
    } else {
      console.error("Documento SVG não encontrado.");
    }
  }

  getIconSizeFormatted() {
    return `${this.size}px`
  }

  setIconSize(svgElement: HTMLElement) {
    svgElement.setAttribute("width", this.getIconSizeFormatted());
    svgElement.setAttribute("height", this.getIconSizeFormatted());
  }
}
