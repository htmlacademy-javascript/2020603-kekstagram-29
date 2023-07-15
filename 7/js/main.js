import { getPosts } from './data.js';
import { renderThumbnails } from './thumbnail.js';
//import { renderGallery } from './gallery.js';

const thumbnailsContainer = document.querySelector('.pictures');

renderThumbnails(getPosts(), thumbnailsContainer);
//renderGallery(getPosts());
