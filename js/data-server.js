import {createMarker} from './map.js';
import {disableFilters} from './active.js';


const QUANTITY_OBJECTS = 15;

const BASE_URL = 'https://28.javascript.pages.academy/keksobooking';
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
    const OFFERS_DATA = offers.slice(0, QUANTITY_OBJECTS);
    OFFERS_DATA.forEach((offer) => {
      createMarker(offer);
    });
  })
  .catch (() => {
    disableFilters();
  });


export {getData};

