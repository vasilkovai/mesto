export default class Card {
  constructor(data, cardSelector, handlePreviewPicture) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;

    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.card__like')
    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._deleteButton = this._element.querySelector('.card__delete');
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
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._element;
  }

  //delete card
  _handleDeleteCard() {
    this._element.remove();
  }

  //like card
  _handleLikeIcon() {
    this._likeButton.classList.toggle('card__like_active');
  }
  
  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handlePreviewPicture(this._link, this._name));
    this._deleteButton.addEventListener('click', () => this._handleDeleteCard());
    this._likeButton.addEventListener('click', () => this._handleLikeIcon());
  };
};