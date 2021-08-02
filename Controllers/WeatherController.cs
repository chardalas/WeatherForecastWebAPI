using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
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

		// GET: api/Default
		[ResponseType(typeof(OpenWeatherSchema))]
		public async Task<IHttpActionResult> Get(string city)
		{
			var t = openWeatherClient.GetWeatherByCityAsync(city);

			return Ok(t);
		}

		public Task<OpenWeatherSchema> GetHourly(string lanf)
		{
			var t = openWeatherClient.GetWeatherByCityAsync(lanf);

			return t;
		}

		// GET: api/Default/5
		public string Get(int id)
		{
			return "value";
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
