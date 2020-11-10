const btnCLogic = (item) => {
  const buttonF = document.getElementById('changeF');
  const buttonC = document.getElementById('changeC');
  const temp = document.getElementById('temperature');
  temp.textContent = `${((parseFloat(item.main.temp) * (9 / 5)) + 32).toFixed(2)} F°`;
  buttonF.style.display = 'none';
  buttonC.style.display = 'block';
}

const btnFLogic = (item) => {
  const buttonF = document.getElementById('changeF');
  const buttonC = document.getElementById('changeC');
  const temp = document.getElementById('temperature');
  temp.textContent = `${item.main.temp} C°`;
  buttonF.style.display = 'block';
  buttonC.style.display = 'none';
}

const capital = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const errorD = () => {
  cont.style.display = 'none';
  error.style.display = 'block';
}

export { btnCLogic, btnFLogic, capital, errorD };