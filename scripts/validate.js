//show error
const showInputError = (formElement, inputElement, errorMessage, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
}

//hide error
const hideInputError = (formElement, inputElement, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

//form validation conditions
const chekInputValidity = (formElement, inputElement, errorClass) => {
  const isInputNotValid = !inputElement.validity.valid;

  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage, errorClass);
  } else {
    hideInputError(formElement, inputElement, errorClass);
  }
};

//save button conditions
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  const hasNotValidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid
  );

  if (hasNotValidInput) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(inactiveButtonClass);
  }
};

//listener for elements in form
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, errorClass) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  });

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      chekInputValidity(formElement, inputElement, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    }); 
  });
};

//turn-on validation
const enableValidation = ({
  formSelector, 
  inputSelector, 
  submitButtonSelector, 
  inactiveButtonClass, 
  
  errorClass}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(
      formElement, 
      inputSelector, 
      submitButtonSelector, 
      inactiveButtonClass,
      errorClass);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  errorClass: 'popup__input-error_active',
});