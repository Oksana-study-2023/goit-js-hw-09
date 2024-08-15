// Add imports above this line
//import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const createImagesElement = images => {
    return `
    <li class="gallery-item">
  <a class="gallery-link" href="${images.original}">
    <img
      class="gallery-image"
      src="${images.preview}"
      data-source="${images.original}"
      alt="${images.description}"
    />
  </a>
</li>
`
}

console.log(createImagesElement(images[0]));



/*console.log(galleryItems);

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

initCallery(galleryItems);*/
