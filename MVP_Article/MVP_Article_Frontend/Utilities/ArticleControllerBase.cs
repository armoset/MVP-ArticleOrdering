using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public ArticleControllerBase(C _context)
        {
            this.context = _context;
        }

        [HttpGet]
        public virtual IEnumerable<T> Get()
        {
            return context.Set<T>().Where(x => !x.Deleted).ToList();
        }
        [HttpGet("{id}")]
        public virtual T Get(int id)
        {
            return context.Find<T>(id);
        }
        [HttpPut]
        public virtual T Put(T item)
        {
            context.Update(item);
            context.SaveChanges();
            return item;
        }
        [HttpDelete]
        public virtual T Delete(T item)
        {
            item.Deleted = true;
            return Put(item);
        }

    }
}
