/*let nombre='juan';
let apellido='hinojosa';
let edad=34;
let email='juan@gmail.com'
let dni=12345
console.log('Datos Personales');
console.log('nombre= ' + nombre)
console.log('apellido= '+ apellido);
console.log('edad= '+edad);
console.log('email= '+ email);
console.log('dni= '+dni);*/

//operaciones
/*let n1=5;
let n2=2;
let result=(n1*n2);
console.log(result);*/

//concatenacion de string

/*let nombre='jose';
let apellido='lopez';
console.log(nombre + ' ' +apellido);*/

//promt

/*let nombre=prompt('ingresa tu nombre=');
console.log('hola '+nombre);
alert('Bienvenido '+nombre);*/

//parseo
/*let n1=5;
let n2=prompt('ingresa un numero');
let suma=n1+parseInt(n2);
console.log('el resultado es= '+suma);
alert('el resultado es= '+suma);

let nomb=prompt('ingresa tu nombre');
let apellido=prompt('ingresa tu apellido');
let nombreApellido=nomb+' '+apellido;
alert('tu bombre y apelldio es= '+nombreApellido);*/

//estructura if
/*let num=prompt('ingresa un numero');
if(num>1000){
    alert('el numero ingesado es mayor a 1000');
}else{
    alert('el numero ingesado NO es mayor a 1000');
}*/

/*let texto=prompt('ingresa un texto');
if(texto =='hola'){
    console.log('el texto es igual a hola')
}*/
/*let num=prompt('ingresa un numero =');
if(num >=10 && num<=50){
    alert('esta dentro del rango');
}else{
    alert('NO esta dentro del rango');
}*/
  
//EN UNA LINEA
/*let edad=prompt('ingresa tu edad');
let mayorEdad=edad>18? true:false;*/

//arrays
let productos=['cafe','leche','mate','gaseosa','fideo'];
let producto=prompt('ingrese un producto');
if(productos.includes(producto)){
    alert('el producto ya existe en la lista');
}else{
    productos.push(producto);
    alert('producto agregado');
    console.log('lista de productos = ' + productos);
}
for(let i=0;i<productos.length;i++){
    console.log('Producto '+i+'= '+productos[i]);
}
console.log('otra forma');
let indice=0;
while(indice<productos.length){
    console.log('Producto'+indice+'='+productos[indice]);
    indice++;
}



