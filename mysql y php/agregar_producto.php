?<?php

//creamos la conexión a la base de datos
    $conexion=mysqli_connect("localhost","root","","inventario_tienda");
    if ($conexion==false) {
        Echo "Error en la conexion a la base de datos";
        exit();
        }

//Recogemos los datos del formulario
    $nombre=$_POST['nombre'];
    $descripcion=$_POST['descripcion'];
    $precio=$_POST['precio'];
    $cantidad=$_POST['cantidad'];
    $categoria=$_POST['id_categoria'];

// Saneamos los datos utilizando mysqli_real_escape_string para evitar inyección SQL
    $nombre_seguro = mysqli_real_escape_string($conexion, $nombre);
    $descripcion_seguro = mysqli_real_escape_string($conexion, $descripcion);
    $precio_seguro = mysqli_real_escape_string($conexion, $precio);
    $cantidad_seguro = mysqli_real_escape_string($conexion, $cantidad);
    $categoria_seguro = mysqli_real_escape_string($conexion, $categoria);

// Validamos que los campos obligatorios no estén vacíos
    if (empty($nombre_seguro) || empty($precio_seguro) || empty($cantidad_seguro) || empty($categoria_seguro)) {
        die("Error: Por favor, completa todos los campos obligatorios.");
    }

// Validamos que el precio y la cantidad sean números
    if (!is_numeric($precio_seguro) || !is_numeric($cantidad_seguro)) {
        die("Error: El precio y la cantidad deben ser valores numéricos.");
    }

//Creamos la consulta para guardar el producto
    $consulta="INSERT INTO productos (nombre, descripcion, precio, cantidad, id_categoria) VALUES ('$nombre', '$descripcion', '$precio', '$cantidad', '$categoria')";
    $resultado=mysqli_query($conexion,$consulta);

// Cerramos la conexión a la base de datos
mysqli_close($conexion);

if ($resultado) {
    echo "<script>
            window.onload = function() {
                alert('Producto agregado correctamente');
                window.location.href = 'home.html';
            }
          </script>";
} else {
    echo "<script>
            window.onload = function() {
                alert('Error al agregar el producto');
                window.location.href = 'home.html';
            }
          </script>";
}
include 'añadir.html';
?>