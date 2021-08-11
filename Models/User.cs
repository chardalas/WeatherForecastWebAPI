using System;
using System.ComponentModel.DataAnnotations;

namespace WeatherForecast.Models
{
    public class User
    {
        public int ID { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public Byte[] Password { get; set; }
    }
}