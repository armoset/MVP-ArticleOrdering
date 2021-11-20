using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MVP_Article_Frontend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Utilities
{
    [Route("api/[Controller]")]
    public class ArticleControllerBase<T, C> where T: EntityBase where C : DbContext
    {
        private C context;
        public ArticleControllerBase(C _context)
        {
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<T> Get()
        {
            return context.Set<T>().Where(x => !x.Deleted);
        }
        [HttpGet("{id}")]
        public T Get(int id)
        {
            return context.Find<T>(id);
        }
        [HttpPut]
        public T Put(T item)
        {
            context.Add(item);
            context.SaveChanges();
            return item;
        }
        [HttpDelete]
        public T Delete(T item)
        {
            item.Deleted = true;
            return Put(item);
        }

    }
}
