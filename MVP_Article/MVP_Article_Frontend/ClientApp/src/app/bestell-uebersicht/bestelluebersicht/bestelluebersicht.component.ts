import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Bestellung } from 'src/app/model/bestellung';
import { BestellService } from 'src/app/services/bestell.service';

@Component({
  selector: 'app-bestelluebersicht',
  templateUrl: './bestelluebersicht.component.html',
  styleUrls: ['./bestelluebersicht.component.css']
})
export class BestelluebersichtComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns = ['Id', 'Vorname', 'Name', 'Anzahl', 'Strasse', 'Hausnummer', 'Postleitzahl', 'Ort'];

  constructor(private bestellService: BestellService, public route: Router) { }
  public dataSource: MatTableDataSource<Bestellung>;

  async ngOnInit() {
    this.dataSource = new MatTableDataSource();
    let bestellungen = await this.bestellService.LadeBestellungen();
    this.dataSource.data = bestellungen;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public Edit(bestellung : Bestellung){
    this.route.navigate(['artikel', bestellung.Id])
  }
  public applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
