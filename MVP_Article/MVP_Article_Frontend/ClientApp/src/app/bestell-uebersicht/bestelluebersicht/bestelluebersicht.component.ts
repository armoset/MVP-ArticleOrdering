import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Bestellung } from 'src/app/model/bestellung';
import { BestellService } from 'src/app/services/bestell.service';

@Component({
  selector: 'app-bestelluebersicht',
  templateUrl: './bestelluebersicht.component.html',
  styleUrls: ['./bestelluebersicht.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BestelluebersichtComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns = ['Id', 'Vorname', 'Name', 'Anzahl', 'Strasse', 'Hausnummer', 'Postleitzahl', 'Ort',  'Edit', 'Delete'];

  constructor(private bestellService: BestellService, public route: Router) { }
  public dataSource: MatTableDataSource<Bestellung>;
  public expandedElement: Bestellung;

  async ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.loadBestellungen();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public Edit(bestellung : Bestellung){
    this.route.navigate(['artikel', bestellung.Id]);
  }
  public async Delete(bestellung: Bestellung){
    await this.bestellService.DeleteBestellung(bestellung);
    this.loadBestellungen();
  }
  public applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  private async loadBestellungen(){
    let bestellungen = await this.bestellService.LadeBestellungen();
    this.dataSource.data = bestellungen;
  }
}
