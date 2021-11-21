import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestelluebersichtComponent } from './bestelluebersicht/bestelluebersicht.component';
import { BestellUebersichtRoutingModule } from './bestelluebersicht/bestelluebersicht-routing.module';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { ArtikelUebersichtModule } from '../artikel-uebersicht/artikel-uebersicht.module';

@NgModule({
  declarations: [BestelluebersichtComponent],
  imports: [
    CommonModule,
    BestellUebersichtRoutingModule,
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
    ArtikelUebersichtModule
  ]
})
export class BestellUebersichtModule { }
