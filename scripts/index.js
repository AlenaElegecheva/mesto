const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-btn');
const popupCloseButton = document.querySelector('.popup__close-icon');
const formElement = document.querySelector('.form-edit');
const username = document.querySelector('.popup__input_field_name');
const aboutme = document.querySelector('.popup__input_field_aboutme');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const openPopup = function () {
  popup.classList.add('popup_opened');
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;
}

const closePopup = function () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = username.value;
  profileSubtitle.textContent = aboutme.value;

  closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

