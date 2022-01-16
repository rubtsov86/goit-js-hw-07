import { galleryItems } from './gallery-items.js';
// Change code below this line

const divContainerRef = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}

const newGallery = galleryItems.map(item => createGalleryItem(item));
divContainerRef.insertAdjacentHTML('beforeend', newGallery);


var lightbox = new SimpleLightbox('.gallery a');
lightbox.options.captionsData = 'alt';
lightbox.options.captionDelay = 250;




// console.log(galleryItems);
