import { initialCards } from './initialCards.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js';

//open buttons
const openEditBtn = document.querySelector('.profile__edit-button');
const openAddBtn = document.querySelector('.profile__add-button');

//popup
const popupEdit = document.querySelector('.popup_edit_profile');
const popupAdd = document.querySelector('.popup_add_card');

//forms
const editForm = document.querySelector('.popup__form_edit');
const addForm = document.querySelector('.popup__form_add');

//content
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const cardItem = document.querySelector('.cards');

//input
const nameInput = document.querySelector('.popup__input_text_name');
const aboutInput = document.querySelector('.popup__input_text_about');
const cardNameInput = document.querySelector('.popup__input_card_name');
const cardLinkInput = document.querySelector('.popup__input_card_link');

//valid 
const validationElements = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    errorClass: 'popup__input-error_active',
};

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

