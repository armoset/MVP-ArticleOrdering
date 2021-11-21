import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Artikel } from 'src/app/model/artikel';
import { Bestellung } from 'src/app/model/bestellung';
import { Empfaenger } from 'src/app/model/empfaenger';
import { Warenkorbeintrag } from 'src/app/model/warenkorbeintrag';
import { ArtikelService } from 'src/app/services/artikel.service';
import { BestellService } from 'src/app/services/bestell.service';
import { ArtikeldialogComponent } from '../artikeldialog/artikeldialog.component';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.css']
})
export class UebersichtComponent implements OnInit, AfterViewInit {

  public dataSource: MatTableDataSource<Artikel>;

  public get Auswahl(): Warenkorbeintrag[]{
    return this.Bestellung.Warenkorb;
  };
  public get Empfaenger(): Empfaenger {
    return this.Bestellung.Empfaenger;
  }

  public Bestellung: Bestellung = new Bestellung();
  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public artikelservice: ArtikelService, private bestellungService: BestellService, private route: ActivatedRoute, private dialog: MatDialog) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public displayedColumns = ['Id', 'Name',  'Add', 'Edit', 'Delete'];
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    const id = this.route.snapshot.params['id'];
      if(id) this.bestellungService.LadeBestellung(id).then(res => {
        this.Bestellung = res;
        console.log(this.Bestellung);
      });
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

  public async CreateNew(){
    this.Edit(new Artikel());
  }

  public async Edit(artikel : Artikel){
    const copy: Artikel= new Artikel();
    Object.assign(copy, artikel);

    const dialogRef = this.dialog.open(ArtikeldialogComponent, {restoreFocus: false, data: copy, width:"350px"});
    dialogRef.afterClosed().subscribe(async data => {
      if(!data) return;
      await this.artikelservice.SaveArtikel(data);
      this.LoadArtikel();
    });

  }
  public async Delete(artikel: Artikel){
    await this.artikelservice.DeleteArtikel(artikel);
    this.LoadArtikel();
  }

  public RemoveItem(item: Warenkorbeintrag){
    if(!item.Id || item.Id == 0)
      this.Auswahl.splice(this.Auswahl.indexOf(item), 1);
    else
    item.Deleted = true;
  }
  public async Versenden(){
    this.Bestellung = await this.bestellungService.Bestellen(this.Bestellung);
  }
}
