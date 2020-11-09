async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96167910369f1228a67e094ac8e334b6
  `, {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData);
}

export default getWeather;