import {getCoordinates} from './util.js';
import {getRandom} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getNewFeauters} from './util.js';
import {myPadStart} from './util.js';


const AVATAR = 'img/avatars/user{{xx}}.png';
const TITTLE = ['Томи-ями и без спальни', 'Грильз-хаус', 'Таун-чайна', 'Чайхата с диваном', 'Коферумная лачина'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEAUTERS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Великолепная квартира-студия в центре Токио', 'Великолепная квартира-студия на окраине Тувы', 'Великолепная квартира в центре Байконура'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// создали объект
const OBJECT = () => ({
  author: {
    avatar: AVATAR.replace('{{xx}}',myPadStart(String(getRandom(1,10)), 2, '0'))
  },
  offer: {
    tittle: getRandomArrayElement(TITTLE),
    address: [getCoordinates(35.65000, 35.70000, 5), getCoordinates(139.70000, 139.80000, 5)],
    price: getRandom(10000,20000),
    type: getRandomArrayElement(TYPE),
    rooms: getRandom(1,20),
    guests: getRandom(1,10),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getNewFeauters(FEAUTERS),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getNewFeauters(PHOTOS)
  },
  locations:
    {
      lat: getCoordinates(35.65000, 35.70000, 5),
      lng: getCoordinates(139.70000, 139.80000, 5)
    }
});

//определились с количеством предложений
// const QUANTITY_OBJECTS = 1;


// создали выбор предложений
const variableOffers = (count) => Array.from({length: count}, OBJECT);

export {variableOffers};
// address: [getCoordinates(35.65000, 35.70000, 5), getCoordinates(139.70000, 139.80000, 5)],
