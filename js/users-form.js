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

// сопоставим минимальную цену в зависсимости от типа жилья
const maxCost = {
  bungalow : '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};

// добавим соответствии минимальной цены от типа жилья
function validatePriceCost (value) {
  const typeUnit = getForm.querySelector('[name="type"]');
  return value.length && parseInt(value, 10) >= maxCost[typeUnit.value];
}

// добавим сообщение о несоответствии минимальной цены от типа жилья
function getPriceErrorMessage () {
  const typeUnit = getForm.querySelector('[name="type"]');
  return `минимальная цена за ночь ${maxCost[typeUnit.value]}`;
}

// валидируем
pristine.addValidator(priceCost, validatePriceCost, getPriceErrorMessage);


//выставляем минимальную цену как подсказку
function onPriceCostChange () {
  priceCost.placeholder = maxCost[this.value];
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
  //console.log('Можно отправлять');
  } else {
  //console.log('Форма невалидна');
  }
});
