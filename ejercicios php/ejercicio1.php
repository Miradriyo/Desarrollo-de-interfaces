<?php
#Diseña un documento PHP, para crear variables  de diferente tipo. #
#Muestra los valores por pantalla. #

//String
$nombre = "Mireia";
//Integer
$edad = 35;
//Float
$altura = 1.65;
//Boolean
$esEstudiante = true;
//Array
$lenguajes=array("PHP", "JavaScript", "Java");

echo "Nombre: " . $nombre . "<br>";
echo "Edad: " . $edad . "<br>";
echo "Altura: " . $altura . "<br>";
echo "Es estudiante: " . ($esEstudiante ? "Sí" : "No") . "<br>";
echo "Lenguajes: " . implode(", ", $lenguajes) . "<br>";
?>