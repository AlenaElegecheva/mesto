export const initialCards = [
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

export const settings = ({
  // formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
);

export const photoGrid = document.querySelector('.photo-grid');
export const popupEdit = document.querySelector('.popup_edit');
export const popupOpenEditButton = document.querySelector('.profile__edit-btn');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const formEditElement = document.forms.edit;
export const username = formEditElement.elements.username;
export const aboutme = formEditElement.elements.aboutme;
export const popupOpenAddButton = document.querySelector('.profile__add-btn');
export const formAddElement = document.forms.add;
export const popupPlace = formAddElement.elements.place;
export const popupSrc = formAddElement.elements.src;
export const popupImage = document.querySelector('.popup_image');
export const popupAdd = document.querySelector('.popup_add');
export const formAdd = document.querySelector('.form-add');
export const formEdit = document.querySelector('.form-edit');
export const popupBtn = popupAdd.querySelector('.popup__btn');
