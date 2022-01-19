import { galleryItems } from './gallery-items.js';
// Change code below this line

const divContainerRef = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
}

const newGallery = galleryItems.map(item => createGalleryItem(item)).join('');
divContainerRef.insertAdjacentHTML('beforeend', newGallery);


const lightbox = new SimpleLightbox('.gallery a');
lightbox.options.captionsData = 'alt';
lightbox.options.captionDelay = 250;




// console.log(galleryItems);
