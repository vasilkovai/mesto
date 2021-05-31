export default class Card {
  constructor(data, cardSelector, handlePreviewPicture, handleLikeIcon, deleteConfirmSubmitHandler, userId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner._id;
    this._cardId = data._id;
    this._userId = userId;

    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
    this._handleLikeIcon = handleLikeIcon;
    this._deleteConfirmSubmitHandler = deleteConfirmSubmitHandler;

    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.card__like')
    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._deleteButton = this._element.querySelector('.card__delete');
    this._likeCounter = this._element.querySelector('.card__likes')
  }

  getCardId() {
    return this._cardId
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
    this._showDeleteIcon();
    this.likeCounter();
    
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    
    return this._element;
  }

  // delete card
  handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _showDeleteIcon() {
    if(this._userId === this._owner) {
      this._element.querySelector('.card__delete').classList.remove('card__delete_hidden');
    }
  }

  //like card
  _handleLikeIcon() {
    this._likeButton.classList.toggle('card__like_active');
  }

  likeCounter(card) {
    if(card) {
        this._likes = card.likes
    }

    this._likeCounter.textContent = this._likes.length

    this.isLiked = this._likes.find(user => user._id === this._userId)
      if(this.isLiked) {
        this._likeButton.classList.add('card__like_active')
      } else {
        this._likeButton.classList.remove('card__like_active') 
      }
  }
  
  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handlePreviewPicture(this._link, this._name));
    this._deleteButton.addEventListener('click', () => this._deleteConfirmSubmitHandler(this));
    this._likeButton.addEventListener('click', () => this._handleLikeIcon(this));
  };
};