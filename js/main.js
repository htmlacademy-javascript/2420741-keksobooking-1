import {getData} from './data-server.js';
import {resetPage} from './map.js';
import {setUserFormSubmit} from './validate-form.js';
import {getAvatarPreview, getPhotoPreview} from './photos.js';

getData();
setUserFormSubmit(resetPage);

getAvatarPreview();
getPhotoPreview();

