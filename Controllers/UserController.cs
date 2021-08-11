using System.Linq;
using System.Threading;
using System.Web.Http;
using WeatherForecast.DAL;
using WeatherForecast.Filters;
using WeatherForecast.Models;

namespace WeatherForecast.Controllers
{
    public class UserController : ApiController
    {
        [WeatherAccess]
        [HttpPost]
        [Route("UserLogin")]
        public IHttpActionResult UserLogin()
        {
            string email = Thread.CurrentPrincipal.Identity.Name;

            using (var db = new WeatherContext())
            {
                var user = db.Users.Where(u => u.Email == email).Select(u => u).FirstOrDefault();

                if (user == null)
                {
                    return NotFound();
                }
            }

            return Ok();
        }

        [HttpPost]
        [Route("CreateUser")]
        public IHttpActionResult CreateUser([FromBody] User user)
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
