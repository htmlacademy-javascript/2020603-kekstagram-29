import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { renderThumbnails } from './thumbnail.js';
import { renderModalForm, hideModalForm, setUserFormSubmit } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
//import { renderGallery } from './gallery.js';

setUserFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModalForm();
    showSuccessMessage();
  } catch (err) {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const thumbnailsContainer = document.querySelector('.pictures');
  renderThumbnails(data, thumbnailsContainer);
} catch (err) {
  showAlert(err.message);
}

renderModalForm();
//renderGallery(getPosts());
