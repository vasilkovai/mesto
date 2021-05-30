//items
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//open buttons
const openEditBtn = document.querySelector('.profile__edit-button');
const openAddBtn = document.querySelector('.profile__add-button');
const openAvatarBtn = document.querySelector('.profile__avatar-button')
const openConfirmBtn = document.querySelector('.card__delete')

//popup
const popupEdit = document.querySelector('.popup_edit_profile');
const popupAdd = document.querySelector('.popup_add_card');
const popupImg = document.querySelector('.popup-img');
const popupAvatar = document.querySelector('.popup_avatar');


//forms
const editForm = document.querySelector('.popup__form_edit');
const addForm = document.querySelector('.popup__form_add');
const avatarForm = document.querySelector('.popup__form_avatar')

//content
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const cardItem = document.querySelector('.cards');

//popup inner elements 
const imgPopupImage = document.querySelector('.popup-img__image'); 
const imgPopupTitle = document.querySelector('.popup-img__title'); 

//input
const nameInput = document.querySelector('.popup__input_text_name');
const aboutInput = document.querySelector('.popup__input_text_about');
const cardNameInput = document.querySelector('.popup__input_card_name');
const cardLinkInput = document.querySelector('.popup__input_card_link');
const avatarLinkInput = document.querySelector('.popup__input_avatar_link');

//valid 
const validationElements = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    errorClass: 'popup__input-error_active',
};

export {
  initialCards,
  openEditBtn,
  openAddBtn,
  popupEdit,
  popupAdd,
  popupImg,
  editForm,
  addForm,
  nameProfile,
  aboutProfile,
  cardItem,
  imgPopupImage,
  imgPopupTitle,
  nameInput,
  aboutInput,
  cardNameInput,
  cardLinkInput,
  validationElements,
  openAvatarBtn,
  avatarForm,
  popupAvatar,
  avatarLinkInput,
  openConfirmBtn,
}


