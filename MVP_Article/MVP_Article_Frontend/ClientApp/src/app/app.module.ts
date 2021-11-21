import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MAT_NATIVE_DATE_FORMATS } from '@angular/material';
import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { FilterPipe } from './pipe/FilterPipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'artikel'
      },
      {
        path: 'artikel',
        loadChildren: () => import('./artikel-uebersicht/artikel-uebersicht.module').then(m => m.ArtikelUebersichtModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./bestell-uebersicht/bestell-uebersicht.module').then(m => m.BestellUebersichtModule)
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_NATIVE_DATE_FORMATS, useValue: {useUtc: true}},
    // { provide: HttpHandler, useClass: HttpInterceptingHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
