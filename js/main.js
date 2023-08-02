import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { renderThumbnails } from './thumbnail.js';
import { renderModalForm, hideModalForm, setUserFormSubmit } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { showSortingSection, setDebouncedSorting } from './photo-sorting.js';

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
  showSortingSection();
  setDebouncedSorting(data);
} catch (err) {
  showAlert(err.message);
}

renderModalForm();
