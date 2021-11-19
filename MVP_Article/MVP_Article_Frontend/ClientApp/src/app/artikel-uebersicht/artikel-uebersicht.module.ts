import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelUebersichtRoutingModule } from './artikel-uebersicht-routing.module';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [UebersichtComponent],
  imports: [
    CommonModule,
    ArtikelUebersichtRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ArtikelUebersichtModule { }
