import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatSidenavModule, MatToolbarModule, MAT_NATIVE_DATE_FORMATS } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./artikel-uebersicht/artikel-uebersicht.module').then(m => m.ArtikelUebersichtModule)
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_NATIVE_DATE_FORMATS, useValue: {useUtc: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
