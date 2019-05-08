
const cartas = document.querySelectorAll('.carta');

function viraCarta() {
  this.classList.toggle('virada');
}

cartas.forEach(carta => carta.addEventListener('click', viraCarta));
