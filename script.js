const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');

const setGradient = () => {
  const value = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  body.style.background = value;
  css.textContent = value + ';';
}

// update live as you pick colors
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// set initial gradient and <h3> text on page load
window.addEventListener('DOMContentLoaded', setGradient);
