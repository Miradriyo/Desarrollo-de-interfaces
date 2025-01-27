/*Diseñar un array, con 5 imágenes. Se pregunta al usuario, cual desea imprimir, una vez que
se teclea el nombre de la imagen, aparece en el documento.*/
const imagenes = ["imagen1.jpg","imagen2.jpg","imagen3.jpg","imagen4.jpg","imagen5.jpg"];

// Pedir al usuario el nombre de la imagen que desea imprimir
function pedirImagen() {
  const imagen = prompt("Introduce el nombre de la imagen que deseas imprimir: teclea el número (1-5)");
  if(imagen >= 1 && imagen <= 5){
    const imagenSeleccionada=imagenes[imagen-1]; //los array empiezan en 0
    const img = document.createElement('img');
    img.src = "images/" + imagenSeleccionada; 
    document.body.appendChild(img);
  } else {
    alert("Número de imagen inválido. Por favor, ingrese un número entre 1 y 5.");
  }
}
pedirImagen();










