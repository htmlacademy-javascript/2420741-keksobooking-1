import {openForm} from './active.js';
import {offerCards} from './popup.js';
import {renderOfferCards} from './popup.js';

//инициируем карту
const map = L.map('map-canvas')
  .on('load', () => {
    openForm();
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

//находим поле адреса
const address = document.querySelector('#address');
address.readOnly = true;

//передаем координаты этому полю

marker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

//создадим обычную метку
const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (offerCard) => {
  const {lat, lng} = offerCard.locations;
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
    .bindPopup(renderOfferCards(offerCard),
      {
        keepInView: true
      });
};


offerCards.forEach((offerCard) => {
  createMarker(offerCard);
});
