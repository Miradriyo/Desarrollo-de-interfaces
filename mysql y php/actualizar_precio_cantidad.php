<?php
//creamos conexión
$conexion = mysqli_connect("localhost", "root", "", "inventario_tienda");
if ($conexion==false) {
    Echo "Error en la conexion a la base de datos";
    exit();
    }

// Verificar si se ha recibido el ID del producto
if (isset($_POST['producto_id'])) {
    $producto_id = $_POST['producto_id'];
    $precio = $_POST['precio'];
    $cantidad = $_POST['cantidad'];

    //Validar los datos, que se ha introducido un precio
    if (empty($precio) && empty($cantidad)) {
        echo "<script>
                window.onload = function() {
                    alert('No se ha introducido ningún precio o cantidad para actualizar.');
                    window.history.back(); // Volver a la página anterior
                }
              </script>";
        exit();
    }

    //Consulta SQL para actualizar
    $consulta_update = "UPDATE productos SET ";
    $updates = array();
    if (!empty($precio)) {
        $updates[] = "precio = '" . mysqli_real_escape_string($conexion, $precio) . "'";
    }
    if (!empty($cantidad)) {
        $updates[] = "cantidad = '" . mysqli_real_escape_string($conexion, $cantidad) . "'";
    }
    $consulta_update .= implode(", ", $updates);
    $consulta_update .= " WHERE id_producto = '" . mysqli_real_escape_string($conexion, $producto_id) . "'";

    if (mysqli_query($conexion, $consulta_update)) {
        // Obtener los datos actualizados del producto para mostrar en la alerta
        $consulta_select = "SELECT nombre, precio, cantidad FROM productos WHERE id_producto = '" . mysqli_real_escape_string($conexion, $producto_id) . "'";
        $resultado_select = mysqli_query($conexion, $consulta_select);

        if ($resultado_select && mysqli_num_rows($resultado_select) > 0) {
            $fila_producto = mysqli_fetch_assoc($resultado_select);
            $nombre_producto = htmlspecialchars($fila_producto['nombre']);
            $precio_actualizado = htmlspecialchars($fila_producto['precio']);
            $cantidad_actualizada = htmlspecialchars($fila_producto['cantidad']);

            echo "<script>
                    window.onload = function() {
                        alert('Producto actualizado correctamente:\\nNombre: " . $nombre_producto . "\\nPrecio: " . $precio_actualizado . "\\nCantidad: " . $cantidad_actualizada . "');
                        window.location.href = 'home.html';
                    }
                  </script>";
        } else {
            echo "<script>
                    window.onload = function() {
                        alert('Producto actualizado correctamente. No se pudieron obtener los detalles actualizados.');
                        window.location.href = 'home.html';
                    }
                  </script>";
        }
    } else {
        echo "<script>
                window.onload = function() {
                    alert('Error al actualizar el producto: " . mysqli_error($conexion) . "');
                    window.history.back(); // Volver a la página anterior
                }
              </script>";
    }

} else {
    echo "<script>
            window.onload = function() {
                alert('No se ha seleccionado ningún producto.');
                window.history.back(); // Volver a la página anterior
            }
          </script>";
}

mysqli_close($conexion);
?>