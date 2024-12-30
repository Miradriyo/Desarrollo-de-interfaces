/*Se pide por pantalla el número de celdas y de filas de la tabla. Posteriormente se crea con esas dimensiones */


let celdas = window.prompt("ntroduzca numero de celdas"); 
let columnas = window.prompt("Introduzca numero de columnas");

document.write("<table>")

for (let contador = 0;  contador< columnas; contador++) {
    document.write("<tr>")
    for (let contador2 = 0; contador2 < celdas; contador2++) {
        document.write ("<td>|______|</td>")
    }
    document.write("</tr>")
}

document.write("</table>")


