using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using WeatherForecast.Controllers;

namespace WeatherForecast.Client
{
	public class OpenWeatherClient : IOpenWeatherClient
	{
		private static readonly HttpClient client;

		static OpenWeatherClient()
		{
			client = new HttpClient();
			client.BaseAddress = new Uri("https://api.openweathermap.org");
		}

		public class Product
		{
			public string Id { get; set; }
			public string Name { get; set; }
			public decimal Price { get; set; }
			public string Category { get; set; }
		}


		//static HttpClient client = new HttpClient();

		static void ShowProduct(Product product)
		{
			Console.WriteLine($"Name: {product.Name}\tPrice: " +
				$"{product.Price}\tCategory: {product.Category}");
		}

		static async Task<Uri> CreateProductAsync(Product product)
		{
			HttpResponseMessage response = await client.PostAsJsonAsync(
				"api/products", product);
			response.EnsureSuccessStatusCode();

			// return URI of the created resource.
			return response.Headers.Location;
		}

		//public async Task<OpenWeatherSchema> GetWeatherByHourAsync(string city)
		//{

		//	var schema = GetWeatherByCityAsync(city);
		//	var lat = schema.Result.Coord.Lat;
		//	var lon = schema.Result.Coord.Lon;

		//	HttpResponseMessage response = await client.GetAsync($"/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,daily,alerts,daily&appid=8e9a1d8d6057312c86a65f5803afbbfa");

		//	var weatherSchema = new OpenWeatherSchema();

		//	if (response.IsSuccessStatusCode)
		//	{
		//		weatherSchema = await response.Content.ReadAsAsync<OpenWeatherSchema>();
		//	}

		//	return weatherSchema;
		//}

		//public async Task<OpenWeatherSchema> GetWeatherByDayAsync(string path)
		//{

		//}

		//public async Task<OpenWeatherSchema> GetWeatherCurrentAsync(string path)
		//{

		//}

		public async Task<OpenWeatherSchema> GetWeatherByCityAsync(string city)
		{
			HttpResponseMessage response = await client.GetAsync($"/data/2.5/weather?q={city}&appid=8e9a1d8d6057312c86a65f5803afbbfa&unit=mertics");

			//var tt = JsonSerializer.DeserializeAsync<OpenWeatherSchema>(await response);

			var weatherSchema = new OpenWeatherSchema();

			if (response.IsSuccessStatusCode)
			{
				weatherSchema = await response.Content.ReadAsAsync<OpenWeatherSchema>();
			}
			
			return weatherSchema;
		}

		static async Task<Product> UpdateProductAsync(Product product)
		{
			HttpResponseMessage response = await client.PutAsJsonAsync(
				$"api/products/{product.Id}", product);
			response.EnsureSuccessStatusCode();

			// Deserialize the updated product from the response body.
			product = await response.Content.ReadAsAsync<Product>();
			return product;
		}

		static async Task<HttpStatusCode> DeleteProductAsync(string id)
		{
			HttpResponseMessage response = await client.DeleteAsync(
				$"api/products/{id}");
			return response.StatusCode;
		}

		class Program
		{

			//static void Main()
			//{
			//	RunAsync().GetAwaiter().GetResult();
			//}

			//static async Task RunAsync()
			//{
			//	OpenWeatherClient ow = new OpenWeatherClient();

			//	// Update port # in the following line.
			//	client.BaseAddress = new Uri("http://localhost:64195/");
			//	client.DefaultRequestHeaders.Accept.Clear();
			//	client.DefaultRequestHeaders.Accept.Add(
			//		new MediaTypeWithQualityHeaderValue("application/json"));

			//	try
			//	{
			//		// Create a new product
			//		Product product = new Product
			//		{
			//			Name = "Gizmo",
			//			Price = 100,
			//			Category = "Widgets"
			//		};

			//		var url = await CreateProductAsync(product);
			//		Console.WriteLine($"Created at {url}");

			//		// Get the product
			//		product = await ow.GetProductAsync(url.PathAndQuery);
			//		ShowProduct(product);

			//		// Update the product
			//		Console.WriteLine("Updating price...");
			//		product.Price = 80;
			//		await UpdateProductAsync(product);

			//		// Get the updated product
			//		product = await ow.GetProductAsync(url.PathAndQuery);
			//		ShowProduct(product);

			//		// Delete the product
			//		var statusCode = await DeleteProductAsync(product.Id);
			//		Console.WriteLine($"Deleted (HTTP Status = {(int)statusCode})");

			//	}
			//	catch (Exception e)
			//	{
			//		Console.WriteLine(e.Message);
			//	}

			//	Console.ReadLine();
			//}
		}


	}
}