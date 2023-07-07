import { getRandomInteger, getRandomArrayElement } from './util.js';

const PHOTO_COUNT = 25;
const PHOTO_DESCRIPTIONS = [
  'Первый день отпуска',
  'Новые впечатления',
  'На чиле, на расслабоне',
  'Пусть весь мир подождёт...',
  'Обстановка по кайфу'
];
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENTS_MIN_COUNT = 0;
const COMMENTS_MAX_COUNT = 30;
const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENTS_NAMES = ['Степан', 'Влад', 'Игорь', 'Евгений', 'Тигран', 'Виктор', 'Денис', 'Павел'];
const AVATAR_MIN_INDEX = 1;
const AVATAR_MAX_INDEX = 6;

const generateComments = () => {
  const result = [];
  for (let i = 0; i < getRandomInteger(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT); i++) {
    result.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_INDEX, AVATAR_MAX_INDEX)}.svg`,
      message: getRandomArrayElement(COMMENTS_MESSAGES),
      name: getRandomArrayElement(COMMENTS_NAMES)
    });
  }
  return result;
};

const createPhotos = (amount) => {
  const result = [];
  for (let i = 0; i < amount; i++) {
    result.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
      likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
      comments: generateComments()
    });
  }
  return result;
};

const photos = createPhotos(PHOTO_COUNT);

export { photos };
