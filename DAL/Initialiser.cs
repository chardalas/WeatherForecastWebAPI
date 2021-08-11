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
                new User{FirstName ="Carlhard", LastName="Michel",  Email = "bonavial@weatherforecast.org",  Password = new byte[] { 0x01,0x02,0x03,0x04 }},
                new User{FirstName ="Dane",     LastName="Cejil",   Email = "carlhardm@weatherforecast.org", Password = new byte[] { 0x61,0x62,0x63,0x64 }},
                new User{FirstName ="Jole",     LastName="Gallea",  Email = "galleaj@weatherforecast.org",   Password = new byte[] { 0x04,0x03,0x02,0x01 }},
                new User{FirstName ="Lois",     LastName="Jacker",  Email = "jackerl@weatherforecast.org",   Password = new byte[] { 0x02,0x03,0x04,0x01 }},
                new User{FirstName ="Paul",     LastName="Mantra",  Email = "mantrap@weatherforecast.org",   Password = new byte[] { 0x03,0x04,0x02,0x01 }},
                new User{FirstName ="Christi",  LastName="Mayher",  Email = "mayherc@weatherforecast.org",   Password = new byte[] { 0x049,0x7A,0x6A,0x5E }},
                new User{FirstName ="Roben",    LastName="Rabap",   Email = "rabapr@weatherforecast.org",    Password = new byte[] { 0x01,0x02,0x03,0x04 }}
            };

            users.ForEach(s => context.Users.Add(s));
            context.SaveChanges();
        }
    }
}