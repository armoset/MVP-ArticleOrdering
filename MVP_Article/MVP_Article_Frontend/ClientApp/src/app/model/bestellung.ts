import { Empfaenger } from "./empfaenger";
import { Warenkorbeintrag } from "./warenkorbeintrag";

export class Bestellung{
  public Id : number;
  public Warenkorb: Warenkorbeintrag[];
  public EmpfaengerId : number;
  public Empfaenger: Empfaenger;
}
