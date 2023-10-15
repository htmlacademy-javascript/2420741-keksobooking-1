import {getCoordinates} from './util.js';
import {getRandom} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getNewFeauters} from './util.js';
import {myPadStart} from './util.js';


//const author = { // описывает автора
const AVATAR = 'img/avatars/user{{xx}}.png';
// const offer = { //
const TITTLE = ['Предложение дня', 'Эксклюзив', 'Последний день предложения', 'Акция'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEAUTERS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['эконом', 'люкс', 'среднее'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
// const locations = {


// создали объект
const objects = () => ({
  avatar: AVATAR.replace('{{xx}}',myPadStart(String(getRandom(1,10)), 2, '0')),
  tittle: getRandomArrayElement(TITTLE),
  address: [{lat: getCoordinates(35.65000, 35.70000, 5)}, {lng: getCoordinates(139.70000, 139.80000, 5)}],
  price: getRandom(10000,20000),
  type: getRandomArrayElement(TYPE),
  rooms: getRandom(1,20),
  guests: getRandom(1,10),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  feauters: getNewFeauters(FEAUTERS),
  description: getRandomArrayElement(DESCRIPTION),
  photos: getNewFeauters(PHOTOS),
  lat: getCoordinates(35.65000, 35.70000, 5),
  lng: getCoordinates(139.70000, 139.80000, 5)
});

//определились с количеством предложений
const QUANTITY_OBJECTS = 10;


// создали выбор предложений
const variableObjects = () => Array.from({length: QUANTITY_OBJECTS}, objects);

export {variableObjects};
