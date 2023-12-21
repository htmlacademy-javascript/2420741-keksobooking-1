
// сопоставили подписи
const TYPES_OF_HOUSING = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'
};
//добавим склонение от числа комнат
const getRoomsText = (roomCount) => {
  switch (roomCount) {
    case 1:
      return 'комната';
    case 2:
    case 3:
    case 4:
      return 'комнаты';
    default:
      return 'комнат';
  }
};
//добавим склонение от числа гостей
const getGuestsText = (guestCount) => {
  switch (guestCount) {
    case 1:
      return 'гостя';
    case 2:
    case 3:
      return 'гостей';
    default:
      return 'не для гостей';
  }
};


// нашли шаблон карочки
const offerCardTemplate = document.querySelector('#card').content.querySelector('.popup');


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

const renderOfferCards = ({
  author,
  offer
}) => {
  const popup = offerCardTemplate.cloneNode(true);
  popup.querySelector('.popup__avatar').src = author.avatar || '';
  popup.querySelector('.popup__title').textContent = offer.title || '';
  popup.querySelector('.popup__text--address').textContent = offer.address;
  popup.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popup.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[offer.type];
  popup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getRoomsText(offer.rooms)} для ${offer.guests} ${getGuestsText(offer.guests)}`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popup.querySelector('.popup__description').textContent = offer.description || '';

  const listFeatures = popup.querySelector('.popup__features');
  listFeatures.innerHTML = '';
  if (offer.features) {
    const listFeatureElements = actualFeatures(offer.features);
    listFeatures.appendChild(listFeatureElements);
  } else {
    listFeatures.remove();
  }

  const listPhotos = popup.querySelector('.popup__photos');
  listPhotos.innerHTML = '';
  if (offer.photos) {
    const listPhotosElements = actualPhotos(offer.photos);
    listPhotos.appendChild(listPhotosElements);
  } else {
    listPhotos.remove();
  }
  return popup;
};


export {renderOfferCards};

