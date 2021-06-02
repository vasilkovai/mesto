(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseUrl,r=e.headers,o=e.cohortId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r,this._cohortId=o}var n,r;return n=t,(r=[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/v1/").concat(this._cohortId,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkStatus)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/v1/").concat(this._cohortId,"/cards"),{method:"GET",headers:this._headers}).then(this._checkStatus)}},{key:"editUserData",value:function(e){return fetch("".concat(this._baseUrl,"/v1/").concat(this._cohortId,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/v1/").concat(this._cohortId,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/v1/").concat(this._cohortId,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkStatus)}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/v1/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkStatus)}},{key:"unlikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/v1/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/v1/").concat(this._cohortId,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._owner=t.owner._id,this._cardId=t._id,this._userId=a,this._cardSelector=n,this._handlePreviewPicture=r,this._handleLikeIcon=o,this._deleteConfirmSubmitHandler=i,this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".card__like"),this._cardImage=this._element.querySelector(".card__image"),this._cardTitle=this._element.querySelector(".card__title"),this._deleteButton=this._element.querySelector(".card__delete"),this._likeCounter=this._element.querySelector(".card__likes")}var t,r;return t=e,(r=[{key:"getCardId",value:function(){return this._cardId}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._showDeleteIcon(),this.likeCounter(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._element}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_showDeleteIcon",value:function(){this._userId===this._owner&&this._element.querySelector(".card__delete").classList.remove("card__delete_hidden")}},{key:"_handleLikeIcon",value:function(){this._likeButton.classList.toggle("card__like_active")}},{key:"likeCounter",value:function(e){var t=this;e&&(this._likes=e.likes),this._likeCounter.textContent=this._likes.length,this.isLiked=this._likes.find((function(e){return e._id===t._userId})),this.isLiked?this._likeButton.classList.add("card__like_active"):this._likeButton.classList.remove("card__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){return e._handlePreviewPicture(e._link,e._name)})),this._deleteButton.addEventListener("click",(function(){return e._deleteConfirmSubmitHandler(e)})),this._likeButton.addEventListener("click",(function(){return e._handleLikeIcon(e)}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup-img__image"),t._title=t._popup.querySelector(".popup-img__title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.alt=t,this._title.textContent=t,l(p(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),a}(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(){var e={};return n._inputList.forEach((function(t){e[t.name]=t.value})),e},(o="_getInputValues")in(r=k(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._submitHandler=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;v(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){this._form.reset(),v(g(a.prototype),"close",this).call(this)}},{key:"setSubmitHandler",value:function(e){this._submitHandler=e}}])&&y(t.prototype,n),a}(u);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(){function e(t){var n=this,r=t.nameSelector,o=t.aboutSelector,i=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"getUserInfo",(function(){return{name:n._name.textContent,about:n._about.textContent,avatar:n._avatar.src}})),C(this,"setUserInfo",(function(e){n._name.textContent=e.name,n._about.textContent=e.about,n._avatar.src=e.avatar,n._id=e._id})),this._name=document.querySelector(r),this._about=document.querySelector(o),this._avatar=document.querySelector(i)}var t,n;return t=e,(n=[{key:"getUserId",value:function(){return this._id}}])&&w(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.inputSelector,o=t.submitButtonSelector,i=t.inactiveButtonClass,a=t.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=r,this._submitButtonSelector=o,this._inactiveButtonClass=i,this._errorClass=a,this._form=document.querySelector(n),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.classList.remove(this._errorClass),t.textContent=""}},{key:"_chekInputValidity",value:function(e){var t=!e.validity.valid,n=e.validationMessage;t?this._showInputError(e,n):this._hideInputError(e)}},{key:"_hasNotValidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasNotValidInput()?(this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass)):(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._inactiveButtonClass))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._toggleButtonState()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._chekInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&E(t.prototype,n),e}(),O=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__add-button"),P=document.querySelector(".profile__avatar-button"),j=(document.querySelector(".card__delete"),document.querySelector(".popup_edit_profile")),B=document.querySelector(".popup_add_card"),U=(document.querySelector(".popup-img"),document.querySelector(".popup_avatar")),T=(document.querySelector(".popup__form_edit"),document.querySelector(".popup__form_add"),document.querySelector(".popup__form_avatar"),document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelector(".cards")),R=(document.querySelector(".popup-img__image"),document.querySelector(".popup-img__title"),document.querySelector(".popup__input_text_name")),x=document.querySelector(".popup__input_text_about"),A=(document.querySelector(".popup__input_card_name"),document.querySelector(".popup__input_card_link"),document.querySelector(".popup__input_avatar_link"),{inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",errorClass:"popup__input-error_active"});function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=new I({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"}),H=new L(A,".popup__form_edit");H.enableValidation();var N=new L(A,".popup__form_add");N.enableValidation();var J=new L(A,".popup__form_avatar");function G(e,t){t.querySelector(".popup__save-button").textContent=e?"Сохранение...":t===X?"Создать":"Сохранить"}function M(e){e.isLiked?ee.unlikeCard(e.getCardId()).then((function(t){e.likeCounter(t)})).catch((function(e){return console.log(e)})):ee.likeCard(e.getCardId()).then((function(t){e.likeCounter(t)})).catch((function(e){return console.log(e)}))}J.enableValidation();var z=function(e){$.setSubmitHandler((function(){ee.deleteCard(e.getCardId()).then((function(){e.handleDeleteCard(),$.close()})).catch((function(e){return console.log(e)}))})),$.open()},$=new S(".popup_confirm");$.setEventListeners();var F=new _(".popup-img");function K(e,t){F.open(e,t)}F.setEventListeners();var Q=function(e){return new r(e,".card-template",K,M,z,V.getUserId()).generateCard(e)},W=new i({renderer:function(e){W.addItem(Q(e))}},T),X=new S(".popup_add_card",(function(e){G(!0,B),ee.addCard(e).then((function(e){W.prependItem(Q(e)),X.close()})).catch((function(e){return console.log(e)})).finally((function(){G(!1,B)}))}));X.setEventListeners(),q.addEventListener("click",(function(){N.resetValidation(),X.open()}));var Y=new S(".popup_avatar",(function(e){G(!0,U),ee.editAvatar(e).then((function(e){V.setUserInfo(e),Y.close()})).catch((function(e){return console.log(e)})).finally((function(){G(!1,U)}))}));Y.setEventListeners(),P.addEventListener("click",(function(){J.resetValidation(),Y.open()}));var Z=new S(".popup_edit_profile",(function(e){G(!0,j),ee.editUserData(e).then((function(e){V.setUserInfo(e),Z.close()})).catch((function(e){return console.log(e)})).finally((function(){G(!1,j)}))}));Z.setEventListeners(),O.addEventListener("click",(function(){var e=V.getUserInfo();R.value=e.name,x.value=e.about,H.resetValidation(),Z.open()}));var ee=new t({baseUrl:"https://mesto.nomoreparties.co",headers:{authorization:"1c2cc34b-8c65-4495-b42f-9244de414a15","Content-Type":"application/json"},cohortId:"cohort-24"});Promise.all([ee.getUserData(),ee.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];V.setUserInfo(o),W.renderItems(i)})).catch((function(e){return console.log(e)}))})();