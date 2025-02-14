/*Se pide por pantalla un número entero
    a. Se comprueba que es un número positivo y distinto de cero
        i. Si además es de dos cifras, se muestra si es par o impar
        ii. Si es de 3 cifras se muestra el resto de dividir este número entre 2
    b. Si no se cumplen las condiciones, aparece un mensaje de error */

    let numero = window.prompt ("Introduce un número");

    if (numero >0 && numero!=0) {
        if (numero>0 && numero<=99) { //dos cifras
            if (numero %2 == 0) {
                document.write ("El número es de dos cifras y par")                
            } else {
                document.write ("El número es de dos cifras y impar") 
            }
        } else {
            if (numero > 99 && numero < 999) {
                let resto = numero % 2;
                document.write ("El número es de 3 cifras y el resto al dividirlo entre 2 es: " + resto);
            } else {
                document.write ("El número no es ni de 2 ni de 3 cifras") 
            }
        }
    } else {
        document.write("el número no cumple las condiciones")   
    }
