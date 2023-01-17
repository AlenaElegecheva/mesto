import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import { initialCards, photoGrid, popupOpenEditButton, profileTitle, profileSubtitle, username, aboutme, popupOpenAddButton, formAddElement, popupPlace, popupSrc, settings, formAdd, formEdit, popupImage, popupAddElement, popupEditElement } from "./constants.js"

const profileInfo = new UserInfo({ // создаем экземпляр новых данных пользователя
  userNameInfo: profileTitle,
  aboutMeInfo: profileSubtitle
});

const formAddValidator = new FormValidator(settings, formAdd); // создаем экземпляр класса FormValidator
formAddValidator.enableValidation();
const formEditValidator = new FormValidator(settings, formEdit); // создаем экземпляр класса FormValidator
formEditValidator.enableValidation();

const initialCardsList = new Section({  //загрузка карточек на страницу
  items: initialCards,
  renderer: (data) => {
    initialCardsList.addItem(createNewCard(data));
  },
},
  photoGrid
);
initialCardsList.renderItems();

function createNewCard(data) { // создаем новые карточки на основе класса
  const card = new Card(data, '#element-template', handleCardClick);
  const photoGridElement = card.generateCard();

  return photoGridElement;
}

function handleCardClick(name, link) {
  popupImg.open(name, link);
}

function writeInInputsUserInfo() {
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;
}


popupOpenEditButton.addEventListener('click', function () { // открытие попап и редактирование профиля
  profileInfo.getUserInfo(writeInInputsUserInfo());
  formEditValidator.resetValidation();

  popupEdit.open();
});

popupOpenAddButton.addEventListener('click', function () { // открытие попап добавления карточки
  popupAdd.open();
  formAddElement.reset();

  formAddValidator.resetValidation();
});

function handleFormEditSubmit() { // обработка формы редактирования профиля
  profileInfo.setUserInfo();
}

function handleFormAddSubmit() { // добавляем картинки и описание в форму попап
  const newCardElements = {
    link: popupSrc.value,
    name: popupPlace.value
  }
  photoGrid.prepend(createNewCard(newCardElements));

  popupAdd.close();

  formAddValidator.resetValidation();
}

const popupEdit = new PopupWithForm(popupEditElement, handleFormEditSubmit); // создаем экземпляр попап редактирования
popupEdit.setEventListeners();
const popupAdd = new PopupWithForm(popupAddElement, handleFormAddSubmit); // создаем экземпляр попап добавления картинки
popupAdd.setEventListeners();


const popupImg = new PopupWithImage(popupImage); // создаем экземпляр попап с картинкой
popupImg.setEventListeners();

