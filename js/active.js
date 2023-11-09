import {renderOfferCards, clearOfferCards} from './popup.js';

// находим форму заполнения
const getForm = document.querySelector('.ad-form');
// находим содержимое формы
const fieldSets = getForm.querySelectorAll('.ad-form__element');
const dropAvatar = getForm.querySelector('#avatar');

// находим фильтр заполнения
const getMapFiltres = document.querySelector('.map__filters');
// находим содержимое филтра
const selectFilter = getMapFiltres.querySelectorAll('.map__filter');
const selectFeature = document.querySelector('#housing-features').querySelectorAll('input');


const noActive = (element) => {
  for (let i = 0; i < element.length; i++) {
    element[i].setAttribute('disabled', '');
  }
};

//создали неактивное состояние событие
const onContentLoad = (evt) => {
  evt.preventDefault();
  getForm.classList.add('ad-form--disabled');
  getMapFiltres.classList.add('map__filters--disabled');
  noActive(selectFilter);
  noActive(selectFeature);
  noActive(fieldSets);
  dropAvatar.setAttribute('disabled', '');
};

// создали функцию для загрузки неактивного состояние страницы - недоступны форма и фильтры
function closeForm () {
  clearOfferCards();
  document.addEventListener('DOMContentLoaded', onContentLoad);
}
closeForm();

// создали функцию для загрузки активного состояния страницы - доступны форма и фильтры
// eslint-disable-next-line no-unused-vars
function openForm () {
  renderOfferCards();
  document.removeEventListener('DOMContentLoaded', onContentLoad);
}
//openForm();

