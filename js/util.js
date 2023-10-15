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
