import { renderThumbnails } from './thumbnail.js';
// import { showBigPicture } from './big-picture.js';

const thumbnailsContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  /*thumbnailsContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });*/

  renderThumbnails(pictures, thumbnailsContainer);
};

export { renderGallery };
