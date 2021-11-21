import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelUebersichtRoutingModule } from './artikel-uebersicht-routing.module';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { FilterPipe } from '../pipe/FilterPipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UebersichtComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
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
