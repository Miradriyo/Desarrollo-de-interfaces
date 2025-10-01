# 1. Conexión a MySQL con PHP (MySQLi)
   Usamos la extensión MySQLi (Improved) para establecer un puente. La variable `$conexion` será nuestro punto de acceso a la base de datos.
            
            <?php
            // Datos de Acceso: ¡CUIDADO con exponer estos datos en un repositorio público!
            define('DB_SERVER', 'localhost');
            define('DB_USERNAME', 'root'); 
            define('DB_PASSWORD', 'tu_password'); 
            define('DB_NAME', 'mi_proyecto'); 
            
            // 1. Crear la conexión
            $conexion = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
            
            // 2. Verificar la conexión
            if ($conexion->connect_error) {
                die("Conexión fallida: " . $conexion->connect_error);
            }
            
            // 3. Opcional: Establecer UTF-8 para evitar problemas de codificación
            $conexion->set_charset("utf8");
            ?>´
  # 2. Flujo: Formularios, Procesamiento y Resultados en PHP
  Aquí es donde PHP, HTML y MySQL trabajan juntos para leer o guardar información.

  A. Procesar la Lectura de Datos (SELECT y Bucle while)
          Este patrón es esencial para mostrar listas de información.
              
                <?php
                // 1. Incluimos la conexión
                include 'conexion.php'; 
                
                $sql = "SELECT titulo, anio FROM libros ORDER BY anio DESC";
                $resultado = $conexion->query($sql); // 2. Ejecutar la consulta
                
                if ($resultado && $resultado->num_rows > 0) {
                    
                    // 3. Iterar sobre los resultados
                    // fetch_assoc() obtiene la fila actual como un array asociativo.
                    while($fila = $resultado->fetch_assoc()) { 
                        
                        echo "<li><strong>" . $fila['titulo'] . "</strong> (" . $fila['anio'] . ")</li>";
                    }
                    
                    $resultado->close(); // Liberar memoria
                } else {
                    echo "<p>No hay libros registrados.</p>";
                }
                
                $conexion->close(); // Cerrar conexión al finalizar
                ?>
                
  B. Rellenar un Desplegable (<select>) Dinámicamente
  Se utiliza el mismo patrón de lectura, pero se generan las etiquetas `<option>` dentro del HTML.
           
            <label for="autor_id">Selecciona Autor:</label>
            <select name="autor_id">
                <option value="">-- Elige --</option>
                <?php
                $sql_autores = "SELECT id, nombre FROM autores ORDER BY nombre ASC";
                $res = $conexion->query($sql_autores);
                
                while($fila_autor = $res->fetch_assoc()) {
                    // id es el 'value' que se envía, nombre es lo que se muestra
                    echo "<option value='" . $fila_autor['id'] . "'>" . $fila_autor['nombre'] . "</option>";
                }
                ?>
            </select>
            
  C. Procesar y Guardar Datos ($_POST e INSERT)
      El archivo al que apunta el formulario `(action="procesar.php")` recoge los datos y los inserta en la base de datos.
     
        <?php
        include 'conexion.php'; 
        
        // 1. Recoger datos de la superglobal $_POST (usando el atributo 'name' del input)
        $nombre_recogido = $_POST['nombre_usuario'];
        $email_recogido = $_POST['email_usuario'];
        
        // 2. Preparar la consulta INSERT
        $sql_insert = "INSERT INTO usuarios (nombre, email) VALUES ('$nombre_recogido', '$email_recogido')";
        
        // 3. Ejecutar la consulta
        if ($conexion->query($sql_insert) === TRUE) {
            echo "<h1>¡Usuario " . $nombre_recogido . " registrado con éxito!</h1>";
        } else {
            echo "Error al insertar: " . $conexion->error;
        }
        
        $conexion->close();
        ?>
