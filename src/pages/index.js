import './index.css'
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import {
  initialCards,
  openEditBtn,
  openAddBtn,
  popupEdit,
  popupAdd,
  cardItem,
  nameInput,
  aboutInput,
  cardNameInput,
  cardLinkInput,
  validationElements,
  popupImg,
} from '../utils/constants.js';

// form validation
const editFormValidation = new FormValidator(validationElements, '.popup__form_edit')
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationElements, '.popup__form_add')
addFormValidation.enableValidation();

// open popup picture
const popupWithImage = new PopupWithImage(popupImg);
popupWithImage.setEventListeners();

function handlePreviewPicture(link, name) {
  popupWithImage.open(link, name);
}

// cards container
const createCard = (item) => {
  const card = new Card(item, '.card-template', handlePreviewPicture);
  const cardElement = card.generateCard(item);

  return cardElement;
};

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item))
  }
},
  cardItem);

cardsList.renderItems();


// add card
const addCardSubmitHandler = (item) => {

  cardItem.prepend(createCard(item));

  addCardPopup.close();
}

const addCardPopup = new PopupWithForm(popupAdd, addCardSubmitHandler)
addCardPopup.setEventListeners();

openAddBtn.addEventListener('click', () => {
  const submitButtonAdd = document.querySelector('.popup__save-button_add_card');

  if (cardNameInput.value.length === 0 && cardLinkInput.value.length === 0) {
    submitButtonAdd.setAttribute('disabled', true);
    submitButtonAdd.classList.add('popup__save-button_inactive');
  }

  addCardPopup.open();
});

// edit profile
const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about'});

const editProfileSubmitHandler = (user) => {
  userInfo.setUserInfo(user);

  editProfilePopup.close();
}

const editProfilePopup = new PopupWithForm(popupEdit, editProfileSubmitHandler)
editProfilePopup.setEventListeners();

openEditBtn.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();

  nameInput.value = profileInfo.name;
  aboutInput.value = profileInfo.about;

  editFormValidation.resetErrorMessage();

  editProfilePopup.open()
});

export {handlePreviewPicture}