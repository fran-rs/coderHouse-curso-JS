// Propiedades  del objeto Math
// Constantes

// console.log(Math.E);
// console.log(Math.PI);

// Máximo y Mínimo

// console.log(Math.max(2, 45, 7899, 98, 34, 1));
// console.log(Math.min(2, 45, 7899, 98, 34, 1));

// console.log(Math.max(2, 45, 7899, 98, 34, 1, Infinity));
// console.log(Math.min(2, 45, 7899, 98, 34, 1, -Infinity));

// Redondear

// console.log(Math.ceil(2.3)); // 2.3 = 3. Redondea hacia el entero mas cercano hacia arriba

// console.log(Math.floor(1.7)); // redondea hacia el entero mas cercano hacia abajo
// console.log(Math.floor(1,2));

// console.log(Math.round(3.7)); // Round, redondea hacia el entero mas cercano
// console.log(Math.round(3.1));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));

// Raíz cuadrada

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(5));
// console.log(Math.sqrt(6));
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(-1));

// Números aleatorios entre 0 y 1

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random()); 

// Números aleatorios entre 0 y 10 y con números enteros

// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10))
// console.log(Math.round(Math.random() * 10))

// Números aleatorios entre el 3 y el 20 
// Formula = Math.round( Math.random() * amplitud + desplazamiento);

// console.log(Math.round(Math.random() * 17 + 3));
// console.log(Math.round(Math.random() * 17 + 3));
// console.log(Math.round(Math.random() * 17 + 3));

// 17 - 73

// console.log(Math.round(Math.random() * 56 + 17 ));
// console.log(Math.round(Math.random() * 56 + 17 ));
// console.log(Math.round(Math.random() * 56 + 17 ));


// const generarAleatorio = (amplitud, desplazamiento) => {
//     return Math.round(Math.random() * amplitud + desplazamiento);
// };  

// console.log(generarAleatorio(13, 7));
// console.log(generarAleatorio(13, 7));

// Ejercicio: Dado un arreglo de nombres, crear una función que retorne un nombre aleatorio.
// Dado un arreglo de premios, crear una función que retorne un premio.
// el programa debe decir, aleatoriamente, que persona ha ganado y que premio.

// const nombres = ['Josefina', 'Javier', 'ignacia', 'Carolina', 'Lidia', 'Eduardo', 'Gabriel']
// const premios = ['Laptop', 'Celular', 'Smartwacht', 'Earpods', 'SmartTV']

// generarNombreAleatorio = () => {
//     let indice = Math.floor(Math.random() * nombres.length);
//     return nombres[indice];
// };
//  const generarPremioAleatorio = () => {
//     let indice = Math.floor(Math.random() * premios.length);
//     return premios[indice];
//  };

//  console.log(
//     `Nombre del ganador ${generarNombreAleatorio()} y su premio es un ${generarPremioAleatorio()}`
//  );

//  console.log(
//     `Nombre del ganador ${generarNombreAleatorio()} y su premio es un ${generarPremioAleatorio()}`
//  );

//  console.log(
//     `Nombre del ganador ${generarNombreAleatorio()} y su premio es un ${generarPremioAleatorio()}`
//  );


// DATE

// console.log(Date())
// let navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad)

let navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString())

console.log(navidad.getFullYear());
console.log(navidad.getMonth());
console.log(navidad.getDay());





