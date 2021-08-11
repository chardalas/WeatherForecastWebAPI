using System;
using System.Linq;
using System.Text;
using WeatherForecast.DAL;

namespace WeatherForecast.Models
{
    public class UserValidation
    {
        public static bool Login(string email, string password)
        {
            using (var db = new WeatherContext())
            {
                var pass = Encoding.ASCII.GetBytes(password);
                return db.Users.Any(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase) && u.Password == pass);
            }
        }
    }
}