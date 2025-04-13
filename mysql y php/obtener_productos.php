<?php
//creamos conexion
    $conexion = mysqli_connect("localhost", "root", "", "inventario_tienda");
    if ($conexion==false) {
        Echo "Error en la conexion a la base de datos";
        exit();
    }

//Consulta id y nombres productos;

    $consulta = "SELECT id_producto, nombre FROM productos";
    $resultado = mysqli_query($conexion, $consulta);

    if ($resultado) {
        if (mysqli_num_rows($resultado) > 0) {
            while ($fila = mysqli_fetch_assoc($resultado)) {
                echo "<option value='" . $fila['id_producto'] . "'>" . htmlspecialchars($fila['nombre']) . "</option>";
            }
        } else {
            echo "<option value='' disabled>No hay productos disponibles</option>";
        }
        mysqli_free_result($resultado);
    } else {
        echo "<option value='' disabled>Error al obtener productos</option>";
    }

// Cerramos la conexión a la base de datos
    mysqli_close($conexion);

?>

