using System.Threading.Tasks;
using System.Web.Http;
using WeatherForecast.Client;

namespace WeatherForecast.Controllers
{
	public class WeatherController : ApiController
	{
		public OpenWeatherClient owc;

		public WeatherController()
		{
			owc = new OpenWeatherClient(); // re-think of this one
		}

		// GET: api/Default
		public Task<OpenWeatherSchema> Get(string city)
		{
			var t =  owc.GetProductAsync(city);

			return t;
		}

		// GET: api/Default/5
		public string Get(int id)
		{
			return "value";
		}

		// POST: api/Default
		public void Post([FromBody]string value)
		{
		}

		// PUT: api/Default/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE: api/Default/5
		public void Delete(int id)
		{
		}
	}
}
