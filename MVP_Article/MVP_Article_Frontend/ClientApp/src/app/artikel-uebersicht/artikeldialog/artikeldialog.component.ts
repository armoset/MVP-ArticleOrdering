import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Artikel } from 'src/app/model/artikel';

@Component({
  selector: 'app-artikeldialog',
  templateUrl: './artikeldialog.component.html',
  styleUrls: ['./artikeldialog.component.css']
})
export class ArtikeldialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Artikel, public dialogRef: MatDialogRef<ArtikeldialogComponent>) {}

  ngOnInit() {
    this.dialogRef.disableClose = true;
  }
  public Speichern(){
    this.dialogRef.close(this.data);
  }
}
