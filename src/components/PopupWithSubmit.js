import PopupWithForm from "./PopupWithForm";

export default class PopupWithSubmit extends PopupWithForm {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  setLoadText() {
    super.setLoadText();
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit();
      super.close();
    })
  }
}
