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

//close buttons
const closeEditBtn = document.querySelector('.popup__close-button_edit');
const closeAddBtn = document.querySelector('.popup__close-button_add');
const closeImgBtn = document.querySelector('.popup__close-button_img');

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
const cards = document.querySelector('.cards');

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
};

openEditBtn.addEventListener('click', () => {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(popupEdit)
});
openAddBtn.addEventListener('click', () => openPopup(popupAdd));

//close popup
function closePopup(popup){
  popup.classList.remove('popup_opened');
};

closeEditBtn.addEventListener('click', () => closePopup(popupEdit));
closeAddBtn.addEventListener('click', () => closePopup(popupAdd));
closeImgBtn.addEventListener('click', () => closePopup(popupImg));

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

  //delete cards
  const deleteCardBtn = cardElement.querySelector('.card__delete');
  deleteCardBtn.addEventListener('click', () => cardElement.remove());

  //like cards
  cardElement.querySelector('.card__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active');
  });

  //open img
  function imgClickHandler() {
    imgPopupImage.src = item.link;
    imgPopupImage.alt = item.name;
    imgPopupTitle.textContent = item.name;
    openPopup(popupImg);
  }

  cardImage.addEventListener('click', imgClickHandler);

  return cardElement;
}

//cards container
function getCard(cardElement, cards) {
  cards.prepend(createCard(cardElement));
}

initialCards.reverse().forEach((cardElement) => {
  getCard(cardElement, cards);
});

//add new cards

const addCardHandler = evt => {
  evt.preventDefault();

  const item = {name: cardNameInput.value, link: cardLinkInput.value};

  cards.prepend(createCard(item));

  cardNameInput.value = '';
  cardLinkInput.value = '';

  closePopup(popupAdd);
}

//listeners
editForm.addEventListener('submit', formSubmitHandler);
addForm.addEventListener('submit', addCardHandler);
