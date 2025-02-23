//Crear div contenedor principal
const contenedor = document.createElement("div");
contenedor.className = "contenedor";
document.body.appendChild(contenedor);

//crear header
const header = document.createElement("header"); 
header.className = "header";
contenedor.appendChild(header);

//logo
const logo = document.createElement("img");
logo.src = "img/logo-azul-marino-viajes.jpg";
logo.className = "logo";
logo.alt = "logo";
header.appendChild(logo);

//nav
const nav = document.createElement("nav");
nav.className = "nav";
header.appendChild(nav);

const arraynav= ["Inicio", "Nosotros","Servicios","Contacto"];
const arraynav2=["index.html","nosotros.html","servicios.html","contacto.html"];

const ul = document.createElement("ul");
nav.appendChild(ul);

for (let i = 0; i < arraynav.length; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    const a = document.createElement("a");
    a.href = arraynav2[i]; 
    a.textContent = arraynav[i];
    li.appendChild(a);
}

//main

const main = document.createElement("main");
main.className = "main";
contenedor.appendChild(main);

//section x3
const sections=[];
for (let i = 0; i < 3; i++) {
    const section = document.createElement("section");
    section.className = "section"+(i+1);
    main.appendChild(section);
    sections.push(section);
}

//section1, crear los div, img y texto.

const section1 = sections[0]; //Accedemos a la primera seccion

for (let i = 0; i<2; i++) {
    const div = document.createElement("div");
    div.className = "div"+(i+1);
    section1.appendChild(div);    
}

const div1 = section1.querySelector(".div1");  //accedemos al primer div de la primera seccion

const img= document.createElement("img");
img.src= "img/articulos-808572.jpg";
img.alt= "puerta de Bradeburgo en Berlin";
div1.appendChild(img);

const div2=section1.querySelector(".div2"); //accedemos al segundo div de la primera seccion

const h2= document.createElement("h2");
h2.textContent= "Este es el titular del div de texto";
div2.appendChild(h2);

const p= document.createElement("p");
p.textContent= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci non nisl ultrices tincidunt. Aliquam erat volutpat. Nullam vel orci non nisl ultrices tincidunt. Aliquam erat volutpat.";
div2.appendChild(p);

const boton= document.createElement("button");
boton.textContent= "Leer más";
div2.appendChild(boton);

const a= document.createElement("a");
a.href= "#";
div2.appendChild(a);

//Section2, crear h2 e img

const section2 = sections[1]; //Accedemos a la segunda seccion

const h2section2=document.createElement("h2");
h2section2.textContent="Este es el titular de la sección 2";
section2.appendChild(h2section2);

const imgsection2= document.createElement("img");
imgsection2.src="img/foto6 (2).jpg";
imgsection2.alt="foto";
section2.appendChild(imgsection2);

//Section3, crear 3divs

const section3 = sections[2]; //Accedemos a la tercera seccion
const divClases=["div1","div2","div3"];
const imagenes=["img/barca.jpg","img/kayak.jpeg","img/avion.jpg"];
const altimagenes=["Barca","Kayak","Avion"];

for (let i = 0; i<divClases.length; i++) {
    const div = document.createElement("div");
    div.className = divClases[i];
    section3.appendChild(div);
    
    const img= document.createElement("img");
    img.src= imagenes[i];
    img.alt= altimagenes[i];
    div.appendChild(img);

    const h2= document.createElement("h2");
    h2.textContent= "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    div.appendChild(h2);

    const boton= document.createElement("button");
    boton.textContent= "Comprar";   
    div.appendChild(boton);

    const a= document.createElement("a");
    a.href= "#";
    div.appendChild(a);

}

