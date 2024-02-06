import {getData} from './data-server.js';
import {resetPage} from './map.js';
import {setUserFormSubmit} from './validate-form.js';

getData();
setUserFormSubmit(resetPage);

