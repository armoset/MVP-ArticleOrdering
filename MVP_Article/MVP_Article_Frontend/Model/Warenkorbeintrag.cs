using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Model
{
    public class Warenkorbeintrag: EntityBase
    {
        public Artikel Artike { get; set; }
        public int ArtikelId { get; set; }
        public Bestellung Bestellung { get; set; }
        public int BestellungId { get; set; }
        public int Faktor { get; set; }
    }
}
