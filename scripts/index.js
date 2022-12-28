import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards, photoGrid, popupEdit, popupOpenEditButton, profileTitle, profileSubtitle, formEditElement, username, aboutme, popupOpenAddButton, formAddElement, popupPlace, popupSrc, popupAdd, settings, formAdd, formEdit, popupBtn } from "./constants.js"

function createNewCard(data) { // создаем новые карточки на основе класса
  const card = new Card(data, '#element-template');
  const photoGridElement = card.generateCard();

  return photoGridElement;
}

initialCards.forEach((item) => { //загрузка карточек на страницу
  photoGrid.append(createNewCard(item));
});

export function openPopup(popup) { // открытие попап
  popup.classList.add('popup_opened');
  document.addEventListener('mousedown', closePopupByMousedown);
  document.addEventListener('keydown', closePopupByKey);
}


function closePopup(popup) { // закрытие попап
  popup.classList.remove('popup_opened');
  document.removeEventListener('mousedown', closePopupByMousedown);
  document.removeEventListener('keydown', closePopupByKey);
}

function closePopupByMousedown() {  // закрытие попап кликом на крестик и оверлей
  const popups = document.querySelectorAll('.popup')

  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-icon')) {
        closePopup(popup)
      }
    })
  })
}

function closePopupByKey(e) { // закрытие попап нажатием на Esc
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

const formAddValidator = new FormValidator(settings, formAdd); // создаем экземпляр класса FormValidator
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(settings, formEdit); // создаем экземпляр класса FormValidator
formEditValidator.enableValidation();


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

popupOpenEditButton.addEventListener('click', function () { // открытие попап и редактирвание профиля
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;

  resetErrorSpan();
  resetErrorInput();

  openPopup(popupEdit);
});

popupOpenAddButton.addEventListener('click', function () { // открытие попап добавления карточки
  openPopup(popupAdd);
  formAddElement.reset();

  resetErrorSpan();
  resetErrorInput();
});

function handleFormEditSubmit(evt) { // обработка формы редактирования профиля
  evt.preventDefault();
  profileTitle.textContent = username.value;
  profileSubtitle.textContent = aboutme.value;

  closePopup(popupEdit);
}

const handleFormAddSubmit = (e) => { // добавляем картинки и описание в форму попап
  e.preventDefault()
  const newCardElements = {
    link: popupSrc.value,
    name: popupPlace.value
  }
  photoGrid.prepend(createNewCard(newCardElements));

  closePopup(popupAdd);
  popupBtn.classList.add('popup__btn_disabled');
  popupBtn.disabled = 'disabled';
}

formAddElement.addEventListener('submit', handleFormAddSubmit) // отправка формы добавления

formEditElement.addEventListener('submit', handleFormEditSubmit); // отправка формы редактирования
