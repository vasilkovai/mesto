import { initialCards } from './initialCards.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js';
import {
  openEditBtn,
  openAddBtn,
  popupEdit,
  popupAdd,
  editForm,
  addForm,
  nameProfile,
  aboutProfile,
  cardItem,
  nameInput,
  aboutInput,
  cardNameInput,
  cardLinkInput,
  validationElements
} from './constants.js';

//form validation
const editFormValidation = new FormValidator(validationElements, '.popup__form_edit')
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationElements, '.popup__form_add')
addFormValidation.enableValidation();

//open popup
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('click', closeOverlay);
};

export {openPopup}

openEditBtn.addEventListener('click', () => {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(popupEdit)
});

openAddBtn.addEventListener('click', () => {
  const submitButtonAdd = document.querySelector('.popup__save-button_add_card');

  if (cardNameInput.value.length === 0 && cardLinkInput.value.length === 0) {
    submitButtonAdd.setAttribute('disabled', true);
    submitButtonAdd.classList.add('popup__save-button_inactive');
  }

  openPopup(popupAdd)
});

//close popup
function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
  document.removeEventListener('click', closeOverlay);
};

function closeEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closeOverlay(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup) 
    }
};

//edit profile
function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;

  closePopup(popupEdit);
}

//cards container
function getCard(item) {
  const card = new Card(item, '.card-template');

  return card.generateCard(item);
}

initialCards.forEach((item) => {
  const cardElement = getCard(item)

  cardItem.append(cardElement);
});

//add new cards
const addCardHandler = (evt) => {
  evt.preventDefault();
  
  const item = {name: cardNameInput.value, link: cardLinkInput.value};

  cardItem.prepend(getCard(item));

  addForm.reset();

  closePopup(popupAdd);
}

//listeners
editForm.addEventListener('submit', formSubmitHandler);
addForm.addEventListener('submit', addCardHandler);

