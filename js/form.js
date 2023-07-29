import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { addEventsEffects, removeEventsEffects } from './effects.js';

const HASHTAGS_COUNT_MAX = 5;
const SYMBOLS_VALID = /^#[a-za-яё0-9]{1,19}$/i;
const ErrorMessages = {
  INVALID_COUNT: `Максимум ${HASHTAGS_COUNT_MAX} хэштегов`,
  INVALID_PATTERN: 'Неверно составлен хэштег(и)',
  NOT_UNIQUE: 'Хэштеги должны быть уникальными'
};
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Отправляю...'
};

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const overlayElement = formElement.querySelector('.img-upload__overlay'); // модалка с выбором фильтра, полями хэштега и комментария и кнопки "Опубликовать". Изначально скрыт
const fileUploadElement = formElement.querySelector('#upload-file'); // поле выбора файла для отправки (.img-upload__input ). Изначально скрыт
const buttonCloseElement = formElement.querySelector('#upload-cancel');
const hashtagsFieldElement = formElement.querySelector('.text__hashtags');
const commentFieldElement = formElement.querySelector('.text__description');
const submitButtonElement = formElement.querySelector('.img-upload__submit'); // кнопка "Опубликовать" в модалке

const isTextFieldFocused = () => document.activeElement === hashtagsFieldElement || document.activeElement === commentFieldElement; // есть ли фокус на текстовом поле

// функции валидации BEGIN
const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const normalizeTags = (tagsString) => tagsString.trim().split(' ').filter((item) => Boolean(item.length));
const hasValidCount = (tags) => normalizeTags(tags).length <= HASHTAGS_COUNT_MAX;
const hasValidTags = (tags) => normalizeTags(tags).every((tag) => SYMBOLS_VALID.test(tag));
const hasUniqueTags = (tags) => {
  const lowerCaseTags = normalizeTags(tags).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

pristine.addValidator(hashtagsFieldElement, hasValidCount, ErrorMessages.INVALID_COUNT, 3, true);
pristine.addValidator(hashtagsFieldElement, hasValidTags, ErrorMessages.INVALID_PATTERN, 2, true);
pristine.addValidator(hashtagsFieldElement, hasUniqueTags, ErrorMessages.NOT_UNIQUE, 1, true);

const onFormSubmit = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};
// функции валидации END
const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (callback) => {
  formElement.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await callback(new FormData(formElement));
      unblockSubmitButton();
    }
  });
};

const showModal = () => {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  addEventsEffects();
};

const hideModalForm = () => {
  formElement.reset();
  resetScale();
  removeEventsEffects();
  pristine.reset();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  buttonCloseElement.removeEventListener('click', hideModalForm);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onClickCloseButton = () => hideModalForm();

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModalForm();
  }
}

const onfileUploadChange = () => {
  showModal();
  buttonCloseElement.addEventListener('click', onClickCloseButton);
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderModalForm = () => fileUploadElement.addEventListener('change', onfileUploadChange);

formElement.addEventListener('submit', onFormSubmit);

export { renderModalForm, hideModalForm, setUserFormSubmit };
