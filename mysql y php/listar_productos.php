<!DOCTYPE html>
<html lang="es">
<head>
    <title>Menú productos</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="background-container3"></div>
    <h1>Listado de productos</h1>
     <!-- Aquí va el código PHP para mostrar la lista de productos desde la base de datos -->
     <?php
//creamos conexión a la base de datos
    $conexion = mysqli_connect("localhost", "root", "", "inventario_tienda"); 
    
//Consulta para obtener datos
    $consulta = "SELECT p.id_producto, p.nombre AS nombre_producto, p.precio, p.cantidad, c.nombre AS nombre_categoria
    FROM productos p
    INNER JOIN categorias c ON p.id_categoria = c.id_categoria";

    $resultado = mysqli_query($conexion, $consulta);

    if ($resultado) {
        if (mysqli_num_rows($resultado) > 0) {
            echo "<table>";
            echo "<thead>";
            echo "<tr>";
            echo "<th>Nombre</th>";
            echo "<th>Precio</th>";
            echo "<th>Cantidad</th>";
            echo "<th>Categoría</th>";
            echo "</tr>";
            echo "</thead>";
            echo "<tbody>";

            while ($fila = mysqli_fetch_assoc($resultado)) {
                echo "<tr>";
                echo "<td>" . htmlspecialchars($fila['nombre_producto']) . "</td>";
                echo "<td>" . htmlspecialchars($fila['precio']) . "</td>";
                echo "<td>" . htmlspecialchars($fila['cantidad']) . "</td>";
                echo "<td>" . htmlspecialchars($fila['nombre_categoria']) . "</td>";
                echo "</tr>";
            } 
            echo "</tbody>";
            echo "</table>";
        }else {
            echo "<script>
                window.onload = function() {
                    alert('No hay productos en el inventario.');
                    window.location.href = 'home.html';
                }
                </script>";
            }
    }
    
    mysqli_free_result($resultado);
    
    //Cerramos conexión
    mysqli_close($conexion);

    ?>
    <div class="navigation">
        <ul>
            <li class="list">
                <a href="añadir.html">
                    <span class="icon"><img src="img/add.png" alt="Añadir" width="24" height="24"></span>
                    <span class="text">Añadir</span>
                </a>
            </li>
            <li class="list">
                <a href="home.html">
                    <span class="icon"><img src="img/home.png" alt="Añadir" width="24" height="24"></span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list">
                <a href="update.html">
                    <span class="icon"><img src="img/update.png" alt="Añadir" width="24" height="24"></span>
                    <span class="text">Actualizar producto</span>
                </a>
            </li>
            <li class="list">
                <a href="delete.html">
                    <span class="icon"><img src="img/trash.png" alt="Eliminar" width="24" height="24"></span>
                    <span class="text">Eliminar producto</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
</body>
</html>