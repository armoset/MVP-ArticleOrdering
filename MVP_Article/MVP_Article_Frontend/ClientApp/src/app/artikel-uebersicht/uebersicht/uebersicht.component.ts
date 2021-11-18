import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Artikel } from 'src/app/model/artikel';
import { ArtikelService } from 'src/app/services/artikel.service';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.css']
})
export class UebersichtComponent implements OnInit, AfterViewInit {

  public dataSource: MatTableDataSource<Artikel>;

  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public artikelservice: ArtikelService) {

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

}
