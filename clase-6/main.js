/*
Escrutcuta de un arreglo
[elem1, elem2, ... elemn];
*/

// const vacio = [];
// const numeros = [1, 2, 3, 4, 5];
// const nombres = [ "Juan", "Pedro", "Camila"];
// const valores = [ true, false, false, true];
// const varios = [ 1, "Andrés", true];

// console.log(nombres[1]);
// console.log(numeros[0] + numeros[3]);

// const productos = ["carnes", "arroz", "mate", "chocolate"];

// for (let i = 0 ; i < productos.length; i++) {
//     console.log(
//         `miro el producto ${productos[i]} lo busco y lo agrego al carrito`
//         );
// }

// Propiedades

// const productos = [ "carnes", "arroz", "mate"];

// length me da la longitud o la cantidad de elementos del arreglo
// console.log(productos.length);
// push agrega un elemento al final del arreglo
// productos.push("aceite");
// console.log(productos);

// unshift agregar un elemento al inicio del arreglo
// productos.unshift("chocolate");
// console.log(productos);

//pop quita el último elemento del arreglo
// productos.pop();
// console.log(productos);
    
//shift quita el primer elemento del arreglo)
// productos.shift();
// console.log(productos);

//const productos = [ "carnes", "arroz", "mate", "chocolate", "queso"];
// splice elimina uno o mas elementos del arreglo
// productos.splice(1, 2);
// console.log(productos);

// join une todos los elementos  del arreglo separados por un parametro
// console.log(productos.join("====="));


// concat me permite combinar dos arreglos en uno solo
// const numeros = [1, 2, 3, 4, 5, 6, 7];
// const varios = productos.concat(numeros);
// console.log(varios)


//Slice crea una copia de un fragmento del arreglo

// const productos = [ "carnes", "arroz", "mate", "chocolate", "queso"];

// const copia = productos.slice(1, 4);
// console.log(copia);

// slice también se usa para agregar un producto
// productos.slice(1, 0, "maní");
// console.log(productos)


// IndexOf se utiliza para encontrar la posicion de un elemento  dado
// const productos = [ "carnes", "arroz", "mate", "chocolate", "queso"];

// console.log(productos.indexOf("arroz")); // arroz esta en la posicion 1
// console.log(productos.indexOf("arroz amarillo")); // como no hay arroz amarillo en el arreglo es  -1


// Includes verifica la existencia de un elemento en el arreglo true / false
// const productos = [ "carnes", "arroz", "mate", "chocolate", "queso"];

// console.log(productos.includes("carnes amarilla"))
// console.log(productos.includes("carnes"))

// const productos = [ "carnes", "arroz", "mate", "chocolate", "queso"];

// let nombre = prompt("Ingrese el nombre del producto a buscar");

// if(productos.includes(nombre)){
//     alert("producto disponible");
// } else {
//     alert("producto no disponible")
// }

//reverse invierte el orden del arreglo 
// const productos = [ "carnes", "arroz", "mate", "chocolate", "queso"];
// productos.reverse();
// console.log(productos)

//Eliminar por nombre, debemos crear un metodo que se encargue

// const productos = [ "carnes", "arroz", "mate", "chocolate", "queso"];

// const eliminarPorNombre = (nombre) => {
//     let index = productos.indexOf(nombre);
//     if (index != -1){
//         productos.splice(index, 1);
//         console.log(productos);
//     }
// }
// eliminarPorNombre("arroz")

// *** Arreglos con objetos ***

// const productos = [
//     {id: 1, nombre: "camisa", precio: 1000},
//     {id: 2, nombre: "gorra", precio: 700},
//     {id: 3, nombre: "media", precio: 520},
//     {id: 4, nombre: "zapato", precio: 374},
// ];

// let producto = {
//     id: 5,
//     nombre: "pantalón",
//     precio: 2000,
// };

// productos.push(producto);
// console.log(productos)

// crear una clase para crear productos

const productos = [];

class Producto {
    constructor(nombre, precio) {
        this.id = productos.length + 1;
        this.nombre = nombre;
        this.precio = precio;
    }
}

for(let i = 0; i < 3; i ++) {
    let nombre = prompt('Ingrese el nombre del producto');
    let precio = prompt('Ingrese el precio');

    let producto = new Producto(nombre, precio);
    productos.push(producto);
}
console.log(productos);
// productos.push( new Producto("camisa", 1000));
// productos.push( new Producto("gorra", 1200));
// productos.push( new Producto("media", 800));
// productos.push( new Producto("zapato", 700));

// for (const iterator of productos) {
//     console.log(iterator.nombre);
//     console.log(iterator.precio)
    
// }