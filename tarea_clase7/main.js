/* 1- ACCEDER A LOS ELEMENTOS */
//GET ELEMENT BY ID
let parrafo1 = document.getElementById('para1');
console.log(parrafo1);
// leer contenido
console.log(parrafo1.textContent);
//QUERY SELECTOR
const elementoH1 = document.querySelector("h1");
console.log(elementoH1);
console.log(elementoH1.textContent);

const lista = document.querySelector(".list");
console.log(lista);
console.log(lista.textContent);


/* 2 -AÑADIR ELEMENTOS AL DOM */

let listaDesordenada = document.createElement("ul");
document.body.appendChild(listaDesordenada);

let listaElemento1 = document.createElement("li");
listaElemento1.textContent = "Libreria React";
listaDesordenada.appendChild(listaElemento1);

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Framework Angular";
listaDesordenada.appendChild(listaElemento2); 

/* 3 - ELIMINAR ELEMENTOS DEL DOM */
let parrafo = document.getElementById("parrafo-a-eliminar");
parrafo.parentNode.removeChild(parrafo);

document.getElementById("nombre").value = "Harry";
document.getElementById("edad").value  = 13;

/* 4 - OBTENER DATOS DE FORMULARIO */
// Asignar valores a los inputs

document.getElementById("nombre").value = "Harry";
document.getElementById("edad").value  = 13;

// Capturar valores de los inputs
const getValueInput = () => {
    let inputValue1 = document.querySelector("#name").value;
    let inputValue2 = document.querySelector("#surname").value;      

    console.log(inputValue1);
    console.log(inputValue2);
};


//Antes - FUNCION CON CUERPO
/* var fecha = new Date();
var hora = fecha.getHours();
var saludo3 = function (hr) {
  if (hr <= 12) {
    return 'Buenos días!!!';
  } else if(hr > 12 && hr < 20) {
    return 'Buenas tardes!!!';
  } else if(hr >= 20) {
    return 'Buenas noches!!!';
  }
};
console.log( saludo3(hora) ); //Imprime el saludo dependiendo la hora del día */

//Ahora
let fecha = new Date();
let hora = fecha.getHours();

let saludo3 = (hr) => {
  if (hr <= 12) {
    return 'Buenos días!!!';
  } else if(hr > 12 && hr < 20) {
    return 'Buenas tardes!!!';
  } else if(hr >= 20) {
    return 'Buenas noches!!!';
  }
};
console.log( saludo3(hora) ); //Imprime el saludo dependiendo la hora del día


