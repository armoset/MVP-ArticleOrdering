import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Artikel } from '../model/artikel';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {


  constructor(private http: HttpClient) { }

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
    return this.http.get<Artikel[]>(`${environment.ApiUrl}/ArtikelController`).toPromise();
  }

  async SaveArtikel(artikel: Artikel): Promise<Artikel>{
    return this.http.put<Artikel>(`${environment.ApiUrl}/ArtikelController`, artikel).toPromise();
  }
  async DeleteArtikel(artikel: Artikel) :Promise<Artikel> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: artikel,
    };
    return this.http.delete<Artikel>(`${environment.ApiUrl}/ArtikelController`, options).toPromise();
  }
}
