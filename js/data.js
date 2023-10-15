import {getCoordinates} from './util.js';
import {getRandom} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getNewFeauters} from './util.js';
import {myPadStart} from './util.js';


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


//создали объект автор
const author = {
  avatar: avatar.replace('{{xx}}',myPadStart(String(getRandom(1,10)), 2, '0'))
};

// создали объект предложение
const offer = {
  tittle: getRandomArrayElement(tittle),
  address: [{lat: getCoordinates(35.65000, 35.70000, 5)}, {lng: getCoordinates(139.70000, 139.80000, 5)}],
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
  lat: getCoordinates(35.65000, 35.70000, 5),
  lng: getCoordinates(139.70000, 139.80000, 5)
};

// создали готовое предложение
const objects = () => Object.assign({}, author, offer, locations);


//определились с количеством предложений
const quantityObjects = 10;

// создали выбор предложений
// eslint-disable-next-line no-unused-vars
const variableObjects = Array.from({length: quantityObjects}, objects);

export {variableObjects};
