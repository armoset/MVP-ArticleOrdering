import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelUebersichtRoutingModule } from './artikel-uebersicht-routing.module';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [UebersichtComponent],
  imports: [
    CommonModule,
    ArtikelUebersichtRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ArtikelUebersichtModule { }
