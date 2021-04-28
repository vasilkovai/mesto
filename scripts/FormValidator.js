export class FormValidator {
  constructor({inputSelector, submitButtonSelector, inactiveButtonClass, errorClass}, form) {
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._errorClass = errorClass;
    this._form = document.querySelector(form);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
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

  //save button conditions
  _toggleButtonState() {
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    const hasNotValidInput = this._inputList.some((inputElement) => !inputElement.validity.valid);
    
    if (hasNotValidInput) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  //reset error message
  resetErrorMessage() {
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

