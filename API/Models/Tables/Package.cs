using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Tables
{
    public class Package
    {

        [Key]
        public int PackageId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal Duration { get; set; }
    }
}
