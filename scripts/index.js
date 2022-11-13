const popup = document.querySelector('.popup');
const PopupOpenButton = document.querySelector('.profile__edit-btn');
const PopupCloseButton = document.querySelector('.popup__close-icon');
const formElement = document.querySelector('.form-edit');
const username = document.querySelector('.popup__field-name');
const aboutme = document.querySelector('.popup__field-aboutme');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const OpenPopup = function () {
  popup.classList.add('popup_opened');
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;
}

const ClosePopup = function () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = username.value;
  profileSubtitle.textContent = aboutme.value;

  ClosePopup();
}

PopupOpenButton.addEventListener('click', OpenPopup);
PopupCloseButton.addEventListener('click', ClosePopup);
formElement.addEventListener('submit', formSubmitHandler);

