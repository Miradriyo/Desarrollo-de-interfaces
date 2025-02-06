const array = {
    "España": "img/España",
    "Alemania": "img/Alemania",
    "Francia": "img/Francia",
    "Italia": "img/italia",
    "Portugal": "img/Portugal"
};

//Crear div contenedor principal
const contenedor = document.createElement("div");
contenedor.className = "contenedor";
document.body.appendChild(contenedor);

//crear div para titulo e imagenes
const tituloImagenes = document.createElement("div");
tituloImagenes.className = "tituloImagenes";
contenedor.appendChild(tituloImagenes);

//Crear div del título
const titulo = document.createElement("div");
titulo.className = "titulo";
tituloImagenes.appendChild(titulo);

//Crear h1
const h1 = document.createElement("h1");
h1.textContent = "¿Donde quieres viajar?";
titulo.appendChild(h1);

// Crear div de las imagenes
const imagenes = document.createElement("div");
imagenes.className = "imagenes";
tituloImagenes.appendChild(imagenes);

//crear img dentro del div imagenes
const img = document.createElement("img");
img.id = "imagenCambiante";
img.src = "img/initial.jpg";
img.alt = "imagen inicial";
imagenes.appendChild(img);

//crear div del form
const form = document.createElement("div");
form.className = "form";
contenedor.appendChild(form);

//crear form dentro del div form
const formulario = document.createElement("form");
form.appendChild(formulario);

//crear select dentro del form
const select = document.createElement("select"); 
select.name="choose_country";
select.id="choose_option";
select.required = true;
formulario.appendChild(select);
//crear option dentro del select
const option = document.createElement("option");
option.textContent = "Elige un país";
option.value = "";
option.selected = true;
option.disabled = true;
select.appendChild(option);
//hacer un bucle con los nombres de las opciones de país
const paises = [{value: 'ES', texto: 'España'}, 
                {value: 'DE', texto: 'Alemania'},
                {value: 'FR', texto: 'Francia'},
                {value: 'IT', texto: 'Italia'}, 
                {value: 'PT', texto: 'Portugal'}];
for (let i = 0; i < paises.length; i++) {
    const optionPaises = document.createElement("option");
    optionPaises.value = paises[i].value;
    optionPaises.textContent = paises[i].texto;
    select.appendChild(optionPaises);
}

//cambios de imagen

document.getElementById("choose_option").addEventListener("change", function() {
    let imagen = document.getElementById("imagenCambiante");
    if (this.value === "ES"){
        imagen.src= "img/España.jpg";
    }else if(this.value === "DE"){
        imagen.src="img/Alemania.jpg";
    }else if(this.value === "FR"){
        imagen.src="img/Francia.jpg";
    }else if(this.value === "IT"){
        imagen.src="img/Italia.jpg";
    }else if(this.value === "PT"){
        imagen.src="img/Portugal.jpg";
    }
});