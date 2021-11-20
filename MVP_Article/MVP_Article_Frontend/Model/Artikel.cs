using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Model
{
    public class Artikel: EntityBase
    {
        public string Name { get; set; }
        public string Beschreibung { get; set; }
    }
}
