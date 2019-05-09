const cartas = document.querySelectorAll(".carta");

let cartaVirada = false;
let travar = false;
let carta1,carta2;

  function viraCarta() {
    if (travar) return;
    if (this === carta1) return;
    this.classList.add("virada");

    if (cartaVirada==false) {

      cartaVirada=true;
      carta1=this;

      return;
    }

    carta2=this;

      check();
  }

function check(){
  let igual = carta1.dataset.framework === carta2.dataset.framework;

  igual ? removerclick() : desvirar();
}

function desvirar(){
  travar = true;

  setTimeout(function () {
    carta1.classList.remove("virada");
    carta2.classList.remove("virada");

    resetTravar();
  }, 1500);

}

function removerclick(){
  carta1.removeEventListener("click",viraCarta);
  carta2.removeEventListener("click",viraCarta);
  resetTravar();
}
function resetTravar(){
  [cartaVirada, travar] = [false, false];
  [carta1,carta2] = [null,null];
}
cartas.forEach(carta => carta.addEventListener("click", viraCarta));
