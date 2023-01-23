import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, photoGrid, popupOpenEditButton, profileTitle, profileSubtitle, username, aboutme, popupOpenAddButton, formAddElement, settings, formAdd, formEdit } from "./constants.js";
import "../pages/index.css";

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

function handleCardClick(name, link) { //открываем попап с картинкой
  popupImg.open(name, link);
}

popupOpenEditButton.addEventListener('click', function () { // открытие попап и редактирование профиля
  const userData = profileInfo.getUserInfo();
  username.value = userData.userNameInfo;
  aboutme.value = userData.aboutMeInfo;
  formEditValidator.resetValidation();

  popupEdit.open();
});

popupOpenAddButton.addEventListener('click', function () { // открытие попап добавления карточки
  popupAdd.open();
  formAddElement.reset();

  formAddValidator.resetValidation();
});

function handleFormEditSubmit(object) { // обработка формы редактирования профиля
  profileInfo.setUserInfo(object);
}

function handleFormAddSubmit(inputValue) { // добавляем картинки и описание в форму попап
  const newCardElements = {
    link: inputValue['src'],
    name: inputValue['place']
  }
  photoGrid.prepend(createNewCard(newCardElements));

  popupAdd.close();

  formAddValidator.resetValidation();
}

const popupEdit = new PopupWithForm('.popup_edit', handleFormEditSubmit); // создаем экземпляр попап редактирования
popupEdit.setEventListeners();
const popupAdd = new PopupWithForm('.popup_add', handleFormAddSubmit); // создаем экземпляр попап добавления картинки
popupAdd.setEventListeners();

const popupImg = new PopupWithImage('.popup_image'); // создаем экземпляр попап с картинкой
popupImg.setEventListeners();

