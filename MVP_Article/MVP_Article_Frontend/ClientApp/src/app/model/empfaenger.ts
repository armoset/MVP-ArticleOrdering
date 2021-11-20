import { EntityBase } from "./EntityBase";

export class Empfaenger extends EntityBase{
  public Name: string = "";
  public Vorname: string = "";
  public Strasse: string = "";
  public Hausnummer: string = "";
  public Postleitzahl: number = 0;
  public Ort: string ="";
}
