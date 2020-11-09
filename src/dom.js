const dom = () => {
  const cont1 = document.getElementById('weather');
  const cont2 = document.getElementById('temperature');
  const temp = document.getElementById('temperature');
  const cit = document.getElementById('city');
  const summ = document.getElementById('summary');
  const icon = document.getElementById('icon');
  const form = document.getElementById('form');

  const btn = document.getElementById('button');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const search = document.getElementById('search').value;

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=96167910369f1228a67e094ac8e334b6`;

    fetch(api, {mode: 'cors'})
      .then(response => {return response.json()})
      .then(item => {
        cont1.style.display = 'block';
        cont2.style.display = 'block';
        temp.textContent = item.main.temp + ' C°';
        summ.textContent = item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1);;
        cit.textContent = item.name;
        icon.src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
      })
    form.reset();
  })
}

export default dom;