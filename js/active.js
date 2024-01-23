// находим форму заполнения
const getForm = document.querySelector('.ad-form');
// находим содержимое формы
const fieldSets = getForm.querySelectorAll('.ad-form__element');
const dropAvatar = getForm.querySelector('#avatar');
// находим фильтр заполнения
const mapFilters = document.querySelector('.map__filters');


const disableForm = () => {
  getForm.classList.add('ad-form--disabled');
  for (const elem of fieldSets) {
    elem.setAttribute('disabled', 'disabled');
  }
  dropAvatar.setAttribute('disabled', true);
};

disableForm();

const disableFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  for (const elem of mapFilters) {
    elem.setAttribute('disabled', 'disabled');
  }
};

const activeForm = () => {
  getForm.classList.remove('ad-form--disabled');
  for (const elem of fieldSets) {
    elem.removeAttribute('disabled', 'disabled');
  }
  dropAvatar.removeAttribute('disabled', true);
};


const activeFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  for (const elem of mapFilters) {
    elem.removeAttribute('disabled', 'disabled');
  }

};


export{getForm, disableFilters, activeForm, activeFilters};


