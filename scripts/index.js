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

//popup
const popupEdit = document.querySelector('.popup_edit_profile');
const popupAdd = document.querySelector('.popup_add_card');
const popupImg = document.querySelector('.popup-img');

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

//popup inner elements
const imgPopupImage = document.querySelector('.popup-img__image');
const imgPopupTitle = document.querySelector('.popup-img__title');

//template
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');

//open popup
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('click', closeOverlay);
};

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

//create card
function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title'); 
  const cardImage = cardElement.querySelector('.card__image');

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  //delete card
  const deleteCardBtn = cardElement.querySelector('.card__delete');
  deleteCardBtn.addEventListener('click', () => cardElement.remove());

  //like card
  cardElement.querySelector('.card__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active');
  });
  
  //open img
  cardImage.addEventListener('click', () => imgClickHandler(item));

  return cardElement;
}

//open popup img
function imgClickHandler(item) {
  imgPopupImage.src = item.link;
  imgPopupImage.alt = item.name;
  imgPopupTitle.textContent = item.name;

  openPopup(popupImg);
}

//cards container
function getCard(cardElement, cardItem) {
  cardItem.prepend(createCard(cardElement));
}

initialCards.reverse().forEach((cardElement) => {
  getCard(cardElement, cardItem);
});

//add new cards
const addCardHandler = (evt) => {
  evt.preventDefault();
  
  const item = {name: cardNameInput.value, link: cardLinkInput.value};

  cardItem.prepend(createCard(item));

  addForm.reset();

  closePopup(popupAdd);
}

//listeners
editForm.addEventListener('submit', formSubmitHandler);
addForm.addEventListener('submit', addCardHandler);