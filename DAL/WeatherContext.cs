using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using WeatherForecast.Models;

namespace WeatherForecast.DAL
{
    public class WeatherContext : DbContext
    {
        public WeatherContext()
            : base("name=WeatherContext") // Connection string name in Web.config
        {
            Database.SetInitializer<WeatherContext>(null);
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}