import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const Posts = {
  PHOTO_COUNT: 25,
  PHOTO_DESCRIPTIONS: [
    'Первый день отпуска',
    'Новые впечатления',
    'На чиле, на расслабоне',
    'Пусть весь мир подождёт...',
    'Обстановка по кайфу'
  ],
  LIKE_MIN_COUNT: 15,
  LIKE_MAX_COUNT: 200,
  COMMENTS_MIN_COUNT: 0,
  COMMENTS_MAX_COUNT: 30,
  COMMENTS_MESSAGES: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ],
  COMMENTS_NAMES: ['Степан', 'Влад', 'Игорь', 'Евгений', 'Тигран', 'Виктор', 'Денис', 'Павел'],
  AVATAR_MIN_INDEX: 1,
  AVATAR_MAX_INDEX: 6
};

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(Posts.COMMENTS_MESSAGES));

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(Posts.AVATAR_MIN_INDEX, Posts.AVATAR_MAX_INDEX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(Posts.COMMENTS_NAMES)
});

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(Posts.PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(Posts.LIKE_MIN_COUNT, Posts.LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(Posts.COMMENTS_MIN_COUNT, Posts.COMMENTS_MAX_COUNT) },
    createComment
  )
});

const getPosts = () => Array.from(
  {length: Posts.PHOTO_COUNT},
  (_, postIndex) => createPost(postIndex + 1)
);

export { getPosts };
