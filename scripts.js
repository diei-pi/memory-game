const cartas = document.querySelectorAll(".carta");

let cartaVirada=false;
let carta1,carta2;

  function viraCarta() {
    this.classList.add("virada");

    if (cartaVirada==false) {

      cartaVirada=true;
      carta1=this;
    }else {

      cartaVirada=false;
      carta2=this;

    if ( carta1.dataset.framework === carta2.dataset.framework ) {

      igual=true;
      carta1.removeEventListener("click",viraCarta);
      carta2.removeEventListener("click",viraCarta);
      }else if(cartaVirada==false) {
        setTimeout(function () {
          carta1.classList.remove("virada");
          carta2.classList.remove("virada");
        }, 2000);
      }
    }
  }

cartas.forEach(carta => carta.addEventListener("click", viraCarta));
