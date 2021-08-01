using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using WeatherForecast.Client;
using static WeatherForecast.Client.OpenWeatherClient;

namespace WeatherForecast.Controllers
{
    public class DefaultController : ApiController
    {
        // GET: api/Default
        public Task<OpenWeatherResponse> Get()
        {
            OpenWeatherClient wc = new OpenWeatherClient();

            var t =  wc.GetProductAsync("ss");

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
