import { isEscapeKey } from './util.js';

const messageSuccess = document.querySelector('#success').content;
const messageError = document.querySelector('#error').content;
const bodyElement = document.body;

const removeElement = (evt) => {
  const sectionElement = document.querySelector('section.success, section.error');
  if (!sectionElement) {
    return;
  }
  if (evt.target.nodeName === 'SECTION' || evt.target.nodeName === 'BUTTON' || isEscapeKey(evt)) {
    sectionElement.remove();
    document.removeEventListener('click', removeElement);
    document.removeEventListener('keydown', removeElement);
  }
};

const showSuccessMessage = () => {
  bodyElement.append(messageSuccess.cloneNode(true));
  document.addEventListener('click', removeElement);
  document.addEventListener('keydown', removeElement);
};

const showErrorMessage = () => {
  bodyElement.append(messageError.cloneNode(true));
  document.addEventListener('click', removeElement);
  document.addEventListener('keydown', removeElement);
};

export { showSuccessMessage, showErrorMessage };
