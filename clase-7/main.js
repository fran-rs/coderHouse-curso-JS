// **** Retorna una funcion ****

// function mayorQue(n) {
//     return (m) => m > n;
// }

// const mayorQueCinco = mayorQue(5); //(m) => m > 5
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// const mayorQueDiez = mayorQue(10); // (m) => m > 10
// console.log(mayorQueDiez(7));
// console.log(mayorQueDiez(15));

// function generarOperacion(operacion) {
//     if(operacion === "sumar") {
//         return (x, y) => x + y;
//     }
//     if(operacion === "restar") {
//         return (x, y) => x - y;
//     }
//     if(operacion === "multiplicar") {
//         return (x, y) => x * y;
//     }
//     if(operacion === "dividir") {
//         return (x, y) => x / y;
//     }
// }
// const sumar = generarOperacion("sumar");//(x, y) => x + y;
// console.log(sumar(5, 6));
// const restar = generarOperacion("restar"); // (x, y) => x - y;
// console.log(restar(6, 6));
// const multiplicar = generarOperacion("multiplicar")
// console.log(multiplicar(5,6));
// const dividir = generarOperacion("dividir");
// console.log(dividir(10, 2))

// *** Recibir funcion por parametro ***

// function iterar(arreglo, fun){
//     for (const iterator of arreglo) {
//         fun(iterator)
//     }
// }

// iterar([1, 2, 4, 56, 78, 9], console.log)

// Método de búsqueda y transformación

// const productos = [
//     {id: 1 , nombre: "camisa", precio: 1000 },
//     {id: 2 , nombre: "zapato", precio: 700 },
//     {id: 3 , nombre: "gorra" , precio: 850},
//     {id: 4 , nombre: "media", precio: 320 },
// ];

// forEach, recorre los elementos del arreglo

// productos.forEach( item => {
//     console.log(item.nombre);
//     console.log(item.precio)
// })


// find, encuentra el primer elemento que cumpla la condición dada

// const producto = productos.find((item) => item.nombre === "camisa");
// console.log(producto)

// let nombre = prompt("Ingrese el nombre  del producto a buscar");
// const producto = productos.find((item) => item.nombre === nombre);

// if(producto) {
//     alert (`
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     Precio: ${producto.precio}
//     `);
// } else {
//     alert("Producto no encontrado");
// }


// const productos = [
//     {id: 1 , nombre: "camisa", precio: 1000, categoria: "hombre"},
//     {id: 2 , nombre: "zapato", precio: 700, categoria: "mujer"},
//     {id: 3 , nombre: "gorra" , precio: 850, categoria: "hombre"},
//     {id: 4 , nombre: "media", precio: 320, categoria: "mujer"},
// ];

// filter filtra (busca o encuentra) todos los producto que complan la condicion dada

// const filtrados = productos.filter((item) => item.precio > 750);
// console.log(filtrados);


// const precio = Number(prompt("Ingrese el precio mínimo del producto "))
// const filtrados = productos.filter((item) => item.precio > precio);
// console.log(filtrados);

// filtrados.forEach((item) => {
//  alert (`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//     `);
// });

// const productos = [
//     {id: 1 , nombre: "camisa", precio: 1000, categoria: "hombre"},
//     {id: 2 , nombre: "zapato", precio: 700, categoria: "mujer"},
//     {id: 3 , nombre: "gorra" , precio: 850, categoria: "hombre"},
//     {id: 4 , nombre: "media", precio: 320, categoria: "mujer"},
// ];


// const sexo = prompt("Ingrese  sexo")
// const  filtrados = productos.filter((item) => item.categoria === sexo);


// filtrados.forEach((item) => {
//     alert (`
//        Id: ${item.id}
//        Nombre: ${item.nombre}
//        Precio: ${item.precio}
//     `);
// });

