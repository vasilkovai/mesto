import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup{
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler()
    });
  }

  setConfirmSubmitHandler(confirmSubmitHandle) {
    this._submitHandler = confirmSubmitHandle;
  }
}