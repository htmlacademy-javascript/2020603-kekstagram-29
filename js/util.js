const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

// const isEscapeKey = (evt) => evt.key === 'Escape';

// const onDocumentKeydown = (evt, cb) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     cb();
//   }
// };


export { getRandomInteger, getRandomArrayElement, createIdGenerator };
