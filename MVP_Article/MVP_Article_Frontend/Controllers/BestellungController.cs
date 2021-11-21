using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MVP_Article_Frontend.DbStructure;
using MVP_Article_Frontend.Model;
using MVP_Article_Frontend.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Controllers
{
    //ToDo... ContextType ist etwas unschoen
    public partial class ComplexBestellungController : ArticleControllerBase<Bestellung, ProcessContext>
    {
        public ComplexBestellungController(ProcessContext _context, ILogger<ComplexBestellungController> logger) : base(_context, logger)
        {

        }
        public override IEnumerable<Bestellung> Get()
        {
            logger.LogInformation($"Lade alle Bestellungen mit Empfaenger, Warenkorb und Artikel");
            return context.Bestellung.Include(x => x.Empfaenger).Include(x => x.Warenkorb).ThenInclude(x => x.Artikel);
        }
        public override Bestellung Get(int id)
        {
            logger.LogInformation($"Lade Bestellung {id} mit Empfaenger, Warenkorb und Artikel");

            return context.Bestellung.Include(x => x.Empfaenger).Include(x => x.Warenkorb).ThenInclude(x => x.Artikel).First(x => x.Id == id);
        }
        public override Bestellung Put(Bestellung item)
        {
            logger.LogInformation($"Speicher Bestellung {item.Id} mit Empfaenger, Warenkorb und Artikel");

            context.Update(item.Empfaenger);
            context.UpdateRange(item.Warenkorb);
            context.Update(item); 
            context.SaveChanges();
            return item;
        }
        public override Bestellung Delete(Bestellung item)
        {
            logger.LogInformation($"Loesche Bestellung {item.Id} mit Empfaenger, Warenkorb und Artikel");

            item.Deleted = true;
            item.Empfaenger.Deleted = true;
            item.Warenkorb.ForEach(x => x.Deleted = true);
            return Put(item);
        }
    }
}
