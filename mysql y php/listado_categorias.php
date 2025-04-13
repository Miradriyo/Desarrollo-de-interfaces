<?php


function obtenerCategorias(){
    //creamos la conexión a la base de datos
    $conexion = mysqli_connect("localhost", "root", "", "inventario_tienda");

    //Consulta para obtener categorias
    $consulta = "SELECT id_categoria, nombre FROM categorias";
    $resultado_categorias = mysqli_query($conexion, $consulta);
    if (!$resultado_categorias) {
        mysqli_close($conexion);
        return null;
    }

    return $resultado_categorias;
}

// Ejecutar la función y mostrar resultados
$resultado_categorias = obtenerCategorias();    
if($resultado_categorias){
    while($fila = mysqli_fetch_assoc($resultado_categorias)){
        echo "<option value='" . $fila['id_categoria'] . "'>" . $fila['nombre'] . "</option>";
    }
    mysqli_free_result($resultado_categorias);
}
?>
