let popup = document.querySelector('.popup');
let openEditBtn = document.querySelector('.profile__edit-button');
let closeEditBtn = document.querySelector('.popup__close-button');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__edit-name');
let aboutInput = document.querySelector('.popup__edit-about');
let editProfile = document.querySelector('.popup__save-button');


function openPopup() {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

openEditBtn.addEventListener('click', openPopup);
closeEditBtn.addEventListener('click', closePopup);
editProfile.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;
  
}

formElement.addEventListener('submit', formSubmitHandler);

