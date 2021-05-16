import Popup from './Popup.js'

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  _getInputValues = () => {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value
    });

    return values;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues())
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}