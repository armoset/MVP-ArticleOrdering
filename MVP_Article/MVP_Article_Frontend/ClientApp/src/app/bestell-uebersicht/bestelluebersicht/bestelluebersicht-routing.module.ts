import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestelluebersichtComponent } from './bestelluebersicht.component';


const routes: Routes = [
  {
    path : '',
    component: BestelluebersichtComponent
  },
  {
    path : '/{id}',
    component: BestelluebersichtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestellUebersichtRoutingModule { }
