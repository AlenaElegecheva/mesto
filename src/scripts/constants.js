export const initialCards = [
  {
    name: 'Словения',
    link: 'https://images.unsplash.com/photo-1666961307825-c1fd0b88bab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Португалия',
    link: 'https://images.unsplash.com/photo-1653161752453-0e00805678b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Япония',
    link: 'https://images.unsplash.com/photo-1670441715372-c575fb6fbe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Марокко',
    link: 'https://images.unsplash.com/photo-1654352668745-ef2bae5e7126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Китай',
    link: 'https://images.unsplash.com/photo-1671154765825-7426a9532ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Великобритания',
    link: 'https://images.unsplash.com/photo-1509331632986-0e10ce58aacb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];

export const settings = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
);

export const photoGrid = document.querySelector('.photo-grid');
export const popupEditElement = document.querySelector('.popup_edit');
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
export const popupAddElement = document.querySelector('.popup_add');
export const formAdd = document.querySelector('.form-add');
export const formEdit = document.querySelector('.form-edit');
export const popupPicture = document.querySelector('.popup__picture');
