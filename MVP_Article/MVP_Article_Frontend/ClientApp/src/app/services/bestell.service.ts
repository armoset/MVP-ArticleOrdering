import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Bestellung } from '../model/bestellung';

@Injectable({
  providedIn: 'root'
})
export class BestellService {

  constructor(private http: HttpClient) { }

  public Bestellen(bestellung: Bestellung) : Promise<Bestellung> {
    return this.http.put<Bestellung>(`${environment.ApiUrl}/ComplexBestellung`, bestellung).toPromise();
  }

  public async LadeBestellungen() : Promise<Bestellung[]> {
    return this.http.get<Bestellung[]>(`${environment.ApiUrl}/ComplexBestellung`).toPromise();
  }
  public async LadeBestellung(id : number) : Promise<Bestellung> {
    return this.http.get<Bestellung>(`${environment.ApiUrl}/ComplexBestellung/${id}`).toPromise();
  }

}
