using System.Collections.Generic;
using System.Data.Entity;
using WeatherForecast.Models;

namespace WeatherForecast.DAL
{
    // Alternative to DropCreateDatabaseAlways :: DropCreateDatabaseIfModelChanges    
    public class Initialiser : DropCreateDatabaseIfModelChanges<WeatherContext>
    {
        protected override void Seed(WeatherContext context)
        {
            var users = new List<User>
            {
                new User{FirstName ="Carlhard", LastName="Michel",  Email = "bonavial@weatherforecast.org",  Password="1234"},
                new User{FirstName ="Dane",     LastName="Cejil",   Email = "carlhardm@weatherforecast.org", Password = "abcd" },
                new User{FirstName ="Jole",     LastName="Gallea",  Email = "galleaj@weatherforecast.org", Password="4321"},
                new User{FirstName ="Lois",     LastName="Jacker",  Email = "jackerl@weatherforecast.org", Password="2341"},
                new User{FirstName ="Paul",     LastName="Mantra",  Email = "mantrap@weatherforecast.org",  Password = "3412"},
                new User{FirstName ="Christi",  LastName="Mayher",  Email = "mayherc@weatherforecast.org",  Password = "4321"},
                new User{FirstName ="Roben",    LastName="Rabap",   Email = "rabapr@weatherforecast.org",   Password ="12345"}
            };

            users.ForEach(s => context.Users.Add(s));
            context.SaveChanges();
        }
    }
}