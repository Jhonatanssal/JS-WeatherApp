import getWeather from "./api";

const { default: Weather } = require("./weather");

const dom = () => {

  getWeather('medellin');

  const temp = document.getElementById('temperature');
  const summ = document.getElementById('summary');
  const cit = document.getElementById('city');
  const ic = document.getElementById('icon');

  let weather = new Weather(cit, temp, summ, ic);

  temp.textContent = weather.temperature;
  summ.textContent = weather.summary;
  cit.textContent = weather.city;
  ic.textContent = weather.icon;
}

export default dom;