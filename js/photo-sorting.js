import { renderThumbnails } from './thumbnail.js';
import { debounce } from './util.js';

const RANDOM_PICTURES_COUNT = 10;

const sortingContainer = document.querySelector('.img-filters');
const sortingForm = sortingContainer.querySelector('.img-filters__form');
const defaultSorting = sortingForm.querySelector('#filter-default');
const randomSorting = sortingForm.querySelector('#filter-random');
const discussedSorting = sortingForm.querySelector('#filter-discussed');
const sortingButtons = sortingForm.querySelectorAll('.img-filters__button');

const sortRandomly = () => Math.random() - 0.5;
const sortByComments = (postOne, postTwo) => postTwo.comments.length - postOne.comments.length;

const sortThumbnails = (thumbnails, sortButton = defaultSorting) => {

  if (sortButton === randomSorting) {
    return [...thumbnails].sort(sortRandomly).slice(0, RANDOM_PICTURES_COUNT); // или thumbnails.toSorted(sortRandomly).slice(0, RANDOM_PICTURES_COUNT);
  } else if (sortButton === discussedSorting) {
    return [...thumbnails].sort(sortByComments); // или thumbnails.toSorted(sortByComments);
  }

  return [...thumbnails];
};

const removeThumbnails = () => document.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());

const onSortingFormClick = (evt, thumbnails) => {
  sortingButtons.forEach((button) => button.classList.remove('img-filters__button--active'));

  const sortingButton = evt.target;
  sortingButton.classList.add('img-filters__button--active');

  removeThumbnails();
  renderThumbnails(sortThumbnails(thumbnails, sortingButton));
};

const setDebouncedSorting = (thumbnails) => {
  sortingForm.addEventListener('click', debounce((evt) => {
    onSortingFormClick(evt, thumbnails);
  }));
};

const showSortingForm = () => sortingContainer.classList.remove('img-filters--inactive');

export { showSortingForm, setDebouncedSorting };
