/*
Estructura de una función

function nombreFuncion(){
    código a ejecutar por la función
}

nombreFuncion(); Se ejecuta la función
*/

/*
function saludar(){
    console.log("Hola");
}

saludar()
*/
/*
function saludar() {
    let nombre = prompt("Ingrese el nombre");
    alert(`Hola ${nombre}`);
}

saludar();
*/

/* Estrucura de una función con parámetros

function nombreFuncion(parm1, parm2, ... , parmN){
    código a ejecutar por la función
}

nombreFuncion(calor1, valor2, ..., valorN);
*/


/*
function saludar(saludo, nombre) {
    console.log(`${saludo} ${nombre}`);
}



let saludo = prompt('Ingrese el saludo');
let nombre = prompt('Ingrese el nombre');
 saludar("Hola", "Nachito");
 saludar('bienvenida', 'Lucy');
 */

 /*
 function sumar(numeroUno, numeroDos) {
   return numeroUno + numeroDos;
 }

let resultado = sumar(5, 6);
console.log('resultado', resultado)
*/


/*
function armar(partes){
    return `Muñeco armado con ${partes}`;
}

function pintar(munecoArmado){
    return `${munecoArmado} y pintado`;
}

function vestirGuardar(munecoPintado){
    console.log(`${munecoPintado}, vestido y guardado en bodega`);
}

let munecoArmado = armar('madera');
let munecoPintado = pintar(munecoArmado);
vestirGuardar(munecoPintado);
*/

/*
function calculadora(numeroUno, numeroDos, operacion) {
    switch(operacion) {
        case "+":
            return numeroUno + numeroDos;
            break;
        
        case "-":
            return numeroUno - numeroDos;
             break; 
         
        case "*":
            return numeroUno * numeroDos;
            break;  
            
        case "/":
            return numeroUno / numeroDos;
            break; 
            
        default:
            return 'Operacion no válida';
            break;
    }
}

let numeroUno = Number(prompt('Ingrese el número uno'));
let numeroDos = Number(prompt('Inrgese el número dos'));
let operacion = prompt('Ingrese la operación');

let resultado = calculadora(numeroUno, numeroDos, operacion);

alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado} `);
*/

let resultado = 0;
function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
    
}
 sumar(5,6);
 console.log(resultado);
 