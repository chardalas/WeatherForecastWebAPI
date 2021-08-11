using System;
using System.Linq;
using WeatherForecast.DAL;

namespace WeatherForecast.Models
{
    public class UserValidation
    {
        public static bool Login(string email, string password)
        {
            using (var db = new WeatherContext())
            {
                return db.Users.Any(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase) && u.Password == password);
            }
        }
    }
}