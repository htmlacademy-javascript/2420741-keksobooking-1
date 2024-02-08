import {createMarker} from './map.js';
import {disableFilters} from './active.js';
import {debounce} from './util.js';
import {checkAllFilters, changeFilters} from './filters.js';


const QUANTITY_OBJECTS = 10;
// Задержка отображения маркеров на карте
const TIMEOUT = 500;

const BASE_URL = 'https://28.javascript.htmlacademy.pro/keksobooking';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

// загрузим данные с сервера
const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (!response.ok) {
      disableFilters();
    }
    return response.json();
  })
  .then((offers) => {
    const OFFERS_DATA = offers.slice().slice(0, QUANTITY_OBJECTS);
    OFFERS_DATA.forEach((offer) => {
      createMarker(offer);
      changeFilters(debounce(() => checkAllFilters(offers), TIMEOUT));
    });
  })
  .catch (() => {
    disableFilters();
  });


export {getData};
