import { NgModule } from "@angular/core";
import { LanguageSelectComponent } from "./language-select.component";
import { SharedModule } from "../../../../../shared.module";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [LanguageSelectComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  bootstrap: [LanguageSelectComponent]
})
export class NavbarModule { }
