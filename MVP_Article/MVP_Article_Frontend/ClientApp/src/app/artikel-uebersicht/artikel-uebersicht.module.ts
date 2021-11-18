import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelUebersichtRoutingModule } from './artikel-uebersicht-routing.module';
import { UebersichtComponent } from './uebersicht/uebersicht.component';


@NgModule({
  declarations: [UebersichtComponent],
  imports: [
    CommonModule,
    ArtikelUebersichtRoutingModule
  ]
})
export class ArtikelUebersichtModule { }
