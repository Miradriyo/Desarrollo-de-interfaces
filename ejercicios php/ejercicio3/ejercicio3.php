<?php   
function tablaMultiplicar($numero) {
    $resultados = array();
    
    //manejo errores
    if($numero < 0) {
        return "Dato incorrecto, el número debe ser mayor que cero.";
    }
    
    //calcular y mostrar tabla
    for($i = 0; $i <= 10; $i++) {
        $resultado = $numero * $i;
        echo "$numero x $i = $resultado <br>";
        $resultados[] = $resultado;
    }
    
    //verificar si es múltiplo de 5
    foreach($resultados as $valor) {
        if($valor % 5 == 0 && $valor != 0) {
            echo "El número $valor es múltiplo de 5 <br>";
        }
    }
    
    return '';
}

// Procesar el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $numero = $_POST['number']; // Corregido de 'numero' a 'number' para que coincida con el formulario HTML
    echo tablaMultiplicar($numero);
}
?>