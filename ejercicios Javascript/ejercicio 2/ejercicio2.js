/* Realizar con el operadro not. Pedir un número por pantalla, y comporbar que es distinto de cero y mayor que cero
    a. Si se cumple la condición, se calcula si el número es par o impar
    b. Si no se cumple la condición, se muestra un mensaje de error */


    let numero = window.prompt("Introduce un número distonto a cero y mayor que cero");

    if ((numero !=0) && (numero>0)) {

        if (numero %2 == 0) {
            document.write("el numero " +numero+(" es par"))
        } else {
            document.write(" el numero "+ numero + (" es impar"))
        }
        
    } else { 

        document.write("el numero "+ numero+ (" no cumple la condición"))
        
    }