// const productos = [
//     {id: 1 , nombre: "camisa", precio: 1000, categoria: "hombre"},
//     {id: 2 , nombre: "zapato", precio: 700, categoria: "mujer"},
//     {id: 3 , nombre: "gorra" , precio: 850, categoria: "hombre"},
//     {id: 4 , nombre: "media", precio: 320, categoria: "mujer"},
// ];

// some, verifica si existe almenos un elemento que cumpla la condicion dada
// console.log(productos.some(item => item.nombre === "camisa")); 

// map. modifica o transforma cada uno de los elementos del arreglo
// const precios = productos.map((item) => item.precio);
// console.log(precios)

// const nombre = productos.map((item) => item.nombre);
// console.log(nombre)

// const productos = [
//     {id: 1 , nombre: "camisa", precio: 1000, categoria: "hombre"},
//     {id: 2 , nombre: "zapato", precio: 700, categoria: "mujer"},
//     {id: 3 , nombre: "gorra" , precio: 850, categoria: "hombre"},
//     {id: 4 , nombre: "media", precio: 320, categoria: "mujer"},
// ];

// reduce, reduce un arreglo a un único valor

// const numeros = [1, 3, 4, 56, 7, 8];
// const total = numeros.reduce( (acum, item) => acum + item, 0);
// console.log(total)

// const totalCarrito = productos.reduce( (acum, item) => acum + item.precio , 0);
// console.log(totalCarrito);

// sort
// const numeros = [40, 1, 5, 200];
// console.log(numeros.sort((a, b) => a - b)); // [1, 5, 40, 200];
// console.log(numeros.sort((a, b) => b - a)); // [200, 40, 5, 1];

// const items = [
//     {name: "Pikachu", price: 21},
//     {name: "Charmander", price: 37},
//     {name: "Pidgey", price: 45},
//     {name: "Squirtle", price: 60}
// ]
// console.log(
//         items.sort((a, b) => {
//         if (a.name > b.name) {
//             return 1;
//         }
//         if (a.name < b.name) {
//             return -1;
//         }
//          a es igual a b
//         return 0;
//     })
// );

// actividad, aplicar cada método al arreglo

// const frutas = [
//     {id: 1 , nombre: "sandía", precio: 8000, categoria: "unidad"},
//     {id: 2 , nombre: "cerezas", precio: 1000, categoria: "kg"},
//     {id: 3 , nombre: "piña" , precio: 4000, categoria: "unidad"},
//     {id: 4 , nombre: "ciruelas", precio: 800, categoria: "kg"},
// ];

// forEach
// frutas.forEach(item => {
//     console.log(item.nombre);
//     console.log(item.precio)
// })

// find

// const fruta = frutas.find((item) => item.nombre === "piña");
// console.log(fruta)

// let nombre = prompt("Ingrese el nombre de la fruta");
// const fruta = frutas.find((item) => item.nombre === nombre);

//  if(fruta){
//     alert(`
//         ID: ${fruta.id}
//         Nombre: ${fruta.nombre}
//         Precio: ${fruta.precio}
//         Categoría: ${fruta.categoria}
//     `)
//  }else {
//     alert("Producto no encontrado")
//  }

//filter

// const filtrado = frutas.filter((item) => item.precio > 1000);
// console.log(filtrado);

//some

// console.log(frutas.some(item => item.nombre === "piña"));

// map

// const precios = frutas.map((item) => item.precio);
// console.log(precios)

// reduce 
// const frutas = [
//     {id: 1 , nombre: "sandía", precio: 8000, categoria: "unidad"},
//     {id: 2 , nombre: "cerezas", precio: 1000, categoria: "kg"},
//     {id: 3 , nombre: "piña" , precio: 4000, categoria: "unidad"},
//     {id: 4 , nombre: "ciruelas", precio: 800, categoria: "kg"},
// ];

// const totalCarrito = frutas.reduce( (acum , item) => acum + item.precio , 0);
// console.log(totalCarrito)