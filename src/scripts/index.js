import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import { api } from "../components/Api.js";
import { photoGrid, popupOpenEditButton, profileTitle, profileSubtitle, username, aboutme, popupOpenAddButton, formAddElement, settings, formAdd, formEdit, formAvatarEdit, popupAvatarEditBtn, formAvatarEditElement, profileAvatar } from "./constants.js";
import "../pages/index.css";


const profileInfo = new UserInfo({        // создаем экземпляр новых данных пользователя
  userNameInfo: profileTitle,
  aboutMeInfo: profileSubtitle,
  userAvatar: profileAvatar,
});

let userId

Promise.all([api.getUsersData(), api.getInitialCards()])
  .then(res => {
    const dataUser = res[0]
    const dataCard = res[1]
    userId = dataUser._id;
    profileInfo.setUserInfo(dataUser)   // загрузка данных о пользователе
    cardsList.renderItems(dataCard)     // загрузка карточек
  })
  .catch((err) => {
    console.log(err);
  });


function createNewCard(data) { // создаем новые карточки на основе класса
  const card = new Card({
    userId,
    data,
    templateSelector: '#element-template',
    handleCardClick: () => {                // открываем попап с картинкой
      popupImg.open(data.name, data.link);
    },
    handleDeleteCardClick: () => {          // удаляем карточку
      const popupDeleteCard = new PopupWithSubmit('.popup_delete-card', handleDeleteCardSubmit);
      popupDeleteCard.setEventListeners();
      popupDeleteCard.open(); //открытие попап удаления карточки
      function handleDeleteCardSubmit() {
        api.deleteCards(data._id)
          .then(res => {
            card.deleteCard(res)
            popupDeleteCard.close();
          })
          .then(popupDeleteCard.setLoadText('Удаление...'))
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            popupDeleteCard.setLoadText('Да')
          })
      }
    },
    handleLikeButtonClick: () => {  // ставим лайки
      api.putLikeCards(data._id)
        .then(res => {
          card.putLike()
          card.likeCount(res)
        })
        .catch((err) => {
          console.log(err);
        })
    },
    handleDeleteLike: () => {   // удаляем лайки
      api.deleteLikeCards(data._id)
      .then(res => {
        card.deleteLike(data._id)
        card.likeCount(res)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  });
  const photoGridElement = card.generateCard();

  return photoGridElement;
}


const cardsList = new Section({ // создаем секцию с картинками на основе класса
  renderer: (data) => {
    cardsList.addItem(createNewCard(data));
  }
},
  photoGrid
);


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


popupAvatarEditBtn.addEventListener('click', function () { //открытие попап редактирования аватара
  popupAvatarEdit.open();
  formAvatarEditElement.reset();
  formAvatarEditValidator.resetValidation();
})


function handleFormEditSubmit(data) { // обработка формы редактирования профиля
  popupEdit.setLoadText('Сохранение...')
  api.setUsersData(data)
    .then(res => {
      profileInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEdit.setLoadText('Сохранить')
    })
}


function handleFormAddSubmit(data) { // добавляем картинки и описание в форму попап
  popupAdd.setLoadText('Сохранение...')
  api.createCard(data)
    .then(res => {
      photoGrid.prepend(createNewCard(res));
      popupAdd.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAdd.setLoadText('Сохранить')
    })
  formAddValidator.resetValidation();
}


function handleFormAvatarEditSubmit(data) {  // меняем изображение аватара юзера
  popupAvatarEdit.setLoadText('Сохранение...')
  api.setAvatar(data)
    .then(res => {
      profileInfo.setUserAvatar(res);
      popupAvatarEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatarEdit.setLoadText('Сохранить')
    })
  formAvatarEditValidator.resetValidation();
}


const popupEdit = new PopupWithForm('.popup_edit', handleFormEditSubmit); // создаем экземпляр попап редактирования
popupEdit.setEventListeners();
const popupAdd = new PopupWithForm('.popup_add', handleFormAddSubmit); // создаем экземпляр попап добавления картинки
popupAdd.setEventListeners();

const popupImg = new PopupWithImage('.popup_image'); // создаем экземпляр попап с картинкой
popupImg.setEventListeners();

const popupAvatarEdit = new PopupWithForm('.popup_edit-avatar', handleFormAvatarEditSubmit);
popupAvatarEdit.setEventListeners();


const formAddValidator = new FormValidator(settings, formAdd); // создаем экземпляр класса FormValidator
formAddValidator.enableValidation();
const formEditValidator = new FormValidator(settings, formEdit); // создаем экземпляр класса FormValidator
formEditValidator.enableValidation();
const formAvatarEditValidator = new FormValidator(settings, formAvatarEdit);
formAvatarEditValidator.enableValidation();
