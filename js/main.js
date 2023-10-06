//const author = { // описывает автора
const avatar = 'img/avatars/user{{xx}}.png';
// const offer = { //
const tittle = ['Предложение дня', 'Эксклюзив', 'Последний день предложения', 'Акция'];
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const feauters = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = ['эконом', 'люкс', 'среднее'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
// const locations = {


// получим рандомное значение для координат
function getCoordinate(min, max, num) {
  const coordinate = Math.random() * (max - min) + min; // находим число в диапазоне
  return coordinate.toFixed(num); // выводим нужное число знаком после запятой
}


// получим рандомное значение
const getRandom = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower; // находим число в диапазоне
  return Math.floor(result);
};


// получим рандомное значение для каждого элемента
const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

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

// добавим символ для номера фотографии аватара
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};


//создали объект автор
const author = {
  avatar: avatar.replace('{{xx}}',myPadStart(String(getRandom(1,10)), 2, '0'))
};

// создали объект предложение
const offer = {
  tittle: getRandomArrayElement(tittle),
  address: [{lat: getCoordinate(35.65000, 35.70000, 5)}, {lng: getCoordinate(139.70000, 139.80000, 5)}],
  price: getRandom(10000,20000),
  type: getRandomArrayElement(type),
  rooms: getRandom(1,20),
  guests: getRandom(1,10),
  checkin: getRandomArrayElement(checkin),
  checkout: getRandomArrayElement(checkout),
  feauters: getNewFeauters(feauters),
  description: getRandomArrayElement(description),
  photos: getNewFeauters(photos),
};

// создали объект локации
const locations = {
  lat: getCoordinate(35.65000, 35.70000, 5),
  lng: getCoordinate(139.70000, 139.80000, 5)
};

// создали готовое предложение
const objects = () => Object.assign({}, author, offer, locations);

//определились с количеством предложений
const quantityObjects = 10;

// создали выбор предложений
// eslint-disable-next-line no-unused-vars
const variableObjects = Array.from({length: quantityObjects}, objects);

// console.log(variableObjects);


