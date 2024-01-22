import {createMarker} from './map.js';

const QUANTITY_OBJECTS = 15;

fetch('https://28.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json()
  )
  .then((offers) => {
    const OFFERS_DATA = offers.slice(0, QUANTITY_OBJECTS);
    OFFERS_DATA.forEach((offer) => {
      createMarker(offer);
    });
  });

