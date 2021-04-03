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
const closeImgBtn = document.querySelector('.popup-img__close');


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
const сards = document.querySelector('.cards');

//input
const nameInput = document.querySelector('.popup__input_text_name');
const aboutInput = document.querySelector('.popup__input_text_about');
const cardNameInput = document.querySelector('.popup__input_card_name');
const cardLinkInput = document.querySelector('.popup__input_card_link');

//popup inner elements
const imgPopupImage = document.querySelector('.popup-img__image');
const imgPopupTitle = document.querySelector('.popup-img__title');


function togglePopupWindow(popup){
  popup.classList.toggle('popup_opened');
}

//open popup
openEditBtn.addEventListener('click', () => {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  togglePopupWindow(popupEdit)
});
openAddBtn.addEventListener('click', () => togglePopupWindow(popupAdd));

//close popup
closeEditBtn.addEventListener('click', () => togglePopupWindow(popupEdit));
closeAddBtn.addEventListener('click', () => togglePopupWindow(popupAdd));
closeImgBtn.addEventListener('click', () => togglePopupWindow(popupImg));


//edit profile
function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;

  togglePopupWindow(popupEdit);
}

//cards
initialCards.reverse();

function generateCards(item) {
  const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  cardTitle.textContent = item.name;
  cardImage.src = item.link;

  //delete cards
  const deleteCardBtn = cardElement.querySelector('.card__delete');
  deleteCardBtn.addEventListener('click', () => cardElement.remove());

  //like cards
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });

  //open img
  function imgClickHandler(evt) {
    evt.preventDefault();

    imgPopupImage.src = item.link;
    imgPopupTitle.textContent = item.name;
    togglePopupWindow(popupImg);
  }

  cardImage.addEventListener('click', imgClickHandler);

  сards.prepend(cardElement);
}

const mainCards = initialCards.forEach(generateCards);

//add new cards
const addCardHandler = evt => {
  evt.preventDefault();

  const item = {name: cardNameInput.value, link: cardLinkInput.value};

  generateCards(item);

  togglePopupWindow(popupAdd);
}

//listeners
editForm.addEventListener('submit', formSubmitHandler);
addForm.addEventListener('submit', addCardHandler);
