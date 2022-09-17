const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const parrafoid = document.querySelector('#parrafo');
const input = document.querySelector('input');

console.log(input.value);

console.log({
   h1,
   p,
   parrafo,
   parrafoid,
   input
})


h1.innerHTML = 'Patito <br> Feo';  //Nos premite modificar el htmo que esta dentro de la etiqueta que se esta modificando el ht
h1.innerText = 'Patito <br> Feo';  // covierte a texto todos los
//console.log(h1.getAttribute('class'));

//h1.setAttribute('class','rojo')//permite cambiar el valor del atributo
h1.classList.add('parrafo'); //permite agregar un valor de atributo
h1.classList.remove('parrafo');
//h1.classList.toggle();// permite trabajar con eventos
//h1.classList.contains(); // es una especie de condicional nos devuelve true o false


input.value = "ghgjg"

const img = document.createElement('img');
img.setAttribute('src',)