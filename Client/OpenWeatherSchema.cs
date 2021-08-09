namespace WeatherForecast.Client
{
    public class OpenWeatherSchema
    {
        public double Lon { get; set; }
        public double Lat { get; set; }
        public string Timezone { get; set; }
        public string Timezone_Offset { get; set; }
        public Hourly Current { get; set; }
        public Hourly[] Minutely { get; set; }
        public Hourly[] Hourly { get; set; }
        public Daily[] Daily { get; set; }
        public Coord Coord { get; set; }
    }

    public class Hourly
    {
        public int DT { get; set; }
        public int Precipitation { get; set; }
        public double Temp { get; set; }
        public double Feels_Like { get; set; }
        public int Pressure { get; set; }
        public double Humidity { get; set; }
        public double Uvi { get; set; }
        public int Clouds { get; set; }
        public int Visibility { get; set; }
        public double Wind_Speed { get; set; }
        public Weather[] Weather { get; set; }
    }

    public class Daily
    {
        public int DT { get; set; }
        public int Pressure { get; set; }
        public double Humidity { get; set; }
        public double Uvi { get; set; }
        public int Clouds { get; set; }
        public Temp Temp { get; set; }
        public Temp Feels_Like { get; set; }
        public Weather[] Weather { get; set; }
    }

    public class Temp
    {
        public double Day { get; set; }
        public double Night { get; set; }
    }

    public class Weather
    {
        public int ID { get; set; }
        public string Main { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }
    }

    public class Coord
    {
        public double Lon { get; set; }
        public double Lat { get; set; }
    }
}