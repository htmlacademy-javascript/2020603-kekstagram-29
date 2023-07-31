import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { renderThumbnails } from './thumbnail.js';
import { renderModalForm, hideModalForm, setUserFormSubmit } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { showSortingForm, setDebouncedSorting } from './photo-sorting.js';
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
  renderThumbnails(data);
  showSortingForm();
  setDebouncedSorting(data);
} catch (err) {
  showAlert(err.message);
}

renderModalForm();
//renderGallery(getPosts());
