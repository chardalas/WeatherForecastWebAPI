using System.Collections.Generic;

namespace WeatherForecast.Client
{
	public class OpenWeatherResponse
	{
		public string Name { get; set; }
		public int Timezone { get; set; }
		public Wind Wind { get; set; }
		public Clouds Clouds { get; set; }
		public Sys Sys { get; set; }
		public IEnumerable<Weather> Weather { get; set; }
		public Main Main { get; set; }
	}

	public class Wind
	{
		public string Speed { get; set; }
	}

	public class Clouds
	{
		public int All { get; set; }
	}

	public class Sys
	{
		public string Country { get; set; }
		public int Sunrise { get; set; }
		public int Sunset { get; set; }
	}

	public class Weather
	{
		public int ID { get; set; }
		public string Main { get; set; }
		public string Description { get; set; }
		public string Icon { get; set; }
	}

	public class Main
	{
		public double Temp { get; set; }
		public double Feels_Like { get; set; }
		public double Temp_Min { get; set; }
		public double Temp_Max { get; set; }
		public int Pressure { get; set; }
		public double Humidity { get; set; }
	}
}