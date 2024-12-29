/*Se pide por pantalla mediante una ventana de tipo prompt, el importe en Euros. Se imprime
en el documento la equivalencia en libras.
1euro---0,87libras */

let euros=window.prompt("Introduce el importe en euros");
let libras= euros*0.87;
document.write(euros+" € son " + libras + " libras")


