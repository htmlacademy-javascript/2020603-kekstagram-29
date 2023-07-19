import { getPosts } from './data.js';
import { renderThumbnails } from './thumbnail.js';
import { renderModalForm } from './form.js';
//import { renderGallery } from './gallery.js';

const thumbnailsContainer = document.querySelector('.pictures');

renderThumbnails(getPosts(), thumbnailsContainer);

renderModalForm();
//renderGallery(getPosts());
