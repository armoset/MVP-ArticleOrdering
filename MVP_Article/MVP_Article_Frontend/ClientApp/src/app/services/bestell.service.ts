import { Injectable } from '@angular/core';
import { Bestellung } from '../model/bestellung';

@Injectable({
  providedIn: 'root'
})
export class BestellService {

  constructor() { }

  public Bestellen(bestellung: Bestellung) : Promise<Bestellung> {
    //ToDo
    return Promise.resolve(bestellung);
  }

  public async LadeBestellungen() : Promise<Bestellung[]> {
    let res: Bestellung[] = [];
    return Promise.resolve(res);
  }

}
