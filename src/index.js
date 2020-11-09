import '../style/style.scss';

const { default: Weather } = require("./weather");

let firstW = new Weather(35, 'alsjf', ':D');

console.log(firstW);