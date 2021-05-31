export default class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo = () => {
    return {
      name: this._name.textContent, 
      about: this._about.textContent, 
      avatar: this._avatar.src
    };
  }

  setUserInfo = (user) => {
    this._name.textContent = user.name;
    this._about.textContent = user.about;
    this._avatar.src = user.avatar;
    this._id = user._id
  }

  getUserId() {
    return this._id
  }
}