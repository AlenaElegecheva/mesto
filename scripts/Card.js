export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._title = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._element.remove();
    this._element = null;
  }

  _setEventListener() {
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._handleLikeButtonClick();
    })

    this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
      this._handleDeleteButtonClick();
    })

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick( this._title, this._image);
    })
  }

}


