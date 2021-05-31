export default class FormValidator {
  constructor({inputSelector, submitButtonSelector, inactiveButtonClass, errorClass}, form) {
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._errorClass = errorClass;
    this._form = document.querySelector(form);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  //show error
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  //hide error
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  //form validation conditions
  _chekInputValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    const errorMessage = inputElement.validationMessage;

    if (isInputNotValid) {
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasNotValidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }


  //save button conditions
  _toggleButtonState() {
    if (this._hasNotValidInput()) {
      this._submitButton.setAttribute('disabled', true);
      this._submitButton.classList.add(this._inactiveButtonClass);
    } else {
      this._submitButton.removeAttribute('disabled');
      this._submitButton.classList.remove(this._inactiveButtonClass);
    }
  };



  //reset error message
  resetValidation() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
      });
      this._toggleButtonState();
  }

  //listener for elements in form
  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._toggleButtonState();
    });
    
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._chekInputValidity(inputElement);
        this._toggleButtonState();
      }); 
    });
  };

  //turn-on validation
  enableValidation() {
      this._setEventListeners();
  }
}

