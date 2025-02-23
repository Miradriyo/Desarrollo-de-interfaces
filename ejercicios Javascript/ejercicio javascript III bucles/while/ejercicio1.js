//Se pide por pantalla el nombre y el número que se desea imprimir

let nombre = window.prompt ("Introduzca el nombre")
let numero = window.prompt ("Introduzca un número")
let continuar = true;

while (continuar === true){
    let respuesta = window.prompt ("¿Desea seguir introduciendo números? si/no").toLowerCase();
    if (respuesta ==='si') {
       numero = window.prompt ("Introduzca un número")
    } else { 
        continuar = false;
        window.alert ("fin")
    }
}



