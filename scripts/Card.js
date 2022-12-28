import { openPopup } from "./index.js";
import { popupImage, popupPicture } from "./constants.js";

export class Card {
  constructor(data, templateSelector) {
    this._title = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const photoGridElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return photoGridElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    const elementImage = this._element.querySelector('.element__image');
    elementImage.src = this._image;
    elementImage.alt = this._title;
    this._element.querySelector('.element__heading').textContent = this._title;

    return this._element;
  }

  _handleLikeButtonClick() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active')
  }

  _handleDeleteButtonClick() {
    this._element.remove()
  }

  _handleElementImageClick() {
    popupPicture.src = this._image;
    popupPicture.alt = this._title;
    document.querySelector('.popup__image-title').textContent = this._title;

    openPopup(popupImage);
  }

  _setEventListener() {
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._handleLikeButtonClick();
    })

    this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
      this._handleDeleteButtonClick();
    })

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleElementImageClick();
    })
  }

}


