using System.Web.Http;
using WeatherForecast.Client;

namespace WeatherForecast.Controllers
{
    public class WeatherController : ApiController
    {
        private IOpenWeatherClient openWeatherClient;

        public WeatherController()
        {
            openWeatherClient = new OpenWeatherClient();
        }

        // GET: weather/?current=
        public IHttpActionResult GetCurrent(string current)
        {
            var response = openWeatherClient.GetCurrentWeatherAsync(current);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }

        // GET: weather/?minutely=
        public OpenWeatherSchema GetMinutelyForecastAsync(string minutely)
        {
            var t = openWeatherClient.GetMinutelyForecastAsync(minutely);

            return t;
        }

        // GET: weather/?hourly=
        public OpenWeatherSchema GetHourlyForecast(string hourly)
        {
            var t = openWeatherClient.GetHourlyForecastAsync(hourly);

            return t;
        }

        // GET: weather/?daily=
        public OpenWeatherSchema GetDailyForecast(string daily)
        {
            var t = openWeatherClient.GetDailyForecastAsync(daily);

            return t;
        }

        // POST: api/Default
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Default/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Default/5
        public void Delete(int id)
        {
        }
    }
}
