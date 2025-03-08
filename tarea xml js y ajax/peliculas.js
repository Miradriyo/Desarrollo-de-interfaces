//Crear estructura HTML
    // Crear section principal
    let contenedor = document.createElement("section");
    contenedor.className = "contenedor";

    // Crear div para carteles
    let carteleria = document.createElement("div");
    carteleria.id = "cartel";
    carteleria.className = "carteleria";

    // Crear div para información de películas
    let peliculas = document.createElement("div");
    peliculas.className = "peliculas";

    // Crear elementos dentro de div.peliculas
    let h2 = document.createElement("h2");
    h2.id = "titulo";

    let iframe = document.createElement("iframe");
    iframe.id = "video";
    iframe.setAttribute("title", "YouTube video player");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "");

    // Crear párrafos
    let elementosP = ["director", "duracion", "nacionalidad", "actores", "genero", "sinopsis"];
    let parrafos = {};

    elementosP.forEach(elem => {
        parrafos[elem] = document.createElement("p");
        parrafos[elem].id = elem;
    });

    // Ensamblar la estructura
    peliculas.appendChild(h2);
    peliculas.appendChild(iframe);
    Object.values(parrafos).forEach(p => peliculas.appendChild(p));

    contenedor.appendChild(carteleria);
    contenedor.appendChild(peliculas);

    // Añadir al body
    document.body.appendChild(contenedor);

//Crear petición asincrónica, para poder abrir el archivo XML y coger los datos
let peticion= new XMLHttpRequest();
peticion.onreadystatechange=continuar;
peticion.open("GET","peliculas.xml");
//enviar petición
peticion.send();

function continuar(){
    //Comprobar si la petición se envia al servidor
    if(peticion.readyState==4){
        if(peticion.status==200){

            let peliculas=peticion.responseXML;
            let pelicula=peliculas.querySelectorAll("pelicula");

            for(let i=0;i<pelicula.length;i++){
                let cartel=document.createElement("div");
                cartel.className="cartel";
                
                let imagen=document.createElement("img");
                imagen.src = pelicula[i].querySelector("cartel").getAttribute("ruta");

                let titulo=document.createElement("h3");
                titulo.innerText=pelicula[i].querySelector("titulo").textContent;

                cartel.appendChild(imagen);
                cartel.appendChild(titulo);
                document.querySelector("#cartel").appendChild(cartel);

                cartel.addEventListener("click", function(){
                    document.querySelector("#titulo").innerHTML=pelicula[i].querySelector("titulo").textContent;
                    document.querySelector("#director").innerHTML= "Director:" + pelicula[i].querySelector("director").textContent;
                    document.querySelector("#duracion").innerHTML= "Duracion:" + pelicula[i].querySelector("duracion").textContent;
                    document.querySelector("#nacionalidad").innerHTML= "Nacionalidad:" + pelicula[i].querySelector("nacionalidad").textContent;
                    
                    //hay varios actores
                    let actoresLista = pelicula[i].querySelectorAll("actor");
                    let actoresTexto = "Actores: ";
                    actoresLista.forEach(actor => {
                        actoresTexto += actor.textContent + ", ";
                    });
                    document.querySelector("#actores").innerHTML = actoresTexto.slice(0, -2);
                    
                    document.querySelector("#genero").innerHTML = "Género: " + pelicula[i].querySelector("genero").textContent;
                    document.querySelector("#sinopsis").innerHTML = "Sinopsis: " + pelicula[i].querySelector("sinopsis").textContent;
                    
                    // Corregir la URL del video
                    let videoUrl = pelicula[i].querySelector("video").textContent;
                    let videoId = videoUrl.split("?v=")[1];
                                    document.querySelector("#video").src = "https://www.youtube.com/embed/" + videoId;
                                });
                        }
                    }
                }
}