const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupOpenEditButton = document.querySelector('.profile__edit-btn');
const popupCloseEditButton = document.querySelector('.popup__close-icon_edit');
const formEditElement = document.querySelector('.form-edit');
const username = document.querySelector('.popup__input_field_name');
const aboutme = document.querySelector('.popup__input_field_aboutme');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupCloseAddButton = document.querySelector('.popup__close-icon_add');
const popupOpenAddButton = document.querySelector('.profile__add-btn');
const formAddElement = document.querySelector('.form-add');

const popupImage = document.querySelector('.popup_image');
const popupCloseImageButton = document.querySelector('.popup__close-icon_image');
const popupPicture = document.querySelector('.popup__picture');
const popupImageTitle = document.querySelector('.popup__image-title');
const elementCard = document.querySelector('.element')

const photoGrid = document.querySelector('.photo-grid');
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');
const popupAdd = document.querySelector('.popup_add');
const popupPlace = document.querySelector('.popup__input_field_place');
const popupSrc = document.querySelector('.popup__input_field_src');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup(popup) { // открытие попап
  popup.classList.add('popup_opened');
}

function closePopup(popup) { // закрытие попап
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) { // обработка формы редактирования профиля
  evt.preventDefault();
  profileTitle.textContent = username.value;
  profileSubtitle.textContent = aboutme.value;

  closePopup(popupEdit);
}

// Добавление новой карточки

function addCard(item) {

  const photoGridElement = elementTemplate.cloneNode(true);
  const elementHeading = photoGridElement.querySelector('.element__heading');
  const elementLikeButton = photoGridElement.querySelector('.element__like-btn');
  const elementDeleteButton = photoGridElement.querySelector('.element__delete-btn');
  const elementImage = photoGridElement.querySelector('.element__image');
  elementImage.src = item.link;
  elementHeading.textContent = item.name;
  elementImage.alt = item.name;


  // Обработчики кликов для кнопок лайка и удаления, открытия попап с картинкой
  elementDeleteButton.addEventListener('click', handleDeleteButtonClick)
  elementLikeButton.addEventListener('click', handleLikeButtonClick)
  elementImage.addEventListener('click', handleElementImageClick)

  return photoGridElement;
}

const handleLikeButtonClick = (e) => {
  e.target.classList.toggle('element__like-btn_active') // активируем/убираем лайки
}

const handleDeleteButtonClick = (e) => {  // удаляем картинку
  e.target.closest('.element').remove()
}

const handleElementImageClick = (e) => {  // открытие попап с картинкой
  e.preventDefault()
  openPopup(popupImage);
  const elementHeading = document.querySelector('.element__heading');
  const elementImage = document.querySelector('.element__image');
  popupPicture.src = elementImage.src;
  popupImageTitle.textContent = elementHeading.textContent;
}

popupCloseImageButton.addEventListener('click', function () { // закрытие попап с картинкой
  closePopup(popupImage)
});

initialCards.forEach(function (item) { // загружаем карточки из массива
  const card = addCard(item);
  photoGrid.append(card);
});

const handleFormSubmit = (e) => {
  e.preventDefault()
  const photoGridElement = {
    name: popupPlace.value,
    link: popupSrc.value
  }

  const card = addCard(photoGridElement);
  photoGrid.prepend(card);

  closePopup(popupAdd);
}
formEditElement.addEventListener('submit', formSubmitHandler); // обработчик событий

popupOpenEditButton.addEventListener('click', function () { // открытие попап и редактирвание профиля
  openPopup(popupEdit);
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;
});

popupCloseEditButton.addEventListener('click', function () { // закрытие попап редактирования
  closePopup(popupEdit)
});

popupOpenAddButton.addEventListener('click', function () { // открытие попап добавления карточки
  openPopup(popupAdd);
  popupPlace.value = '';
  popupSrc.value = '';
});

popupCloseAddButton.addEventListener('click', function () { // закрытие попап добавления карточки
  closePopup(popupAdd)
});

formAddElement.addEventListener('submit', handleFormSubmit)
