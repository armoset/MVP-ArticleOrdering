import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UebersichtComponent } from './uebersicht/uebersicht.component';


const routes: Routes = [
  {
    path : '',
    component: UebersichtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtikelUebersichtRoutingModule { }
