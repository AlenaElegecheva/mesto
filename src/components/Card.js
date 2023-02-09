export default class Card {
  constructor({ userId, data, templateSelector, handleCardClick, handleDeleteCardClick, handleLikeButtonClick, handleDeleteLike }) {
    this._title = data.name;
    this._image = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._handleDeleteLike = handleDeleteLike;
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
    this._element.querySelector('.element__like-count').textContent = `${this._likes.length}`;
    this._likeClick()
    this._removeTrashBtn()

    return this._element;
  }

  _removeTrashBtn() {
    if (this._ownerId !== this._userId) {
      this._element.querySelector('.element__delete-btn').remove()
    }
  }


  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListener() {
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      if (this._element.querySelector('.element__like-btn').classList.contains('element__like-btn_active')) {
        this._handleDeleteLike()
      } else {
        this._handleLikeButtonClick()
      }
    })

    this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
      this._handleDeleteCardClick();
    })

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    })
  }

  likeCount(res) {
    this._element.querySelector('.element__like-count').textContent = `${res.likes.length}`;
  }

  _hasLike() {
    return this._likes.find(like => like._id === this._userId)
  }

  _likeClick() {
    if (this._hasLike()) {
      this.putLike()
    } else {
      this.deleteLike()
    }
  }

  putLike() {
    this._element.querySelector('.element__like-btn').classList.add('element__like-btn_active')
  }

  deleteLike() {
    this._element.querySelector('.element__like-btn').classList.remove('element__like-btn_active')
  }

}


