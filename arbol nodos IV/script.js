//crear los nodos del DOM y añadir las img
const galleryContainer = document.createElement("div");
galleryContainer.className = "GalleryContainer";
document.body.appendChild(galleryContainer);

const bigImageContainer = document.createElement("div");
bigImageContainer.className = "BigImageContainer";
galleryContainer.appendChild(bigImageContainer);

const bigImage = document.createElement("img");
bigImage.src = "img/1.jpg";
bigImageContainer.appendChild(bigImage);

const smallImageContainer = document.createElement("div");
smallImageContainer.className = "SmallImage";
galleryContainer.appendChild(smallImageContainer);

const imgArray = ["img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];

for (let i = 0; i < imgArray.length; i++) {
    const img = document.createElement("img");
    img.src = imgArray[i];
    
img.addEventListener("click", function(){
    const change = bigImage.src;
    bigImage.src = this.src;
    this.src = change;
});

smallImageContainer.appendChild(img); 
}