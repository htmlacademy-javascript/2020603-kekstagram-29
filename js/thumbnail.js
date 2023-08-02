import { showBigPicture } from './big-picture.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Шаблон изображения пользователя
const thumbnailsContainer = document.querySelector('.pictures'); // Контейнер для изображений пользователей

const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true); // глубокая копия шаблона изображения

  //thumbnail.dataset.thumbnailId = id;
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const removeThumbnails = () => document.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());

const renderThumbnails = (thumbnails) => {
  const fragment = document.createDocumentFragment();
  removeThumbnails();

  thumbnails.forEach((picture) => {
    const thumbnail = createThumbnail(picture);

    thumbnail.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(picture);
    });

    fragment.append(thumbnail);
  });

  thumbnailsContainer.append(fragment);
};

export { renderThumbnails };
