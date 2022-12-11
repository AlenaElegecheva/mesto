const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupOpenEditButton = document.querySelector('.profile__edit-btn');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formEditElement = document.forms.edit;
const username = formEditElement.elements.username;
const aboutme = formEditElement.elements.aboutme;

const popupOpenAddButton = document.querySelector('.profile__add-btn');
const formAddElement = document.forms.add;
const popupPlace = formAddElement.elements.place;
const popupSrc = formAddElement.elements.src;

const popupImage = document.querySelector('.popup_image');
const popupPicture = document.querySelector('.popup__picture');
const popupImageTitle = document.querySelector('.popup__image-title');

const photoGrid = document.querySelector('.photo-grid');
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');
const popupAdd = document.querySelector('.popup_add');

function resetErrorSpan() {
  const PopupErrorSpan = Array.from(document.querySelectorAll('.popup__error'));
  PopupErrorSpan.forEach((errorspan) => {
    errorspan.textContent = '';
  })
}

function resetErrorInput() {
  const popupErrorInput = Array.from(document.querySelectorAll('.popup__input'));
  popupErrorInput.forEach((errorinput) => {
    errorinput.classList.remove('popup__input_type_error');
  })
}

function openPopup(popup) { // открытие попап
  popup.classList.add('popup_opened');
  document.addEventListener('click', closePopupByButton);
  popup.addEventListener('click', closePopupByOverlay);
  document.addEventListener('keydown', closePopupByKey);
  resetErrorSpan();
  resetErrorInput();
}

function closePopup(popup) { // закрытие попап
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closePopupByButton);
  document.removeEventListener('keydown', closePopupByKey);
}

function closePopupByOverlay(e) { // закрытие попап кликом на оверлей
  if (e.target.classList.contains('popup_opened')) {
    closePopup(e.target);
  }
}

function closePopupByKey(e) { // закрытие попап нажатием на Esc
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function closePopupByButton(e) { // закрытие попап кликом на крестик
  if (e.target.classList.contains('popup__close-icon')) {
    closePopup(document.querySelector('.popup_opened'));
  }
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
  elementImage.addEventListener('click', () => handleElementImageClick(item))

  return photoGridElement;
}

const handleLikeButtonClick = (e) => { // активируем/убираем лайки
  e.target.classList.toggle('element__like-btn_active')
}

const handleDeleteButtonClick = (e) => {  // удаляем картинку
  e.target.closest('.element').remove()
}

const handleElementImageClick = (item) => {  // открытие попап с картинкой
  popupPicture.src = item.link;
  popupImageTitle.textContent = item.name;
  popupPicture.alt = item.name;

  openPopup(popupImage);
}

function handleFormEditSubmit(evt) { // обработка формы редактирования профиля
  evt.preventDefault();
  profileTitle.textContent = username.value;
  profileSubtitle.textContent = aboutme.value;

  closePopup(popupEdit);
}


initialCards.forEach(function (item) { // загружаем карточки из массива
  const card = addCard(item);
  photoGrid.append(card);
});

const handleFormAddSubmit = (e) => { // добавляем картинки и описание в форму попап
  e.preventDefault()
  const photoGridElement = {
    name: popupPlace.value,
    link: popupSrc.value
  }

  const card = addCard(photoGridElement);
  photoGrid.prepend(card);

  closePopup(popupAdd);
}

popupOpenEditButton.addEventListener('click', function () { // открытие попап и редактирвание профиля
  openPopup(popupEdit);
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;
});

popupOpenAddButton.addEventListener('click', function () { // открытие попап добавления карточки
  openPopup(popupAdd);
  formAddElement.reset();
});


formAddElement.addEventListener('submit', handleFormAddSubmit) // отправка формы добавления

formEditElement.addEventListener('submit', handleFormEditSubmit); // отправка формы редактирования
