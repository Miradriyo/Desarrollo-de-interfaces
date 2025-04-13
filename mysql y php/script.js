const list = document.querySelectorAll('.list');
const navigation = document.querySelector('.navigation');

function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    event.stopPropagation(); // Evita que el click se propague al documento
}

// Función para quitar la clase active cuando se hace click fuera del menú
function removeActive(event) {
    if (!navigation.contains(event.target)) {
        list.forEach((item) => item.classList.remove('active'));
    }
}

// Añadir los event listeners
list.forEach((item) => item.addEventListener('click', activeLink));
document.addEventListener('click', removeActive);