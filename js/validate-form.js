import {SHOW_ALERT, SHOW_SUCCESS} from './util.js';

// находим форму заполнения
const getForm = document.querySelector('.ad-form');


const pristine = new Pristine(getForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
});

//проверяем условие кол-ва введенныхх символов заголовка объявления
function validateTitleName (value) {
  return value.length >= 30 && value.length <= 100;
}

// валидируем
pristine.addValidator(
  getForm.querySelector('#title'),
  validateTitleName,
  'От 30 до 100 символов');


//находим Цены за ночь
const priceCost = getForm.querySelector('#price');
const typeUnit = getForm.querySelector('[name="type"]');

// сопоставим минимальную цену в зависсимости от типа жилья
const minCost = {
  bungalow : '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};


// добавим соответствии минимальной цены от типа жилья
function validatePriceCost (value) {

  return value.length && parseInt(value, 10) >= minCost[typeUnit.value];
}

// добавим сообщение о несоответствии минимальной цены от типа жилья
function getPriceErrorMessage () {
  return `минимальная цена за ночь ${minCost[typeUnit.value]}`;
}

// валидируем
pristine.addValidator(priceCost, validatePriceCost, getPriceErrorMessage);


//выставляем минимальную цену как подсказку
function onPriceCostChange () {
  priceCost.value = minCost[typeUnit.value];
  // priceCost.placeholder = minCost[typeUnit.value];
  pristine.validate(priceCost);
}


// добавляем событие на отображение мин.цены в зависимости от выбранного типа жилья
getForm
  .querySelectorAll('[name="type"]')
  .forEach((item) => item.addEventListener('change', onPriceCostChange));

const timeIn = getForm.querySelector('[name="timein"]');
const timeOut = getForm.querySelector('[name="timeout"]');


//создадим события для выбора времени
timeIn.onchange = function () {
  if (timeIn.value) {
    timeOut.value = timeIn.value;
  }
};
timeOut.onchange = function () {
  if (timeOut.value) {
    timeIn.value = timeOut.value;
  }
};

//создадим события для выбора комнат
const numberRoom = document.querySelector('#room_number');
const capacityRoom = document.querySelector('#capacity');
const roomOption = {
  '1': '1',
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': '0'
};

function validateRoom () {
  return roomOption[numberRoom.value].includes(capacityRoom.value);
}

function capacityRoomErrorMessage () {
  if (numberRoom.value === '1') {
    return 'не более 1 гостя';
  } else if (numberRoom.value === '2') {
    return 'укажите от 1 до 2 гостей';
  } else if (numberRoom.value === '3') {
    return 'укажите от 1 до 3 гостей';
  } else if (numberRoom.value === '100') {
    return 'не для гостей';
  }
}

pristine.addValidator(capacityRoom, validateRoom, capacityRoomErrorMessage);

getForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const offerData = new FormData(evt.target);
    fetch('https://28.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: offerData,
      })
      .then(() => {
        SHOW_SUCCESS('Объявление успешно опубликовано!');
      })
      .catch(() => {
        SHOW_ALERT('Ошибка с сервером, попробуйте отправить форму снова');
      });
  }
});

// создаем слайдер

const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: minCost[typeUnit.value],
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  priceCost.value = Math.ceil(sliderElement.noUiSlider.get());
});

priceCost.addEventListener('change', () => {
  sliderElement.noUiSlider.set(priceCost.value);
});

typeUnit.onchange = function () {
  priceCost.value = minCost[this.value];
  sliderElement.noUiSlider.set(priceCost.value);
};


export {onPriceCostChange, sliderElement, priceCost};


