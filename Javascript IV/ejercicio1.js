/*Diseña el siguiente programa:
 Se pide por pantalla el número de celdas de la tabla o Array
 Si hay 10 celdas, cada celda guarda el número correspondiente a su posición.
 Imprimir el array con un bucle for
 Imprimir el array con un bucle while*/

//Pedir numero de celdas 
let numero_celdas = parseInt(window.prompt("introduce el numero de celdas del array"));
//crear el array con valores 0
let array = [];
for (let i = 0; i < numero_celdas; i++) {
    array[i]=0;   
}
//Mostrar numero de celdas
window.alert("El numero de celdas es: "+array.length);
//Si hay 10 celdas, cada celda guarda el número correspondiente a su posición.
if (array.length == 10) {
    for (let i = 0; i < array.length; i++) {
        array[i]=i+1;
    }
}
//Imprimir el array con un bucle for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//Imprimir el array con un bucle while
while (i!=array.length) {
    console.log(array[i]);
    i++;
}
