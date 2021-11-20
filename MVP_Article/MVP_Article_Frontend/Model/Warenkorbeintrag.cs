using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Model
{
    public class Warenkorbeintrag: EntityBase
    {
        public Artikel Artikel { get; set; }
        public int ArtikelId { get; set; }
        [IgnoreDataMember] public Bestellung Bestellung { get; set; }
        public int BestellungId { get; set; }
        public int Faktor { get; set; }
    }
}
