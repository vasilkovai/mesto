export default class Api {
  constructor({baseUrl, headers, cohortId}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._cohortId = cohortId;
  }
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
  }

  getUserData() {
    return fetch(`${this._baseUrl}/v1/${this._cohortId}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkStatus)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/v1/${this._cohortId}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkStatus)
  }

  editUserData(user) {
    return fetch(`${this._baseUrl}/v1/${this._cohortId}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: user.name,
        about: user.about,
      })
    })
    .then(this._checkStatus)
  }

  addCard(item) {
    return fetch(`${this._baseUrl}/v1/${this._cohortId}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      })
    })
    .then(this._checkStatus)
  }

  editAvatar(user) {
    return fetch(`${this._baseUrl}/v1/${this._cohortId}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: user.avatar,
      })
    })
    .then(this._checkStatus)
  }

  likeCard(id) {
    return fetch(`${this._baseUrl}/v1/${this._cohortId}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._checkStatus)
  }

  unlikeCard(id) {
    return fetch(`${this._baseUrl}/v1/${this._cohortId}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkStatus)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/v1/${this._cohortId}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkStatus)
  }
}
