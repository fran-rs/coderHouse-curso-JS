/*
estructura del condicional if

if(condicion o un valor) {
    codigo cuando la condicion o el valor sea verdadero
}
*/

/*
valores booleanos
true o false

boolean(0) => false
boolean(1) => true
boolean("") => false
boolean("Hola") => true

= asignacion
== comparacion de solo valor
=== comparacion tanto de valor como de tipo de dato
*/

/*if (true) {
    console.log("Hola");
}

console.log("Proceso finalizado");
*/

/*if (false) {
    console.log("Hola");
}

console.log("Proceso finalizado");
*/

/*let edad = 18
if(edad >= 19){
    console.log("Eres mayor de edad");
}
*/

/* estructura del if else

if(condicion){
    código a ejecutar cuando  la condición es verdadera
} else {
    codigo a ejecutar cuando la condición es falsa
}
*/

/*let respuesta = prompt("Terminaste la tareas?");

if(respuesta === "si") {
    alert("Puedes salir a jugar");
} else {
    alert("No puedes salir a jugar");
}
*/

/*
    Estructura del if else if

    if(condicion1){
        código a ejecutar si la condicion 1 es verdadera
    }else if(condicion2){
        codigo a ejecutar cuando la condicion2 es verdadera
    }else if(condicion3){
        código a ejecutar cuando la condicion3 es verdadera
    } else {
        código a ejecutar cuando ninguna de las condiciones es verdadera
    }
*/

/*let edad = Number(prompt("Ingrese su edad")) ;

if(edad < 14) {
    alert("No puedes entrar");
}else if (edad < 18) {
    alert("Puedes entrar con un adulto responsable");
}else{
    alert("Puedes entrar");
}
*/

/*
let nombre = prompt("Ingrese el nombre");
let apellido = prompt("Ingrese el apellido");

if(nombre != "" && apellido != "") {
    alert("Hola " + nombre + " " + apellido);
}else{
    alert("Los campos son obligatorio");
}
*/

/*
let nombre = prompt("ingrese el nombre").toLowerCase();

if(nombre === "ana") {
    alert("Hola ana");
}else {
    alert("No eres ana");
}
*/

/*
let nombre = prompt("Ingrese el nombre");

if (nombre != "" && (nombre === "EMA" || nombre === "ema")) {
    alert("hola ema");
}else {
    alert("No eres Ema");
}
*/

let numero = prompt("Ingrese un número");

if(numero > 10 && numero < 50) {
    alert("Número correcto!")
} else {
    alert("Número incorrecto!")
}