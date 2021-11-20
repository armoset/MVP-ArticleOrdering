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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //ToDo: Auslagern in separaten Dateien
            modelBuilder.Entity<Artikel>().HasData(new Artikel()
            {
                Id = 1,
                Name = "Tomatensuppe",
                Beschreibung = "Cremig mild"
            });
            modelBuilder.Entity<Artikel>().HasData(new Artikel()
            {
                Id = 2,
                Name = "Ingwer",
                Beschreibung = "Der Ingwer, auch Ingber und Imber, der Wurzelstock auch Immerwurzel und Ingwerwurzel, genannt, ist eine Pflanzenart aus der Gattung Ingwer innerhalb der Familie der Ingwergewächse."
            });

            modelBuilder.Entity<Artikel>().HasData(new Artikel()
            {
                Id = 3,
                Name = "Ingwer",
                Beschreibung = "Der Ingwer, auch Ingber und Imber, der Wurzelstock auch Immerwurzel und Ingwerwurzel, genannt, ist eine Pflanzenart aus der Gattung Ingwer innerhalb der Familie der Ingwergewächse."
            });
            modelBuilder.Entity<Artikel>().HasData(new Artikel()
            {
                Id = 4,
                Name = "Kakao",
                Beschreibung = "Als Kakaobohnen bezeichnet man die Samen des Kakaobaumes. Sie sind in großer Anzahl in der Frucht eingeschlossen, sind eiförmig, mehr oder weniger abgeflacht und im Allgemeinen violett oder rötlich."
            });
            modelBuilder.Entity<Artikel>().HasData(new Artikel()
            {
                Id = 5,
                Name = "Kaffee",
                Beschreibung = "Die Kaffeebohnen werden aus Steinfrüchten verschiedener Pflanzenarten aus der Familie der Rubiaceae gewonnen."
            });
            modelBuilder.Entity<Artikel>().HasData(new Artikel()
            {
                Id = 6,
                Name = "Kuchen",
                Beschreibung = "Der Kuchen gehört zu den feinen Backwaren. Es handelt sich um ein zumeist süßes Backwerk. Man unterscheidet vor allem nach der Art der Herstellung"
            });

            modelBuilder.Entity<Empfaenger>().HasData(new Empfaenger() { 
               Id = 1,
               Name = "Lustig",
               Vorname = "Peter",
               Hausnummer = "17a",
               Strasse = "Wohnwagen",
               Ort = "Sonsbeck",
               Postleitzahl = 47665
            });
            modelBuilder.Entity<Empfaenger>().HasData(new Empfaenger()
            {
                Id = 1,
                Name = "Löw",
                Vorname = "Jogi",
                Hausnummer = "1",
                Strasse = "Nationalplatz",
                Ort = "Berlin",
                Postleitzahl = 10115
            });

            
            modelBuilder.Entity<Bestellung>().HasData(new Bestellung() { 
               Id = 1,
               EmpfaengerId = 1,
            });
            modelBuilder.Entity<Bestellung>().HasData(new Bestellung()
            {
                Id = 2,
                EmpfaengerId = 2,
            });

            modelBuilder.Entity<Warenkorbeintrag>().HasData(new Warenkorbeintrag()
            {
                Id = 1,
                ArtikelId = 1,
                BestellungId = 1,
                Faktor = 5
            });
            modelBuilder.Entity<Warenkorbeintrag>().HasData(new Warenkorbeintrag()
            {
                Id = 2,
                ArtikelId = 2,
                BestellungId = 1,
                Faktor = 7
            });
            modelBuilder.Entity<Warenkorbeintrag>().HasData(new Warenkorbeintrag()
            {
                Id = 3,
                ArtikelId = 6,
                BestellungId = 1,
                Faktor = 4
            });
            modelBuilder.Entity<Warenkorbeintrag>().HasData(new Warenkorbeintrag()
            {
                Id = 4,
                ArtikelId = 2,
                BestellungId = 2,
                Faktor = 4
            });
            modelBuilder.Entity<Warenkorbeintrag>().HasData(new Warenkorbeintrag()
            {
                Id = 5,
                ArtikelId = 1,
                BestellungId = 2,
                Faktor = 7
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
