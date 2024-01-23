// EVENTOS

// let boton = document.getElementById("boton");
// const saludar = () => {
//     console.log("hola click");
// };

// PRIMERA FORMA PARA AGREGAR EVENTOS
// SE DEBE PASAR LA DECLARACION DE LA FUNCION NO SU EJECUCION
// boton.addEventListener("click", saludar);


// SEGUNDA FORMA PARA AGREGAR EVENTOS
//boton.onclick = saludar;


// let evento = prompt("agregue el evento")
// boton.addEventListener(evento, saludar);

// const saludar = (nombre) => {
//      console.log(  `hola click ${nombre}` );
// };

// let nombre = prompt("ingrese el nombre")
// boton.addEventListener("click", () => saludar(nombre)); 


// EVENTOS MAS COMUNES

let boton = document.getElementById("boton");
// boton.addEventListener("mousedown" , () => console.log("mousedown"));
// boton.addEventListener("mouseup" , () => console.log("mouseup"));
// boton.addEventListener("mouseover" , () => console.log("mouseover"));
boton.addEventListener("mouseout" , () => console.log("mouseout"));
