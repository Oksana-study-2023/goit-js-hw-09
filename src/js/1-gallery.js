// Add imports above this line
//import { galleryItems } from './gallery-items';
// Change code below this line
//import SimpleLightbox from "simplelightbox";
//import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryEl = document.querySelector(`.gallery`);

function createGalleryElement(items) {
    let galleryElements = items.map(item => {
        let itemEl = document.createElement(`li`);
        itemEl.classList.add(`gallery__item`);

        let linkEl = document.createElement(`a`);
        linkEl.classList.add(`gallery__link`);
        linkEl.href = item.original;
        itemEl.appendChild(linkEl);

        let imgEl = document.createElement(`img`);
        imgEl.classList.add(`gallery__image`);
        imgEl.src = item.preview;
        imgEl.alt = item.description;
        linkEl.appendChild(imgEl);

        return itemEl;

    });
    console.log(galleryElements);
    galleryEl.append(...galleryElements);

    return galleryEl; 
  
}

function onGalleryItemClick(event) {
    event.preventDefault();
    let clickedItemEl = event.target.closest(`.gallery__link`);
    if (!clickedItemEl) {
    return;
    }

    const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
}

function bindEvents(galleryEl) {
    galleryEl.addEventListener(`click`, onGalleryItemClick);
}

function initCallery(items) {
 
    let galleryEl = createGalleryElement(items);
    bindEvents(galleryEl);

}

initCallery(galleryItems);