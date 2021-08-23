using System;
using System.Linq;
using System.Security.Cryptography;
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

                var t = db.Users.Where(u => u.Email == email).FirstOrDefault();

                var pass = Encoding.ASCII.GetBytes(password);
                //                return db.Users.Any(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase) && u.Password == pass);


                return db.Users.Any(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase));


                var tmpSource = Encoding.ASCII.GetBytes(password);
                var tmpNewHash = new MD5CryptoServiceProvider().ComputeHash(tmpSource);

                var user = db.Users.Where(x => x.Email == email).FirstOrDefault();

                bool bEqual = false;
                if (tmpNewHash.Length == user.Password.Length)
                {
                    int i = 0;
                    while ((i < tmpNewHash.Length) && (tmpNewHash[i] == user.Password[i]))
                    {
                        i += 1;
                    }
                    if (i == tmpNewHash.Length)
                    {
                        bEqual = true;
                    }
                }

                if (bEqual)
                    Console.WriteLine("The two hash values are the same");
                else
                    Console.WriteLine("The two hash values are not the same");
                Console.ReadLine();

                return db.Users.Any(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase) && u.Password == tmpNewHash);

            }
        }


    }
}