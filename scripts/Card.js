import {openPopup} from './index.js'

const popupImg = document.querySelector('.popup-img');
const imgPopupImage = document.querySelector('.popup-img__image');
const imgPopupTitle = document.querySelector('.popup-img__title');

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    return this._element;
  }
  //open popup picture
  _handlePreviewPicture() {
    imgPopupImage.src = this._link;
    imgPopupImage.alt = this._name;
    imgPopupTitle.textContent = this._name;
    
    openPopup(popupImg);
  }

  //delete card
  _handleDeleteCard() {
    this._element.remove();
  }

  //like card
  _handleLikeIcon() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }
  
  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => this._handlePreviewPicture());
    this._element.querySelector('.card__delete').addEventListener('click', () => this._handleDeleteCard());
    this._element.querySelector('.card__like').addEventListener('click', () => this._handleLikeIcon());
  };
};