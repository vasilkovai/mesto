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
  cardItem,
  nameInput,
  aboutInput,
  validationElements,
} from '../utils/constants.js';

// form validation
const editFormValidation = new FormValidator(validationElements, '.popup__form_edit')
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationElements, '.popup__form_add')
addFormValidation.enableValidation();

// open popup picture
const popupWithImage = new PopupWithImage('.popup-img');
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

  cardsList.prependItem(createCard(item));

  addCardPopup.close();
}

const addCardPopup = new PopupWithForm('.popup_add_card', addCardSubmitHandler)
addCardPopup.setEventListeners();

openAddBtn.addEventListener('click', () => {

  addFormValidation.resetValidation();

  addCardPopup.open();
});

// edit profile
const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about'});

const editProfileSubmitHandler = (user) => {
  userInfo.setUserInfo(user);

  editProfilePopup.close();
}

const editProfilePopup = new PopupWithForm('.popup_edit_profile', editProfileSubmitHandler)
editProfilePopup.setEventListeners();

openEditBtn.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();

  nameInput.value = profileInfo.name;
  aboutInput.value = profileInfo.about;

  editFormValidation.resetValidation();

  editProfilePopup.open()
});

export {handlePreviewPicture}