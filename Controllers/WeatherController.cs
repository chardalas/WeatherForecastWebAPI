using System.Web.Http;
using WeatherForecast.Client;
using WeatherForecast.Filters;

namespace WeatherForecast.Controllers
{
    [WeatherAccess]
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
        public IHttpActionResult GetMinutelyForecastAsync(string minutely)
        {
            var response = openWeatherClient.GetMinutelyForecastAsync(minutely);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }

        // GET: weather/?hourly=
        public IHttpActionResult GetHourlyForecast(string hourly)
        {
            var response = openWeatherClient.GetHourlyForecastAsync(hourly);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }

        // GET: weather/?daily=
        public IHttpActionResult GetDailyForecast(string daily)
        {
            var response = openWeatherClient.GetDailyForecastAsync(daily);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }
    }
}
