using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WeatherForecast.DAL;
using WeatherForecast.Models;

namespace WeatherForecast.Controllers
{
    //[WeatherAccess]
    public class UserController : ApiController
    {
        public IHttpActionResult GetUsers()
        {
            IList<User> users = null;

            using (var db = new WeatherContext())
            {
                users = db.Users.ToList();
            }

            if (users.Count == 0)
            {
                return NotFound();
            }

            return Ok(users);
        }

        public IHttpActionResult GetUserById(string email, string password)
        {
            using (var db = new WeatherContext())
            {
                var user = db.Users.Where(u => u.Email == email && u.Password == password).Select(u => u).FirstOrDefault();

                if (user == null)
                {
                    return NotFound();
                }
            }

            return Ok();
        }

        public IHttpActionResult PostNewUser([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }

            using (var db = new WeatherContext())
            {
                db.Users.Add(new User()
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Password = user.Password,

                });

                db.SaveChanges();
            }

            return Ok(user);
        }
    }
}
