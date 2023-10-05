using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Models.Tables.Identity;
using Models.Tables;


namespace Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Package> Packages { get; set; }
        public DbSet<WorkoutTemplate> WorkoutTemplates { get; set; }
    }
}
