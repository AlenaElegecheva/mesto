const popups = document.querySelectorAll('.popup');
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
const popupBtn = popupAdd.querySelector('.popup__btn');

function resetErrorSpan() { //сброс ошибки в спане при открытии попапа
  const popupErrorSpan = Array.from(document.querySelectorAll('.popup__error'));
  popupErrorSpan.forEach((errorspan) => {
    errorspan.textContent = '';
  })
}

function resetErrorInput() { // сброс ошибки в инпуте при открытии попапа
  const popupErrorInput = Array.from(document.querySelectorAll('.popup__input'));
  popupErrorInput.forEach((errorinput) => {
    errorinput.classList.remove('popup__input_type_error');
  })
}

function openPopup(popup) { // открытие попап
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByKey);
}

function closePopup(popup) { // закрытие попап
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByKey);
}

function closePopupByKey(e) { // закрытие попап нажатием на Esc
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

popups.forEach((popup) => {  // закрытие попап кликом на крестик и оверлей
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup)
    }
  })
})

function addCard(item) {  // Добавление новой карточки

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
  popupBtn.classList.add('popup__btn_disabled');
  popupBtn.disabled = 'disabled';
}


popupOpenEditButton.addEventListener('click', function () { // открытие попап и редактирвание профиля
  openPopup(popupEdit);
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;
  resetErrorSpan();
  resetErrorInput();
});

popupOpenAddButton.addEventListener('click', function () { // открытие попап добавления карточки
  openPopup(popupAdd);
  formAddElement.reset();
  resetErrorSpan();
  resetErrorInput();
});


formAddElement.addEventListener('submit', handleFormAddSubmit) // отправка формы добавления

formEditElement.addEventListener('submit', handleFormEditSubmit); // отправка формы редактирования
