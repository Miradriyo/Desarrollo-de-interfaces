// Función para calcular edad
function calcularEdad(Año_nacimiento) {
    const fecha_actual = new Date().getFullYear();
    return fecha_actual - Año_nacimiento;
}

// Crear nodos principales
const contenedor = document.createElement('div');
contenedor.className = 'contenedor'; 
document.body.appendChild(contenedor);

const tituloAlumnos = document.createElement('h1');
tituloAlumnos.textContent = 'Alumnos';
contenedor.appendChild(tituloAlumnos);

const tabla = document.createElement('table');
tabla.className = 'tabla-alumnos'; 
contenedor.appendChild(tabla);

const tbody = document.createElement('tbody');
tabla.appendChild(tbody); 

// Cargar y mostrar datos de alumnos
function cargarAlumnos() {
    fetch('alumnos.json')
        .then(response => response.json())
        .then(alumnos => {
            alumnos.forEach(alumno => {
                const fila = document.createElement('tr');
                fila.className = 'alumno'; 

                const celdaImagen = document.createElement('td');
                celdaImagen.className = 'celda-imagen'; 
                const img = document.createElement('img');

                img.src = alumno.imagen;
                img.alt = `${alumno.Nombre} ${alumno.Apellidos}`;
                img.className = 'imagen-alumno'; 
                celdaImagen.appendChild(img);
                fila.appendChild(celdaImagen);

                const celdaDatos = document.createElement('td');
                celdaDatos.className = 'celda-datos'; 
                celdaDatos.innerHTML = `
                    <p><strong>Nombre:</strong> ${alumno.Nombre}</p>
                    <p><strong>Apellidos:</strong> ${alumno.Apellidos}</p>
                    <p><strong>Edad:</strong> ${calcularEdad(alumno.Año_nacimiento)}</p>
                    <p><strong>Curso:</strong> ${alumno.Curso}</p>
                `;
                fila.appendChild(celdaDatos);

                tbody.appendChild(fila);
            });
        });
}

cargarAlumnos();
