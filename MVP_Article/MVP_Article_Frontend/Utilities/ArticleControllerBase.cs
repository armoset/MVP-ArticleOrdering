using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MVP_Article_Frontend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Utilities
{
        [ApiController]
        [Route("api/[Controller]")]
    public partial class ArticleControllerBase<T, C> where T: EntityBase where C : DbContext
    {
        protected C context;
        protected ILogger logger;
        public ArticleControllerBase(C _context, ILogger<ArticleControllerBase<T, C>> logger)
        {
            this.logger = logger;
            this.context = _context;
        }

        [HttpGet]
        public virtual IEnumerable<T> Get()
        {
            logger.LogInformation($"Entity: {typeof(T).Name} Get");
            return context.Set<T>().Where(x => !x.Deleted).ToList();
        }
        [HttpGet("{id}")]
        public virtual T Get(int id)
        {
            logger.LogInformation($"Entity: {typeof(T).Name} Get Param: {id}");

            return context.Find<T>(id);
        }
        [HttpPut]
        public virtual T Put(T item)
        {
            logger.LogInformation($"Entity: {typeof(T).Name} Put EntityId: {item.Id}");

            context.Update(item);
            context.SaveChanges();
            return item;
        }
        [HttpDelete]
        public virtual T Delete(T item)
        {
            logger.LogInformation($"Entity: {typeof(T).Name} Delete EntityId: {item.Id}");

            item.Deleted = true;
            return Put(item);
        }

    }
}
