const dom = () => {
  const cont = document.getElementById('cont');
  const buttonF = document.getElementById('changeF');
  const buttonC = document.getElementById('changeC');
  const temp = document.getElementById('temperature');
  const city = document.getElementById('city');
  const summary = document.getElementById('summary');
  const icon = document.getElementById('icon');
  const form = document.getElementById('form');
  const error = document.getElementById('error');

  const btn = document.getElementById('button');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const search = document.getElementById('search').value;

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=96167910369f1228a67e094ac8e334b6`;

    fetch(api, { mode: 'cors' })
      .then(response => response.json())
      .then(item => {
        error.style.display = 'none';
        cont.style.display = 'flex';
        temp.textContent = `${item.main.temp} C°`;
        summary.textContent = item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1);
        city.textContent = item.name;
        icon.src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

        buttonF.addEventListener('click', () => {
          temp.textContent = `${((parseFloat(item.main.temp) * 9/5) + 32).toFixed(2)} F°`;
          console.log((parseFloat(item.main.temp) * 9/5) + 32);
          buttonF.style.display = 'none';
          buttonC.style.display = 'block';
        });

        buttonC.addEventListener('click', () => {
          temp.textContent = `${item.main.temp} C°`;
          buttonF.style.display = 'block';
          buttonC.style.display = 'none';
        })
      })
      .catch(() => {
        cont.style.display = 'none';
        error.style.display = 'block';
      })
    form.reset();
  });
};

export default dom;

