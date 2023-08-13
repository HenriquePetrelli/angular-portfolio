import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './components/buttons/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/buttons/button-secondary/button-secondary.component';
import { GalleryHoverComponent } from './components/image-exibition/gallery-hover/gallery-hover.component';
import { ButtonIconComponent } from './components/buttons/button-icon/button-icon.component';

@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    GalleryHoverComponent,
    ButtonIconComponent
  ],
  imports: [CommonModule],
  exports: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    GalleryHoverComponent,
    ButtonIconComponent
  ], 
})
export class SharedModule {}