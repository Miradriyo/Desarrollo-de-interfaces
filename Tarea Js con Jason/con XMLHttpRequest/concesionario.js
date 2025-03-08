let peticion = new XMLHttpRequest();
peticion.onreadystatechange = continuar;
peticion.open("GET", "coches.json");
peticion.send();

function continuar(){
    if(peticion.readyState==4){
        if (peticion.status == 200){

            let coches = JSON.parse(peticion.responseText);
            coches.forEach(coche => {
                let nuevocoche = new Coche(coche.marca, coche.modelo, coche.kilometros, coche.año, coche.precio, coche.motor, coche.foto, coche.disponible);
                document.querySelector("#section1").appendChild(nuevocoche.verCoches());
            });
        }
    }
}