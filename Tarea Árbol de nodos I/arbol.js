/*  PARA EVITAR QUE SIGA ADELANTE SIN SELECCINAR UN PLATO EN PRIMER PLATO
<script>
  const selectElement = document.getElementById('primer_plato');
  selectElement.addEventListener('change', () => {
    if (selectElement.value === "") {
      alert("Por favor, selecciona una opción válida.");
      selectElement.focus();
    }
  });
</script>
*/


/*Cambios de imagen*/

document.getElementById("primer_plato").addEventListener("change",function() {
  let imagen = document.getElementById("foto1");
  if (this.value === "3"){
    imagen.src= "lentejas.jpg";
  }else{if(this.value === "2"){
    imagen.src="crema_calabaza.jpg"
  }
  }
}); 

document.getElementById("segundo_plato").addEventListener("change", function () {
  let imagen2 = document.getElementById("foto2");
  if (this.value ==="4"){
    imagen2.src="escalope.jpg";
  }else{if(this.value === "5"){
    imagen2.src="lubina.jpg";  
}}});

document.getElementById("postre").addEventListener("change", function () {
  let imagen3 = document.getElementById("foto_postre");
  if (this.value === "1") {
    imagen3.src="flan.jpg"    
  } else {if (this.value ==="2") {
    imagen3.src="arroz.jpg"
  }
    
  }
  
});

document.getElementById("boton").addEventListener("click", function(){
  let primerplato =Number (document.getElementById("primer_plato").value);
  let segundoplato =Number (document.getElementById("segundo_plato").value);
  let postre =Number (document.getElementById("postre").value);

  let total= primerplato+segundoplato+postre
  if (document.getElementById("descuento").checked) {
    total_descontado=total*0.9
    total = window.alert ("el precio total es: " + total+ "€"+ "-0.10% descuento= "+ total_descontado + "€")
  } else {
    window.alert( "el precio total es: " + total + "€");
    
  }
});

