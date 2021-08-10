using System.Collections.Generic;
using System.Data.Entity;
using WeatherForecast.Models;

namespace WeatherForecast.DAL
{
    // Alternative to DropCreateDatabaseAlways :: DropCreateDatabaseIfModelChanges    
    public class Initialiser : DropCreateDatabaseAlways<WeatherContext>
    {
        protected override void Seed(WeatherContext context)
        {
            var users = new List<User>
            {
                new User{FirstName ="Carlhard", LastName="Michel",  Email = "bonavial@centralbankmalta.org",  Password="1234"},
                new User{FirstName ="Dane",     LastName="Cejil",   Email = "carlhardm@centralbankmalta.org", Password = "abcd" },
                new User{FirstName ="Jole",     LastName="Gallea",  Email = "galleaj@centralbankmalta.org", Password="4321"},
                new User{FirstName ="Lois",     LastName="Jacker",  Email = "jackerl@centralbankmalta.org", Password="2341"},
                new User{FirstName ="Paul",     LastName="Mantra",  Email = "mantrap@centralbankmalta.org",  Password = "3412"},
                new User{FirstName ="Christi",  LastName="Mayher",  Email = "mayherc@centralbankmalta.org",  Password = "4321"},
                new User{FirstName ="Roben",    LastName="Rabap",   Email = "rabapr@centralbankmalta.org",   Password ="12345"}
            };

            users.ForEach(s => context.Users.Add(s));
            context.SaveChanges();
        }
    }
}