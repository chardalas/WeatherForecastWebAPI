using WeatherForecast.Client;

namespace WeatherForecast.Controllers
{
    public interface IOpenWeatherClient
    {
        OpenWeatherSchema GetCurrentWeatherAsync(string city);
        OpenWeatherSchema GetMinutelyForecastAsync(string city);
        OpenWeatherSchema GetHourlyForecastAsync(string city);
        OpenWeatherSchema GetDailyForecastAsync(string city);
    }
}
