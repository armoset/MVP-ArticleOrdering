using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Model
{
    public class Empfaenger : EntityBase
    {
        public string Name { get; set; }
        public string Vorname { get; set; }
        public string Strasse { get; set; }
        public string Hausnummer { get; set; }
        public int Postleitzahl { get; set; }
        public string Ort { get; set; }
    }
}
