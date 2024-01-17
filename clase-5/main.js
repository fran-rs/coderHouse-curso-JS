/*let nombre = "pepito";
let edad = 56;
let direccion = "AV";*/

/*
estructura de un objeto

{clave1: valor1, clave2: valor2 .....claven: valorn};
*/

/*
const persona = { nombre: "pepito", edad: 56, direccion: "AV"}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);

*/
//let clave = "nombre"
//console.log(persona[clave]);
//console.log(persona["edad"]);
//console.log(persona["direccion"]);


const persona = { nombre: "pepito", edad: 56, direccion: "AV"}



let clave = prompt("Ingrese la clave que quiere consultar");
alert(persona[clave]);


//persona["nombre"] = "juanita";
//persona["familiar"] = "pedrito";

//persona.nombre = "juanita";
//persona.familiar = "pedrito";

//console.log(persona);


/*function Persona(info) {
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
    this.peso = info.peso;
}
*/
//const persona1 = new Persona( "Jaun", 56, "AV");
//const persona2 = new Persona("juan", 70, "AV1");

/*const persona1 = new Persona ({
    edad: 45,
    nombre: "juan",
    peso: 56,
    direccion: "AV",
});

const persona2 = new Persona ({
    edad: 345,
    nombre: "pedro",
    peso: 5,
    direccion: "AV1"
});

console.log(persona1);

console.log(persona1.nombre);
console.log(persona2.nombre);*/


/*let nombre = prompt("Ingrese su edad");
let edad = Number(prompt("Ingrese su edad"));
let direccion = prompt("Ingrese su dureccion");*/


/*function Persona(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.hablar = function(){console.log }
}

const persona1 = new Persona("juan", 45, "AV");*/

