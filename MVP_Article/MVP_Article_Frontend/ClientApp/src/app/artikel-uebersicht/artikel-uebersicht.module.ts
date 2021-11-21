import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelUebersichtRoutingModule } from './artikel-uebersicht-routing.module';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { FilterPipe } from '../pipe/FilterPipe';
import { FormsModule } from '@angular/forms';
import { ArtikeldialogComponent } from './artikeldialog/artikeldialog.component';


@NgModule({
  declarations: [UebersichtComponent, FilterPipe, ArtikeldialogComponent],
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
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [FilterPipe]
})
export class ArtikelUebersichtModule { }
