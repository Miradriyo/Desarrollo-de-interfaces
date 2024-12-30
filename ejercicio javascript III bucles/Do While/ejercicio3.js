/*Se pide por pantalla el número de celdas y de filas de la tabla. Posteriormente se crea con esas dimensiones */

let celdas = window.prompt("ntroduzca numero de celdas"); 
let columnas = window.prompt("Introduzca numero de columnas"); 
let fila = 0
document.write("<table>")

do {
    document.write("<tr>")
    let columna = 0;
    do {
        document.write ("<td>|______|</td>")
        columna++
    } while (columna<celdas); 
    document.write("</tr>")
    fila++;
} while (fila < columnas);

document.write("</table>")

