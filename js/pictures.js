import { photos } from './data.js'; // импортируем массив из 25 объектов

const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Шаблон изображения пользователя
const picturesContainer = document.querySelector('.pictures'); // Контейнер для изображений пользователей

const photosFragment = document.createDocumentFragment();

photos.forEach(({id, url, description, likes, comments}) => {
  const userPicture = userPictureTemplate.cloneNode(true); // глубокая копия шаблона изображения

  userPicture.querySelector('.picture__img').id = id;
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__img').alt = description;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.querySelector('.picture__likes').textContent = likes;

  photosFragment.append(userPicture);
});

picturesContainer.append(photosFragment);
