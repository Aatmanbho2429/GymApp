﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DTO.Response
{
    public class UserResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }
    }
}
