import {renderOfferCards} from './popup.js';
import {onPriceCostChange} from './validate-form.js';
import {getForm} from './active.js';
import {sliderElement, priceCost} from './validate-form.js';

//инициируем карту
const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView(
    {
      lat: 35.69034,
      lng: 139.75175,
    }, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//создаем главную метку
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker (
  {
    lat: 35.69034,
    lng: 139.75175,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);
marker.addTo(map);

//задаем по дефолту координаты Токио
const TOKIO = {
  lat: 35.69034,
  lng: 139.75175,
};

//находим поле адреса
const ADDRESS = document.querySelector('#address');
ADDRESS.readOnly = true;
//назначаем по умолчанию координаты Токио
ADDRESS.value = `${TOKIO.lat.toFixed(5)}, ${TOKIO.lng.toFixed(5)}`;

//передаем координаты этому полю

marker.on('moveend', (evt) => {
  ADDRESS.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

//создадим обычную метку
const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (offer) => {
  const {lat, lng} = offer.location;
  const markers = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );
  markers
    .addTo(markerGroup)
    .bindPopup(renderOfferCards(offer),
      {
        keepInView: true
      });
};

// // Очистим слой меток объявлений
const clearMarker = () => markerGroup.clearLayers();

// переводим страницу в в дефолтное состояние
const resetPage = () => {
  marker.setLatLng(TOKIO);
  map.setView(TOKIO, 10);
  getForm.reset();
  ADDRESS.value = `${TOKIO.lat.toFixed(5)}, ${TOKIO.lng.toFixed(5)}`;
  onPriceCostChange();
  // clearMarker();
  sliderElement.noUiSlider.set(priceCost.value);
};

export {createMarker, map, resetPage};
