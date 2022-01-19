import { galleryItems } from './gallery-items.js';
// Change code below this line

const divContainerRef = document.querySelector('.gallery');
let createdModal;

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


const newGallery = galleryItems.map(item => createGalleryItem(item)).join('');


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
    createdModal = basicLightbox.create(
        `<img width="1280" src="${objectLargeImg}">`,
        {
            onShow: () =>
                { document.addEventListener("keydown", eventKeydown) },
            
            onClose: () =>
                { document.removeEventListener("keydown", eventKeydown) },
    });
    
    createdModal.show();

    
}



function eventKeydown() {

    console.log(event.code);
        
        if (event.code === 'Escape') {
            return createdModal.close();
        };
        return
    } 





// console.log(galleryItems);
