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
    element[i].setAttribute('disabled', true);
  }
};

const onFormLoad = (evt) => {
  evt.preventDefault();
  getForm.classList.add('ad-form--disabled');
  noActive(fieldSets);
  dropAvatar.setAttribute('disabled', true);
};

const onFiltersLoad = (evt) => {
  evt.preventDefault();
  getMapFiltres.classList.add('map__filters--disabled');
  noActive(selectFilter);
  noActive(selectFeature);
};

// создали функцию для загрузки неактивного состояния страницы - доступны форма и фильтры
function closeForm () {
  document.addEventListener('DOMContentLoaded', onFormLoad);
}
// closeForm();

function closeFilters () {
  document.addEventListener('DOMContentLoaded', onFiltersLoad);
}
// closeFilters();


// создали функцию для загрузки активного состояния страницы - доступны форма и фильтры
function openForm () {
  document.removeEventListener('DOMContentLoaded', onFormLoad);
}

function openFilters () {
  document.removeEventListener('DOMContentLoaded', onFiltersLoad);
}

export{openForm, openFilters, closeForm, closeFilters};


