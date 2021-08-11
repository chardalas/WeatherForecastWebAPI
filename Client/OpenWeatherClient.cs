using System;
using System.Net.Http;
using WeatherForecast.Controllers;

namespace WeatherForecast.Client
{
    public class OpenWeatherClient : IOpenWeatherClient
    {
        private static readonly HttpClient client;
        private string appapi = "8e9a1d8d6057312c86a65f5803afbbfa";

        static OpenWeatherClient()
        {
            client = new HttpClient();
            client.BaseAddress = new Uri("https://api.openweathermap.org");
        }

        public OpenWeatherSchema GetCurrentByCityAsync(string city)
        {
            var response = client.GetAsync($"/data/2.5/weather?q={city}&appid={appapi}&unit=mertics");

            response.Wait();

            var coord = new OpenWeatherSchema();

            if (response.Result.IsSuccessStatusCode)
            {
                var readTask = response.Result.Content.ReadAsAsync<OpenWeatherSchema>();

                readTask.Wait();
                coord = readTask.Result;
            }

            return coord;
        }

        public OpenWeatherSchema GetCurrentWeatherAsync(string city)
        {
            var current = GetCurrentByCityAsync(city);

            if (current.Coord == null)
            {
                return null;
            }

            var response = client.GetAsync($"/data/2.5/onecall?lat={current.Coord.Lat}&lon={current.Coord.Lon}&exclude=minutely,hourly,daily,alerts&appid={appapi}&unit=mertics");

            response.Wait();

            var weatherSchema = new OpenWeatherSchema();

            if (response.Result.IsSuccessStatusCode)
            {
                var readTask = response.Result.Content.ReadAsAsync<OpenWeatherSchema>();

                readTask.Wait();
                weatherSchema = readTask.Result;
            }

            return weatherSchema;
        }

        public OpenWeatherSchema GetMinutelyForecastAsync(string city)
        {
            var current = GetCurrentByCityAsync(city);

            var response = client.GetAsync($"/data/2.5/onecall?lat={current.Coord.Lat}&lon={current.Coord.Lon}&exclude=current,hourly,daily,alerts&appid={appapi}&unit=mertics");

            response.Wait();

            var weatherSchema = new OpenWeatherSchema();

            if (response.Result.IsSuccessStatusCode)
            {
                var readTask = response.Result.Content.ReadAsAsync<OpenWeatherSchema>();

                weatherSchema = readTask.Result;
            }

            return weatherSchema;
        }

        public OpenWeatherSchema GetHourlyForecastAsync(string city)
        {
            var current = GetCurrentByCityAsync(city);

            var response = client.GetAsync($"/data/2.5/onecall?lat={current.Coord.Lat}&lon={current.Coord.Lon}&exclude=current,minutely,daily,alerts&appid={appapi}&unit=mertics");

            response.Wait();

            var weatherSchema = new OpenWeatherSchema();

            if (response.Result.IsSuccessStatusCode)
            {
                var readTask = response.Result.Content.ReadAsAsync<OpenWeatherSchema>();

                readTask.Wait();
                weatherSchema = readTask.Result;
            }

            return weatherSchema;
        }

        public OpenWeatherSchema GetDailyForecastAsync(string city)
        {
            var current = GetCurrentByCityAsync(city);

            var response = client.GetAsync($"/data/2.5/onecall?lat={current.Coord.Lat}&lon={current.Coord.Lon}&exclude=current,hourly,minutely,alerts&appid={appapi}&unit=mertics");

            response.Wait();

            var weatherSchema = new OpenWeatherSchema();

            if (response.Result.IsSuccessStatusCode)
            {
                var readTask = response.Result.Content.ReadAsAsync<OpenWeatherSchema>();

                readTask.Wait();
                weatherSchema = readTask.Result;
            }

            return weatherSchema;
        }
    }
}