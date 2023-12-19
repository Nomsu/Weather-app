function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = `It is ${temperature} degrees in ${city}`;
}
let city = "Sydney";
let apiKey = "f0bto4513ca25f47831aaeb6b198ab00";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
