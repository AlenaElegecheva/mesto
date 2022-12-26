import { openPopup } from "./index.js";
import { popupImage } from "./constants.js";

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
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._title;
    this._element.querySelector('.element__heading').textContent = this._title;

    return this._element;
  }

  _handleLikeButtonClick() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active')
  }

  _handleDeleteButtonClick() {
    this._element.querySelector('.element__delete-btn').closest('.element').remove()
  }

  _handleElementImageClick() {
    document.querySelector('.popup__picture').src = this._image;
    document.querySelector('.popup__picture').alt = this._title;
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


