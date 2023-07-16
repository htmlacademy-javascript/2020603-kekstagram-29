const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const overlayElement = formElement.querySelector('.img-upload__overlay'); // модалка с выбором фильтра, полями хэштега и комментария и кнопки "Опубликовать". Изначально скрыт
const fileUploadElement = formElement.querySelector('#upload-file'); // поле выбора файла для отправки (.img-upload__input ). Изначально скрыт
const btnCloseElement = formElement.querySelector('#upload-cancel');


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
  if (evt.key === 'Escape') { // почему-то если в условие добавить isEscapeKey, то hideModalForm срабатывает по клику ЛЮБОЙ кнопки, а не только лишь Escape
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
