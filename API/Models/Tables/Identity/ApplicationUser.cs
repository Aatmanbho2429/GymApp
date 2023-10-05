using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;


namespace Models.Tables.Identity
{
    public class ApplicationUser : IdentityUser<Guid>
    {
        public string? Name { get; set; }
        public string? Role { get; set; }
        public string? WorkoutCard { get; set; }
        public string? MeasurementCard { get; set; }

        public int? PackageId { get; set; }
        [ForeignKey("PackageId")]
        public Package? Package { get; set; }

        public decimal? AmountPaid { get; set; }
        public bool? IsPt { get; set; }
        public decimal? Duration { get; set; }
        public string? Clients { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
