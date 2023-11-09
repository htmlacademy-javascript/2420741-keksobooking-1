import {variableOffers} from './data.js';

// сопоставили подписи
const TYPES_OF_HOUSING = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'
};

// нашли карточку объявления на карте
const userDialog = document.querySelector('#map-canvas');

// нашли шаблон карочки
const offerCardTemplate = document.querySelector('#card').content.querySelector('.popup');

// создали карточку с данными
const offerCards = variableOffers(1);


// создали функцию для списка удобств
const actualFeatures = (features) => {
  const variableFeauters = document.createDocumentFragment();
  features.forEach((element) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature', `popup__feature--${element}`);
    variableFeauters.appendChild(feature);
  });
  return variableFeauters;
};

// создали функцию для списка фотографий
const actualPhotos = (photos) => {
  const variablePhotos = document.createDocumentFragment();
  photos.forEach((photo) => {
    const actualPhoto = document.createElement('img');
    actualPhoto.src = photo;
    actualPhoto.alt = 'Фотография жилья';
    actualPhoto.setAttribute('width', '45');
    actualPhoto.setAttribute('height', '40');
    actualPhoto.classList.add('popup__photo');

    variablePhotos.appendChild(actualPhoto);
  });
  return variablePhotos;
};


const renderOfferCards = () => {
  const userDialogCard = document.createDocumentFragment();

  offerCards.forEach((offer) => {
    const offerCard = offerCardTemplate.cloneNode(true);
    offerCard.querySelector('.popup__title').textContent = offer.tittle;
    offerCard.querySelector('.popup__text--address').textContent = offer.address;
    offerCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    offerCard.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[offer.type];
    offerCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    offerCard.querySelector('.popup__description').textContent = offer.description;
    offerCard.querySelector('.popup__avatar').src = offer.avatar;

    const listFeatures = offerCard.querySelector('.popup__features');
    listFeatures.innerHTML = '';
    if (offer.features) {
      const listFeatureElements = actualFeatures(offer.features);
      listFeatures.appendChild(listFeatureElements);
    } else {
      listFeatures.remove();
    }

    const listPhotos = offerCard.querySelector('.popup__photos');
    listPhotos.innerHTML = '';
    if (offer.photos) {
      const listPhotosElements = actualPhotos(offer.photos);
      listPhotos.appendChild(listPhotosElements);
    } else {
      listPhotos.remove();
    }
    userDialogCard.appendChild(offerCard);
  });
  userDialog.appendChild(userDialogCard);
};

const clearOfferCards = () => {
  userDialog.innerHTML = '';
};

export {renderOfferCards, clearOfferCards};
