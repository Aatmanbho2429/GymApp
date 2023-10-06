using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DTO.Request
{
    public class PostUser
    {
        [Required]
        public string Name { get; set; }

        [DataType(DataType.EmailAddress)]
        [Required]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Required]
        public string Password { get; set; }

        public string? Role { get; set; } = "Member";

        [Required]
        public decimal PhoneNumber { get; set; }

        public string? PtId { get; set; }
        public string? PackageId { get; set; }

    }
}
