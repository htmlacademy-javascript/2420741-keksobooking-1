import {createMarker, clearMarker} from './map.js';

const Default = {
  SIMILAR_AD_COUNT: 10,
  ANY_QUANTITY: 'any'
};

const priceFilter = {
  low: {
    start: 0,
    end: 10000,
  },
  middle: {
    start: 10000,
    end: 50000,
  },
  high: {
    start: 50000,
    end: 1000000,
  },
};


const mapFilters = document.querySelector('.map__filters');
const housingTypeInput = mapFilters.querySelector('#housing-type');
const housingPriceInput = mapFilters.querySelector('#housing-price');
const housingRoomsInput = mapFilters.querySelector('#housing-rooms');
const housingGuestsInput = mapFilters.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');
const featuresListInput = housingFeatures.querySelectorAll('.map__checkbox');


const checkType = (ad) => housingTypeInput.value === ad.offer.type || housingTypeInput.value === Default.ANY_QUANTITY;

const checkPrice = (ad) => housingPriceInput.value === Default.ANY_QUANTITY || (ad.offer.price >= priceFilter[housingPriceInput.value].start && ad.offer.price <= priceFilter[housingPriceInput.value].end);

const checkRooms = (ad) => ad.offer.rooms === +housingRoomsInput.value || housingRoomsInput.value === Default.ANY_QUANTITY;

const checkGuests = (ad) => ad.offer.guests === +housingGuestsInput.value || housingGuestsInput.value === Default.ANY_QUANTITY;

const checkFeatures = (ad) => Array.from(featuresListInput)
  .every((featuresFilter) => {
    if (!featuresFilter.checked) {
      return true;
    }
    if (!ad.offer.features) {
      return false;
    }
    return ad.offer.features.includes(featuresFilter.value);
  });

//фильтруем объявления

const checkAllFilters = (ads) => {
  const filteredData = [];
  for (let i = 0; i < ads.length; i++) {
    const ad = ads[i];
    if (
      checkType(ad) &&
      checkPrice(ad) &&
      checkRooms(ad) &&
      checkGuests(ad) &&
      checkFeatures(ad)
    ) {
      createMarker(ad);
      filteredData.push(ad);
    }
    if (filteredData.length === Default.SIMILAR_AD_COUNT) {
      break;
    }
  }
  return filteredData;
};

// обновим карту
const changeFilters = (cb) => {
  mapFilters.addEventListener('change', () => {
    clearMarker();
    cb();
  });
};

export {checkAllFilters, changeFilters};


