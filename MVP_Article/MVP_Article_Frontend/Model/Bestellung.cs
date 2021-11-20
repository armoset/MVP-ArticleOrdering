using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Model
{
    public class Bestellung : EntityBase
    {
        public List<Warenkorbeintrag> Warenkorb { get; set; }
        public Empfaenger Empfaenger{ get; set; }
        public int EmpfaengerId { get; set; }
    }
}
