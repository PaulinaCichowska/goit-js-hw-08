import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
// let lightbox = new SimpleLightbox('.gallery__link');

galleryItems.forEach(e => {
  let galleryItem = `<div class="gallery__item">
    <a class="gallery__link" href="${e.original}">
      <img
        class="gallery__image"
        src="${e.preview}"
        data-source="${e.original}"
        alt="${e.description}"
      />
    </a>+
  </div>`;
  gallery.insertAdjacentHTML('beforeend', galleryItem);
});

// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   let target = e.target;
//   let bigImage = target.getAttribute('data-source');

//   if (bigImage != null) {

//   }
// });

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});
// console.log(lightbox);
