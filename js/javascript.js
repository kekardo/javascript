// Entrega numero 1

// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert(ingresarNumero +" X "+ i +" = "+ resultado);
//     console.log("Estas multiplicando a tu numero por " + i);
// } 


// let nombre = prompt("Ingresar un dato");
// while (nombre != "Jeremias") {
//     alert("El usuario ingresó " + nombre);
//     nombre = prompt("Ingresar otro dato");
//     console.log("Su nombre ingresado es " + nombre);
// }

// Entrega numero 2

console.log("Elige alguno de estos productos")
let producto = prompt("tank, mods, pods, pens").toLowerCase();
console.log(producto);

let subtotal = 0;
let total = 0;
switch (producto) {
    case "tank":
        subtotal = 10000;
        total = calculo_total(subtotal)
        console.log("El precio total del vapper tank es: ", total)
        break;
    case "mods":
        subtotal = 16000;
        total = calculo_total(subtotal)
        console.log("El precio total del vapper mods es: ", total)
        break;
    case "pods":
        subtotal = 12000;
        total = calculo_total(subtotal)
        console.log("El precio total del vapper pods es: ", total)
        break;
    case "pens":
        subtotal = 14000;
        total = calculo_total(subtotal)
        console.log("El precio total del vapper pens es: ", total)
        break;

    default:
        console.log("No tenemos disponible este producto")
        break;
}
function calculo_total(subtotal) {
    return subtotal * 1.20
}



