// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox);


// Change code below this line

console.log(galleryItems);
const collection = document.querySelector('.gallery');
const listImg = galleryItems.map(({preview,original,description}) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>`).join('')

collection.insertAdjacentHTML('afterbegin', listImg);
    
var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250
 });
