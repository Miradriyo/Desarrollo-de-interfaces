//Se pide por pantalla el nombre y el número que se desea imprimir

let nombre = window.prompt ("Introduzca el nombre")
let respuesta

do {
    let numero = window.prompt ("Introduzca un número")
    respuesta = window.prompt ("¿Desea seguir introduciendo números? si/no").toLowerCase();
} while (respuesta === "si");

window.alert ("fin")







