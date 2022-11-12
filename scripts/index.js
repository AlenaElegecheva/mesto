const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-btn');
const closePopupButton = document.querySelector('.popup__close-icon');

const openPopup = function () {
  popup.classList.add('popup_opened');
}
const closePopup = function () {
  popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);


let formElement = document.querySelector('.popup__container');

function formSubmitHandler(evt) {
  evt.preventDefault();

  let username = document.querySelector('.popup__field_name');
  let aboutme = document.querySelector('.popup__field_aboutme');

  username.value;
  aboutme.value;

  let profile__title = document.querySelector('.profile__title');
  let profile__subtitle = document.querySelector('.profile__subtitle');

  profile__title.textContent = username.value;
  profile__subtitle.textContent = aboutme.value;

  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

