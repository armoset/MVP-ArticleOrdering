using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MVP_Article_Frontend.DbStructure;
using MVP_Article_Frontend.Model;
using MVP_Article_Frontend.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
            return context.Bestellung.Include(x => x.Empfaenger).Include(x => x.Warenkorb).ThenInclude(x => x.Artikel).Where(x => !x.Deleted);
        }
        public override Bestellung Get(int id)
        {
            logger.LogInformation($"Lade Bestellung {id} mit Empfaenger, Warenkorb und Artikel");

            return context.Bestellung.Include(x => x.Empfaenger).Include(x => x.Warenkorb).ThenInclude(x => x.Artikel).First(x => !x.Deleted && x.Id == id);
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
        [HttpGet(nameof(Report))]
        public ActionResult Report()
        {
            var bestellungen = Get();
            var result = "<html>\n";

            foreach (var bestellung in bestellungen)
            {
                result += $"<p> {bestellung.Empfaenger.Vorname} {bestellung.Empfaenger.Name} {bestellung.Empfaenger.Strasse} {bestellung.Empfaenger.Hausnummer} {bestellung.Empfaenger.Ort} {bestellung.Empfaenger.Postleitzahl} </p>\n";
                result += "<table>\n";
                result += "<tr> <th> Artikel </th> <th> Faktor</th>\n";
                foreach (var art in bestellung.Warenkorb)
                {
                    result += $"<tr><td> {art.Artikel.Name} </td> <td> {art.Faktor} </td> </tr>\n";
                }
                result += "</table>\n";
            }
            return new ContentResult
            {
                ContentType = "text/html",
                StatusCode = (int)HttpStatusCode.OK,
                Content = result
            };
        }
    }
}
