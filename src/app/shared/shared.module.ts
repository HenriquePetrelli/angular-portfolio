import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './components/buttons/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/buttons/button-secondary/button-secondary.component';
import { GalleryHoverComponent } from './components/image-exibition/gallery-hover/gallery-hover.component';
import { ButtonIconComponent } from './components/buttons/button-icon/button-icon.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    GalleryHoverComponent,
    IconComponent,
    ButtonIconComponent
  ],
  imports: [CommonModule],
  exports: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    GalleryHoverComponent,
    IconComponent,
    ButtonIconComponent
  ],
})
export class SharedModule { }