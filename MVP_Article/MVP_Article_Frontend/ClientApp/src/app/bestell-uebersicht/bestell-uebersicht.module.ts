import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestelluebersichtComponent } from './bestelluebersicht/bestelluebersicht.component';
import { BestellUebersichtRoutingModule } from './bestelluebersicht/bestelluebersicht-routing.module';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

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
    MatNativeDateModule
  ]
})
export class BestellUebersichtModule { }
