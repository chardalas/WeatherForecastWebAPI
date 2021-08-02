using System.Threading.Tasks;
using WeatherForecast.Client;

namespace WeatherForecast.Controllers
{
	public interface IOpenWeatherClient
	{
		Task<OpenWeatherSchema> GetWeatherByCityAsync(string city);
		//Task<OpenWeatherSchema> GetWeatherByHourAsync(string city);
	}
}
