//crear tabla
const tabla = document.createElement("table");
document.body.appendChild(tabla);
//crear fila
const row = document.createElement("tr");
tabla.appendChild(row);
//crear celdas y rellenarlas con imagenes
const array = ["img/google.png", "img/explorer.jpg", "img/firefox.png"];

for (let i = 0; i < 3; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
    const img = document.createElement("img");
    img.src = array[i];
    img.width = 175;
    img.height = 100;
    td.appendChild(img);
}
//crear file con enlaces
const row2 = document.createElement("tr");
tabla.appendChild(row2);

const url = ["https://www.google.com", "https://www.microsoft.com", "https://www.mozilla.org/es-ES/firefox/"];
for (let i = 0; i < url.length; i++) {
    const td = document.createElement("td");
    row2.appendChild(td);
    const a = document.createElement("a");  
    a.href = url[i];    
    a.target = "_blank";
    a.textContent = url[i];
    td.appendChild(a);
}