const FILE_TYPES = ['jpg', 'jpeg', 'png', 'tiff', 'svg'];

const IMG_WIDTH = 70;
const IMG_HEIGHT = 70;

const avatarChooser = document.querySelector('#avatar');

const previewAvatarBlock = document.querySelector('.ad-form-header__preview');
const previewAvatar = previewAvatarBlock.querySelector('img').cloneNode('true');

const imagesChooser = document.querySelector('#images');
const previewPhotosBlock = document.querySelector('.ad-form__photo');


// Создадим превью аватара (Ваша фотография)
const getAvatar = (photos) => {
  const avatarFragment = document.createDocumentFragment();
  previewAvatar.src = photos;
  avatarFragment.appendChild(previewAvatar);
  previewAvatarBlock.innerHTML = '';
  previewAvatarBlock.appendChild(avatarFragment);
};

// Создадим превью фотографий жилья
const getPhotos = (photos) => {
  previewPhotosBlock.innerHTML = '';
  const imgFragment = document.createDocumentFragment();
  const imgEl = document.createElement('img');
  imgEl.src = photos;
  imgEl.alt = 'Фото жилья';
  imgEl.width = IMG_WIDTH;
  imgEl.height = IMG_HEIGHT;
  imgFragment.appendChild(imgEl);
  previewPhotosBlock.appendChild(imgEl);
};


const uploadImages = (fileChoose, fnc) => {
  fileChoose.addEventListener('change', () => {
    const file = fileChoose.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const url = URL.createObjectURL(file);
      fnc(url);
    }
  });
};

const getAvatarPreview = () => uploadImages(avatarChooser, getAvatar);
const getPhotoPreview = () => uploadImages(imagesChooser, getPhotos);


export {previewAvatar, previewPhotosBlock, getAvatarPreview, getPhotoPreview};
