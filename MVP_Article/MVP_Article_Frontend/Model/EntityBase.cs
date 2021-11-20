using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Model
{
    public abstract class EntityBase
    {
        [Key]public int Id { get; set; }
        public bool Deleted { get; set; }
    }
}
