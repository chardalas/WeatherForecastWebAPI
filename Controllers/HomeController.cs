using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WeatherForecast.Controllers
{
    public class HomeController : ApiController
    {
        public IHttpActionResult GetUsers()
        {
            IList<User> users = null;

            using (var db = new OpenWeatherDbContext())
            {
                users = db.Users.ToList();
            }

            if (users.Count == 0)
            {
                return NotFound();
            }

            return Ok(users);
        }

        public IHttpActionResult GetUserById(int id)
        {
            User student = null;

            using (var db = new OpenWeatherDbContext())
            {
                student = db.Users.Where(u => u.ID == id).Select(u => u).FirstOrDefault();
            }

            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        public IHttpActionResult PostNewUser([FromBody]User user)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (var db = new OpenWeatherDbContext())
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

            return Ok();
        }
    }
}
