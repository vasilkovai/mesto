let popup = document.querySelector('.popup');
let openEditBtn = document.querySelector('.profile__edit-button');
let closeEditBtn = document.querySelector('.popup__close-button');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_text_name');
let aboutInput = document.querySelector('.popup__input_text_about');

//Открытие формы для редактирования профиля
function openPopup() {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  popup.classList.add('popup_opened');
}

//Закрытие формы для редактирования профиля
function closePopup() {
  popup.classList.remove('popup_opened');
}

//Редактирование профиля
function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;

  closePopup();
}

openEditBtn.addEventListener('click', openPopup);
closeEditBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
