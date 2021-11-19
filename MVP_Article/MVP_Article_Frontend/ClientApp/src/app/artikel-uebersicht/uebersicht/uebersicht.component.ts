import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Artikel } from 'src/app/model/artikel';
import { Bestellung } from 'src/app/model/bestellung';
import { Empfaenger } from 'src/app/model/empfaenger';
import { Warenkorbeintrag } from 'src/app/model/warenkorbeintrag';
import { ArtikelService } from 'src/app/services/artikel.service';
import { BestellService } from 'src/app/services/bestell.service';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.css']
})
export class UebersichtComponent implements OnInit, AfterViewInit {

  public dataSource: MatTableDataSource<Artikel>;
  public Auswahl: Warenkorbeintrag[] = [];
  public Empfaenger: Empfaenger = new Empfaenger();
  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public artikelservice: ArtikelService, private bestellungService: BestellService) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public displayedColumns = ['Id', 'Name', 'Beschreibung'];
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.artikelservice.ArtikelChanged.subscribe(artikel =>{
      this.dataSource.data = artikel;
    });
    this.LoadArtikel();
  }
  async LoadArtikel(){
    this.artikelservice.Artikel = await this.artikelservice.GetArtikel();
  }
  public applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public Add(item : Artikel){
    if(this.Auswahl.find(x => x.Artikel == item))
      return;
    const eintrag = new Warenkorbeintrag();
    eintrag.Artikel = item;
    eintrag.ArtikelId = item.Id;
    eintrag.Faktor = 1;
    this.Auswahl.push(eintrag);
  }
  public RemoveItem(item: Warenkorbeintrag){
    console.log("remove");
    this.Auswahl.splice(this.Auswahl.indexOf(item), 1);
  }
  public Versenden(){
    const bestellung = new Bestellung();
    bestellung.Warenkorb = this.Auswahl;
    bestellung.Empfaenger = this.Empfaenger;
    this.bestellungService.Bestellen(bestellung);
  }
}
