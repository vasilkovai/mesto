export class Card {
  constructor(data, cardSelector, handlePreviewPicture) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector('.card__image');
    const cardTitle = this._element.querySelector('.card__title');  
    
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    return this._element;
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
    this._element.querySelector('.card__image').addEventListener('click', () => this._handlePreviewPicture(this._link, this._name));
    this._element.querySelector('.card__delete').addEventListener('click', () => this._handleDeleteCard());
    this._element.querySelector('.card__like').addEventListener('click', () => this._handleLikeIcon());
  };
};