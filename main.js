(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.p="";var n=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=n,this._handlePhotoClick=o,this._cardElement=this._getTemplate(),this._photoCardImage=this._cardElement.querySelector(".photo-grid__photo"),this._likeButton=this._cardElement.querySelector(".photo-grid__like-button"),this._trashButton=this._cardElement.querySelector(".photo-grid__trash-button"),this._cardTitle=this._cardElement.querySelector(".photo-grid__title")}var n,o;return n=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-grid__item").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.toggle("photo-grid__like-button_checked")})),this._trashButton.addEventListener("click",(function(){e._cardElement.remove()})),this._photoCardImage.addEventListener("click",(function(){e._handlePhotoClick(e._name,e._link)}))}},{key:"createCard",value:function(){return this._photoCardImage.alt=this._name,this._photoCardImage.src=this._link,this._cardTitle.textContent=this._name,this._setEventListeners(),this._cardElement}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOutsideClick",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"enableAnimation",value:function(){this._popup.classList.add("popup_animated")}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("mousedown",this.close.bind(this)),this._popup.addEventListener("mousedown",this._handleOutsideClick.bind(this))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=s(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},a.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(s,e);var t,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(r){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e))._handleFormSubmit=t,n._formElement=n._popup.querySelector(".form"),n._inputElements=n._formElement.querySelectorAll(".form__text-input"),n}return t=s,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputElements.forEach((function(t){e[t.getAttribute("name")]=t.value})),e}},{key:"close",value:function(){this._formElement.reset(),a(p(s.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;a(p(s.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(){e._handleFormSubmit(e._getInputValues())}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(r);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=y(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(r){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPhoto=document.querySelector(".popup__photo"),t._popupPhotoCaption=document.querySelector(".popup__caption"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;_(v(u.prototype),"setEventListeners",this).call(this),this._popupPhoto.addEventListener("load",(function(){e._popupPhoto.classList.remove("popup__photo_hidden")}))}},{key:"open",value:function(e,t){this._popupPhoto.classList.add("popup__photo_hidden"),this._popupPhoto.src=t,this._popupPhoto.alt=e,this._popupPhotoCaption.textContent=e,_(v(u.prototype),"open",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r);function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var k=function(){function e(t){var n=t.userNameSelector,o=t.userJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userJobElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,job:this._userJobElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._userNameElement.textContent=e,this._userJobElement.textContent=t}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var S=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e,t){this._container.insertAdjacentElement(e,t)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=n.querySelector(t.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(t.inputSelector))}var t,n;return t=e,(n=[{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._toggleButtonState(),this._setEventListeners()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const C=e.p+"f34704208b90079f1cc5.jpg",L=e.p+"87bb09ef33c447126f75.jpg",P=e.p+"7e215d736867024ea9a8.jpg";var q=[{name:"Франкфурт-на-Майне",link:C},{name:"Львов",link:L},{name:"Москва",link:P},{name:"Минск",link:P},{name:"Санкт-Петербург",link:e.p+"cccffa2fb375a840b90a.jpg"},{name:"Карачаево-Черкесия",link:e.p+"fa41b1ba464ef28ed222.jpg"}],I=document.querySelector(".profile__edit-button"),B=document.querySelector(".profile__add-button"),R=document.querySelector(".form__text-input_type_name"),x=document.querySelector(".form__text-input_type_job");function T(e,t){V.open(e,t)}function A(e){return new n(e,"#photo-card",T).createCard()}var V=new E(".image-popup");V.setEventListeners(),V.enableAnimation();var N=new f(".profile-popup",(function(e){J.setUserInfo(e.name,e.job),N.close()}));N.setEventListeners(),N.enableAnimation();var D=new f(".card-popup",(function(e){var t=A({name:e.name,link:e.link});F.addItem("afterbegin",t),D.close()}));D.setEventListeners(),D.enableAnimation();var J=new k({userNameSelector:".profile__name",userJobSelector:".profile__job"}),U=function(e){var t={};return Array.from(document.querySelectorAll(e.formSelector)).forEach((function(n){var o=new j(e,n),r=n.getAttribute("name");t[r]=o,o.enableValidation()})),t}({formSelector:".form",inputSelector:".form__text-input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__text-input_type_error",errorClass:"form__input-error_visible"}),F=new S({items:q,renderer:function(e){var t=A(e);F.addItem("beforeend",t)}},".photo-grid__list");F.renderItems(),I.addEventListener("click",(function(){var e=J.getUserInfo();R.value=e.name,x.value=e.job,U.profile.resetValidation(),N.open()})),B.addEventListener("click",(function(){U["add-photo"].resetValidation(),D.open()}))})();