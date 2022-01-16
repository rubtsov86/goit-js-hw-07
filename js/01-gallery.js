import { galleryItems } from './gallery-items.js';
// Change code below this line

const divContainerRef = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}


const newGallery = galleryItems.map(item => createGalleryItem(item));
divContainerRef.insertAdjacentHTML('beforeend', newGallery);

divContainerRef.addEventListener('click', onClickImgCreateModal)



function onClickImgCreateModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }

    openModal(event.target.dataset.source);
}

function openModal(objectLargeImg) {

    const createdModal = basicLightbox.create(
        `<img width="1280" src="${objectLargeImg}">`, {
        closable: false
    });
    createdModal.show();
   
    
    if (document.querySelector('.basicLightbox')) {
    onClickEscapeCloseModal(createdModal);
    }
   
}



function onClickEscapeCloseModal(modal) {
    document.addEventListener("keydown", event => {
        if (event.code === 'Escape') {
            return modal.close();
        };
        return
    });
    
}  




// console.log(galleryItems);
