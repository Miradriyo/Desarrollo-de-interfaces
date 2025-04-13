<?php
//conexion
$conexion = mysqli_connect("localhost", "root", "", "inventario_tienda");
if ($conexion==false) {
    Echo "Error en la conexion a la base de datos";
    exit();
    }

    if (isset($_POST['producto_id'])) {
        $producto_id = $_POST['producto_id'];
    
        $producto_id_seguro = mysqli_real_escape_string($conexion, $producto_id);

//consulta SQL
$consulta = "DELETE FROM productos WHERE id_producto = '$producto_id_seguro'";

if (mysqli_query($conexion, $consulta)) {
    echo "<script>
            window.onload = function() {
                alert('Producto eliminado correctamente');
                window.location.href = 'home.html';
            }
          </script>";
} else {
    echo "<script>
            window.onload = function() {
                alert('Error al eliminar el producto: " . mysqli_error($conexion) . "');
                window.location.href = 'home.html';
            }
          </script>";
}
} else {
echo "<script>
        window.onload = function() {
            alert('No se ha seleccionado ningún producto para eliminar.');
            window.location.href = 'home.html';
        }
      </script>";
}

// Cerramos la conexión a la base de datos
mysqli_close($conexion);


?>