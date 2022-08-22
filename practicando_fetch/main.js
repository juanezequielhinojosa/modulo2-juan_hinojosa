/*const direccion='https://swapi.dev/api/people/1/'

fetch(direccion)
.then(response => response.json())
.then(data =>{
    let nombre_personaje= document.getElementById('nombre-personaje');
    nombre_personaje.innerHTML = `${data.name}`;
    console.log(data);
})*/

/*obtenerPersonaje(){
    let personaje=
}*/


fetch('https://api.ipify.org?format=json/')
.then(res => res.json())
.then(json =>{
    
    console.log(json.p);
})