<?php
function obtenerCalificacion($nota){
    //manejo de errores
    if (!is_numeric($nota) || $nota < 0 || $nota > 100) {
        return "Datos incorrectos: la nota debe ser un número entre 0 y 100.";
    }
    //clasificacion de la nota
    if ($nota >= 90) {
        $calificacion = 'A';
    } elseif ($nota >= 80) {
        $calificacion = 'B';
    } elseif ($nota >= 70) {
        $calificacion = 'C';
    } elseif ($nota >= 60) {
        $calificacion = 'D';
    } else {
        $calificacion = 'F';
    }
    //mensajes adicionales
    switch ($calificacion) {
        case 'A':
            $mensaje = "Excelente trabajo!";
            break;
        case 'B':
            $mensaje = "Buen trabajo!";
            break;
        case 'C':
            $mensaje = "Sigue mejorando!";
            break;
        case 'D':
            $mensaje = "Necesitas mejorar!";
            break;
        case 'F':
            $mensaje = "¡No has estudiado nada!";
            break;
    }
    return "Nota numérica: $nota - Calificación: $calificacion - $mensaje";
}

// Procesar el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nota = $_POST['nota'];
    echo obtenerCalificacion($nota);
}
?>