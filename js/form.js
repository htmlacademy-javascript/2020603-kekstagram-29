import { isEscapeKey } from './util.js';

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const overlayElement = formElement.querySelector('.img-upload__overlay'); // модалка с выбором фильтра, полями хэштега и комментария и кнопки "Опубликовать". Изначально скрыт
const fileUploadElement = formElement.querySelector('#upload-file'); // поле выбора файла для отправки (.img-upload__input ). Изначально скрыт
const btnCloseElement = formElement.querySelector('#upload-cancel');
const hashtagsFieldElement = formElement.querySelector('.text__hashtags');
const commentFieldElement = formElement.querySelector('.text__description');

const isTextFieldFocused = () => document.activeElement === hashtagsFieldElement || document.activeElement === commentFieldElement; // есть ли фокус на текстовом поле

const showModal = () => {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
};

const hideModalForm = () => {
  formElement.reset();
  //pristine.reset();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  btnCloseElement.removeEventListener('click', hideModalForm);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onClickCloseBtn = () => {
  hideModalForm();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModalForm();
  }
}

const onfileUploadChange = () => {
  showModal();
  btnCloseElement.addEventListener('click', onClickCloseBtn);
  document.addEventListener('keydown', onDocumentKeydown);
};

// fileUploadElement.addEventListener('change', onfileUploadChange);

const renderModalForm = () => {
  fileUploadElement.addEventListener('change', onfileUploadChange);
  //addValidatorPristine();
};

export { renderModalForm };
