class Coche{

    constructor(marca, modelo, kilometros, año, precio, motor, foto, disponible){
        this.marca = marca;
        this.modelo = modelo;
        this.kilometros = kilometros;
        this.año = año;
        this.precio = precio;
        this.motor = motor;
        this.foto = foto;
        this.disponible = disponible;
    }

    //método para mostrar el coche en la página
    verCoches=function(){
        //contenedor principal
        let contenedor = document.createElement("div");
        //sección foto
        let seccionFoto =document.createElement("section");
        let foto =document.createElement("img");
        foto.src = this.foto;
        seccionFoto.appendChild(foto);
        //seccion datos
        let seccionDatos = document.createElement("section");
        let marca = document.createElement("p");
        marca.innerText = "Marca: "+this.marca;
        let modelo = document.createElement("p");
        modelo.innerText = "Modelo: "+this.modelo;
        let kilometros = document.createElement("p");
        kilometros.innerText = "Kilometros: "+this.kilometros;
        let año = document.createElement("p");
        año.innerText = "Año: "+this.año;
        let precio = document.createElement("p");
        precio.innerText = "Precio: "+this.precio;
        let motor = document.createElement("p");
        motor.innerText = "Motor: "+this.motor;
        let disponible = document.createElement("p");
        disponible.innerText = "Disponible: "+this.disponible;
        
        if(this.disponible === "no") {
            disponible.classList.add("no-disponible");
        } else {
            disponible.classList.add("disponible");
        }

        seccionDatos.appendChild(marca);
        seccionDatos.appendChild(modelo);
        seccionDatos.appendChild(kilometros);
        seccionDatos.appendChild(año);
        seccionDatos.appendChild(precio);
        seccionDatos.appendChild(motor);
        seccionDatos.appendChild(disponible);

        contenedor.appendChild(seccionFoto);
        contenedor.appendChild(seccionDatos);
        
        return contenedor;
    }
}