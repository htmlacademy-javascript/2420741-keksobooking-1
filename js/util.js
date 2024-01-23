import {resetPage} from './map.js';
// получим рандомное значение для координат
function getCoordinates(min, max, num) {
  const coordinate = Math.random() * (max - min) + min; // находим число в диапазоне
  return coordinate.toFixed(num); // выводим нужное число знаком после запятой
}

export {getCoordinates};


// получим рандомное значение
const getRandom = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower; // находим число в диапазоне
  return Math.floor(result);
};

export{getRandom};


// получим рандомное значение для каждого элемента
const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

export{getRandomArrayElement};


// получим массив случайной длины
const getNewFeauters = (element) => {
  const newElement = [];
  const newElementLength = getRandom(1, element.length);
  for (let i = 1; i <= newElementLength; i++) {
    const options = element.shift();
    newElement.push(options);
  }
  return newElement;
};

export{getNewFeauters};


// добавим символ для номера фотографии аватара
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

export{myPadStart};

//--------------------создадим баннеры для (не)успешной отправки формы---------------------------------------

//создадим таймер
const ALERT_SHOW_TIME = 5000;

// создадим сопоставление с клавишей Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

//создадим окно сообщение об ошибке
const errMesage = document.querySelector('#error').content.querySelector('.error');
const succMesage = document.querySelector('#success').content.querySelector('.success');
const errWindow = errMesage.cloneNode(true);
const succWindow = succMesage.cloneNode(true);
const buttonError = errWindow.querySelector('.error__button');

const SHOW_ALERT = (message) => {
  errWindow.classList.remove('hidden');
  errWindow.querySelector('.error__message').textContent = message;
  document.body.append(errWindow);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errWindow.remove();
    }
  });
  setTimeout(() => {
    errWindow.remove();
  }, ALERT_SHOW_TIME);
};

const SHOW_SUCCESS = (message) => {
  succWindow.querySelector('.success__message').textContent = message;
  document.body.append(succWindow);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      succWindow.remove();
      resetPage();
    }
  });
  setTimeout(() => {
    succWindow.remove();
    resetPage();
  }, ALERT_SHOW_TIME);
};

errWindow.addEventListener('click', () => {
  errWindow.remove();
});

buttonError.onclick = () => {
  errWindow.remove();
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errWindow.remove();
  }
});

succWindow.addEventListener('click', () => {
  succWindow.remove();
  resetPage();
});


export{SHOW_ALERT, SHOW_SUCCESS};

// выведим форму в дефолтное стостояние
const resetForm = document.querySelector('.ad-form__reset');

resetForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage();
});
