import Popup from "./Popup";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    this._popup.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    })
    super.setEventListeners();
  }
}
