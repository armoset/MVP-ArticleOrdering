import { EventEmitter, Injectable } from '@angular/core';
import { Artikel } from '../model/artikel';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

  constructor() { }

  private artikel: Artikel[] = [];
  public get Artikel() : Artikel[]{
    return this.artikel;
  }
  public set Artikel(value: Artikel[]){
    this.artikel = value;
    this.ArtikelChanged.emit(this.Artikel);
  }
  public ArtikelChanged = new EventEmitter<Artikel[]>()
  public GetArtikel() : Promise<Artikel[]>{
    //ToDo;
    return Promise.resolve(      [
     {
        Id: 1,
        Name: "Tomatensuppe",
        Beschreibung: "Tomatensuppe von Hersteller"
     }
    ]);
  }
}
