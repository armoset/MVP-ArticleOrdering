using Microsoft.EntityFrameworkCore;
using MVP_Article_Frontend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.DbStructure
{
    public class ProcessContext : DbContext
    {
        public ProcessContext(DbContextOptions<ProcessContext> opt) : base(opt)
        {

        }
        public DbSet<Artikel> Artikel{ get; set; }
        public DbSet<Bestellung> Bestellung{ get; set; }
        public DbSet<Empfaenger> Empfaenger{ get; set; }
        public DbSet<Warenkorbeintrag> Warenkorb{ get; set; }
    }
}
