import { Empfaenger } from "./empfaenger";
import { EntityBase } from "./EntityBase";
import { Warenkorbeintrag } from "./warenkorbeintrag";

export class Bestellung extends EntityBase{
  public Warenkorb: Warenkorbeintrag[] = [];
  public EmpfaengerId : number;
  public Empfaenger: Empfaenger = new Empfaenger();
  public Lieferdatum: Date;
}
