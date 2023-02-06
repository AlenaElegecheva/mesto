export const settings = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
);

export const photoGrid = document.querySelector('.photo-grid');
export const popupOpenEditButton = document.querySelector('.profile__edit-btn');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const profileAvatar = document.querySelector('.profile__avatar');
export const formEditElement = document.forms.edit;
export const formAvatarEditElement = document.forms.avatar;
export const username = formEditElement.elements.username;
export const aboutme = formEditElement.elements.aboutme;
export const popupOpenAddButton = document.querySelector('.profile__add-btn');
export const formAddElement = document.forms.add;
export const formAdd = document.querySelector('.form-add');
export const formEdit = document.querySelector('.form-edit');
export const formAvatarEdit = document.querySelector('.form-avatar-edit');
export const popupPicture = document.querySelector('.popup__picture');
export const popupAvatarEditBtn = document.querySelector('.avatar-hover-effect');
