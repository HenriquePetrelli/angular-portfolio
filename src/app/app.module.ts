import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { FooterComponent } from './shared/components/template/footer/footer.component';
import { NavbarComponent } from './shared/components/template/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageSelectComponent } from './shared/components/template/navbar/components/language-select/language-select.component';
import { ThemeToggleComponent } from './shared/components/template/navbar/components/theme-toggle/theme-toggle.component';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LanguageSelectComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }