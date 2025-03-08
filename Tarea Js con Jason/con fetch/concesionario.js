// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos las secciones donde mostraremos los coches
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    // Hacemos la petición fetch al archivo JSON
    fetch('coches.json')
        .then(response => {
            // Convertimos la respuesta a formato JSON
            return response.json();
        })
        .then(data => {
            // Por cada coche en el JSON
            data.forEach(cocheData => {
                // Creamos un nuevo objeto Coche con los datos
                const coche = new Coche(
                    cocheData.marca,
                    cocheData.modelo,
                    cocheData.kilometros,
                    cocheData.año,
                    cocheData.precio,
                    cocheData.motor,
                    cocheData.foto,
                    cocheData.disponible
                );

                // Dependiendo de si está disponible, lo mostramos en una sección u otra
                if (cocheData.disponible === "si") {
                    section1.appendChild(coche.verCoches());
                } else {
                    section2.appendChild(coche.verCoches());
                }
            });
        })
        .catch(error => {
            // Si hay algún error, lo mostramos en la consola
            console.error('Error al cargar los coches:', error);
        });
});
