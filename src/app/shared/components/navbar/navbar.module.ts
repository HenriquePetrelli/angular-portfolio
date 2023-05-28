import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [NavbarComponent, LanguageSelectComponent, ThemeToggleComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [NavbarComponent]
})
export class NavbarModule { }
