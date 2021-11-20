import { Artikel } from "./artikel";
import { EntityBase } from "./EntityBase";

export class Warenkorbeintrag extends EntityBase{
  public Artikel: Artikel;
  public ArtikelId: number;
  public BestellungId: number;
  public Faktor: number;
}
