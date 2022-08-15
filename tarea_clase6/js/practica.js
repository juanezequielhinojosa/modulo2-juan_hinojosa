/*function saludar(nombre,apellido,serieFavorita){
    let saludo=(' Hola '+nombre+' Tu apelido es '+apellido+' Tu serie favorita es '+serieFavorita);
    return saludo;
}

let nombre=prompt('Ingresa tu nombre');
let apellido=prompt('Ingresa tu apellido');
let serieFavorita=prompt('Ingresa tu serie favorita es');
console.log(saludar(nombre,apellido,serieFavorita));*/

/*function saludar(n) {
    alert('Hola JS '+n);
}

saludar('juan');
saludar('pedro');
saludar('pablo');*/
//aray
/*let nombres = [
    'jorge',
    'facundo',
    'pedro'
];
//objeto
let persona = {
    nombre: "Juan",
    edad: 29,
    mascotas: ['perro', 'gato']
}*/


/*let persona = {
    nombre: "Juan",
    edad: 29,
    mascotas: ['perro', 'gato']
}
let persona2 = {
    nombre: "Pablo",
    edad: 33,
    mascotas: ['loro', 'tortuga']
}



console.log(persona.mascotas[0]);

let personas = [persona];
console.log(personas[0].edad);
console.log(personas.length); //longitud

personas.push(persona2);
console.log(personas.length); //longitud
console.log(personas[1]);*/

//PROMESAS ---------------------------------
/*console.log("antes de promesa...");
let promise = new Promise(function (resolve, reject) {  
  setTimeout(() => resolve(), 5000);
}).then((resp) => {
  console.log("termino timeout...");
});
console.log("despues de promesa...");*/

//manipulacion del DOM
/*const $lb = document.createElement('h1')
$lb.innerText = 'hola desde js'
document.body.append($lb)
console.log($lb)*/


//metodo find

/*let personas=['juan','ana','pablo']
console.log(personas)
console.log(personas.find(elemento=>elemento >'ana'))*/

//OBJETO LITERAL

/*let persona={
    nombre:'Leila',
    apellido:'Organa',
    edad:32
}

let nombres=[
    'Ana ',
    'pedro',
    'pablo'
]
console.log(nombres[2]);

let persona2={
    nombre:'han',
    apellido:'Solu',
    edad:39,
    mascotas:['perro','gato','loro']
}
console.log(persona2.mascotas[2]);
let personas=[persona2,persona];
console.log(personas[0].mascotas[1]);
persona2.sexo='M'
console.log(persona2);
persona2.mascotas[2]='tortuga';
console.log(persona2);
console.log(persona2.mascotas[2]);*/

//PRACTICA
/*let pers={
    nombre:'Ema',
    apellido:'Perez',
    edad:30,
    mascota:'perro',
}
console.log(pers);
pers.comidasFavoritas=[
    'milanesa',
    'empanada',
    'hamburguesa',
    'pizza'
]
console.log(pers.comidasFavoritas);*/

//para esto es el JSON.parse(JSON.stringlyfi)
/*let p1=pers;
p1.nombre='xxxx';
console.log(pers);
console.log(p1);*/
/*let p1=JSON.parse(JSON.stringify(pers))
p1.nombre='Liliana'
p1.apellido='lopez'
console.log('---------------');
console.log(pers);
console.log(p1);*/

//hacer un json
/*let j=JSON.stringify(pers);
console.log(j);*/
//esto devuelve una cadena
/*console.log(JSON.stringify(pers));*/

//PROMESAS ---------------------------------
console.log("antes de promesa...");
let promise = new Promise(function (resolve, reject) {  
  setTimeout(() => resolve(), 5000);
}).then((resp) => {
  console.log("termino timeout...");
});
console.log("despues de promesa...");