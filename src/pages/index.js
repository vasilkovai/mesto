import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import {
  popupEdit,
  popupAdd,
  popupAvatar,
  openEditBtn,
  openAddBtn,
  openAvatarBtn,
  cardItem,
  nameInput,
  aboutInput,
  validationElements,
} from '../utils/constants.js';

// get user info
const userInfo = new UserInfo({
  nameSelector: '.profile__name', 
  aboutSelector: '.profile__about', 
  avatarSelector: '.profile__avatar'});

// form validation
const editFormValidation = new FormValidator(validationElements, '.popup__form_edit')
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationElements, '.popup__form_add')
addFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(validationElements, '.popup__form_avatar')
avatarFormValidation.enableValidation();

// loading
function renderLoading(isLoading, popup) {
  if(isLoading) {
    popup.querySelector('.popup__save-button').textContent = 'Сохранение...'
  } else {
    if (popup === addCardPopup) {
      popup.querySelector('.popup__save-button').textContent = 'Создать'
    } 
    else {
      popup.querySelector('.popup__save-button').textContent = 'Сохранить'
    }
  }
}

//likes
function handleLikeIcon(item) {
  if (item.isLiked) {
    api
    .unlikeCard(item.getCardId())
    .then((res) => {
      item.likeCounter(res);
    })
    .catch(error => console.log(error))
  } else {
    api
    .likeCard(item.getCardId())
    .then((res) => {
      item.likeCounter(res);
    })
    .catch(error => console.log(error))
  }
}

// delete card
const deleteConfirmSubmitHandler = (card) => {
  function deleteCardHandler() {
    api
  .deleteCard(card.getCardId())
  .then(() => {
    card.handleDeleteCard();
    popupWithConfirm.close()
  })
  .catch(error => console.log(error))
  }
  popupWithConfirm.setConfirmSubmitHandler(deleteCardHandler)
  popupWithConfirm.open()
}

const popupWithConfirm = new PopupWithConfirm('.popup_confirm');
popupWithConfirm.setEventListeners()

// open popup picture
const popupWithImage = new PopupWithImage('.popup-img');
popupWithImage.setEventListeners();

function handlePreviewPicture(link, name) {
  popupWithImage.open(link, name);
}

// cards container
const createCard = (item) => {
  const card = new Card(item, '.card-template', handlePreviewPicture, handleLikeIcon, deleteConfirmSubmitHandler);
  const cardElement = card.generateCard(item);

  return cardElement;
};

const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createCard(item))
  }
},
  cardItem);

// add card
const addCardSubmitHandler = (item) => {
  renderLoading(true, popupAdd)
  api
  .addCard(item)
    .then((res) => {
      cardsList.prependItem(createCard(res));
      addCardPopup.close();
    })
    .catch(error => console.log(error))
    .finally(() => {
      renderLoading(false, popupAdd)
    }); 
}

const addCardPopup = new PopupWithForm('.popup_add_card', addCardSubmitHandler)
addCardPopup.setEventListeners();

openAddBtn.addEventListener('click', () => {
  addFormValidation.resetValidation();
  addCardPopup.open();
});

// avatar edit
const editAvatarSubmitHandler = (user) => {
  renderLoading(true, popupAvatar)
  api
  .editAvatar(user)
    .then((res) => {
      userInfo.setUserInfo(res)
      avatarEditPopup.close()
    })
    .catch(error => console.log(error))
    .finally(() => {
      renderLoading(false, popupAvatar)
    }); 
}

const avatarEditPopup = new PopupWithForm('.popup_avatar', editAvatarSubmitHandler)
avatarEditPopup.setEventListeners();

openAvatarBtn.addEventListener('click', () => {
  avatarFormValidation.resetValidation();
  avatarEditPopup.open();
});

// edit profile
const editProfileSubmitHandler = (user) => {
  renderLoading(true, popupEdit)
  api
  .editUserData(user)
    .then((res) => {
      userInfo.setUserInfo(res);
      editProfilePopup.close();
    })
    .catch(error => console.log(error))
    .finally(() => {
      renderLoading(false, popupEdit)
    }); 
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

// Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co',
  headers: {
    authorization: '1c2cc34b-8c65-4495-b42f-9244de414a15',
    'Content-Type': 'application/json'
  },
  cohortId: 'cohort-24',
});

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([user, items]) => {
    userInfo.setUserInfo(user);
    cardsList.renderItems(items);
  })
  .catch(error => console.log(error));

export {handlePreviewPicture}