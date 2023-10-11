//Pom -------------------------------------

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick=tocaSomPom;

document.querySelectorAll('.tecla')

 const listaDeTeclas = document.querySelectorAll('.tecla')

  let contador = 0;

  //enquanto
  while  (contador < listaDeTeclas.length  ){
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador +1;
    console.leg(contador);
  }












