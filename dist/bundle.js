/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Controller_HomeController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _Controller_ProfilController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);




const {
  photographers
} = await (0,_services__WEBPACK_IMPORTED_MODULE_1__.getData)();

window.onload = () => {
  if (window.location.hash) {
    (0,_Controller_ProfilController__WEBPACK_IMPORTED_MODULE_3__["default"])(photographers, window.location.hash.substring(1));
  }

  history.pushState(null, null, window.location.pathname + window.location.hash);
  const links = document.querySelectorAll('.data-link');
  let url = '';
  links.forEach(element => {
    element.addEventListener('click', e => {
      e.preventDefault();
      url = e.target.closest('a').href;
      history.pushState(null, null, window.location.pathname + url);
    });
  });
  (0,_Controller_HomeController__WEBPACK_IMPORTED_MODULE_2__["default"])(photographers);
};

const renderPage = () => {
  const hash = window.location.hash.substring(1);

  if (hash !== '' && hash !== 'main-content') {
    (0,_Controller_ProfilController__WEBPACK_IMPORTED_MODULE_3__["default"])(photographers, hash);
  } else {
    (0,_Controller_HomeController__WEBPACK_IMPORTED_MODULE_2__["default"])(photographers);
  }
};

window.onpopstate = renderPage;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "createDOMElement": () => (/* binding */ createDOMElement)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * 
 * @returns Return data json from api url
 */

const getData = async () => {
  try {
    const response = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.path.API_URL);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
/**
 * Create a DOM element and set attributes if needed
 * @param {string} tag 
 * @param {Array|null} className
 * @param {Array|null} attributes
 * @param {string} textContent
 * @returns {object} DOM Element
 */


const createDOMElement = (tag, className, attributes, textContent) => {
  const DOMElement = document.createElement(tag);

  if (className?.length > 0) {
    className.forEach(classe => {
      DOMElement.classList.add(classe);
    });
  }

  if (attributes) {
    attributes.forEach(attribute => {
      DOMElement.setAttribute(attribute.name, attribute.value);
    });
  }

  if (textContent) {
    DOMElement.textContent = textContent;
  }

  return DOMElement;
};



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "path": () => (/* binding */ path)
/* harmony export */ });
const path = {
  API_URL: "src/js/data/photographers.json",
  USER_THUMB: "assets/photographers/",
  MEDIA_IMG_THUMB: "assets/medias/img/thumbs/",
  MEDIA_IMG_WIDE: "assets/medias/img/wide/",
  MEDIA_VIDEO_THUMB: "assets/medias/video/thumbs/",
  MEDIA_VIDEO_WIDE: "assets/medias/video/wide/"
};

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Views_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const HomeController = photographers => {
  (0,_Views_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])(photographers);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeController);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _Models_Photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _components_home_photographerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);





const home = async photographers => {
  /*Set document title and add class on body */
  document.title = 'Fisheye';
  document.querySelector('body').className = 'home-page';
  /*Remove elements from profil page */

  const elmentsToRemove = [document.querySelector('section.hero-photographer'), document.querySelector('section.medias-section'), document.querySelector('aside'), document.querySelector('.filter-container'), document.querySelector('.modal-form'), document.querySelector('.modal-media')];
  elmentsToRemove.forEach(elt => {
    if (elt) {
      elt.remove();
    }
  });
  /*Create header */

  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])('Nos photographes');
  const main = document.getElementById('main-content');
  /*Create list of photographer only if not exist */

  if (!document.querySelector('section.photographer-section')) {
    const wrapper = (0,_services__WEBPACK_IMPORTED_MODULE_3__.createDOMElement)('section', ['photographer-section'], [{
      name: 'id',
      value: 'list'
    }]);
    photographers.forEach(photographer => wrapper.append((0,_components_home_photographerCard__WEBPACK_IMPORTED_MODULE_2__["default"])(new _Models_Photographer__WEBPACK_IMPORTED_MODULE_1__["default"](photographer))));
    main.append(wrapper);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const header = title => {
  const header = document.querySelector('header');
  /*Create logo link only if not exist*/

  if (!document.querySelector('header a')) {
    const link = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('a', ['data-link', 'logo-link'], [{
      name: 'href',
      value: '#'
    }]);
    const logo = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("img", ['logo'], [{
      name: 'alt',
      value: 'Fisheye Home page'
    }, {
      name: 'src',
      value: 'assets/images/logo.png'
    }, {
      name: 'lang',
      value: 'en'
    }]);
    link.append(logo);
    header.append(link);
  }
  /*Create header h1 only if not exist & only on home. (Title is not passed to header() in profil page) */


  if (!document.querySelector('header h1') && title) {
    const headerTitle = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('h1', '', '', title);
    header.append(headerTitle);
  }
  /*Remove homepage header h1 when navigate to profil page */


  if (!document.querySelector('body').classList.contains('home-page') && document.querySelector('header h1')) {
    document.querySelector('header h1').remove();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Photographer {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
  }
  /**
   * Get all medias of a photographer
   * @returns {Object}
   */


  async getMedias() {
    const {
      media
    } = await (0,_services__WEBPACK_IMPORTED_MODULE_0__.getData)();
    return media.filter(media => this.id === parseInt(media.photographerId));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photographer);

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const photographerCard = photographer => {
  const article = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('article', ['photographer']);
  const link = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('a', ['photographer-link', 'data-link'], [{
    name: 'href',
    value: `#${photographer.id}`
  }]);
  const mediaContainer = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['avatar']);
  const img = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('img', '', [{
    name: 'src',
    value: _constants__WEBPACK_IMPORTED_MODULE_1__.path.USER_THUMB + photographer.portrait
  }, {
    name: 'alt',
    value: photographer.name
  }]);
  mediaContainer.append(img);
  const title = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('h2', '', '', photographer.name);
  link.append(mediaContainer, title);
  const location = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('h3', '', '', `${photographer.country}, ${photographer.city}`);
  const tagline = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('p', ['tagline'], '', photographer.tagline);
  const price = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('p', ['price'], '', `${photographer.price}€/jour`);
  article.append(link, location, tagline, price);
  return article;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photographerCard);

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Views_pages_profil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _Models_Photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * Return view profil with data of a photographer
 * @param {object} photographers 
 * @param {string} id 
 */

const ProfilController = async (photographers, id) => {
  const filtered = photographers.filter(photographer => photographer.id === parseInt(id));
  const photographer = new _Models_Photographer__WEBPACK_IMPORTED_MODULE_1__["default"](filtered[0]);
  (0,_Views_pages_profil__WEBPACK_IMPORTED_MODULE_0__["default"])(photographer, await photographer.getMedias());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilController);

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _components_profil_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _components_profil_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _Models_mediaFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _components_profil_likesCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _components_profil_filter_customSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _components_contactForm_contactUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var _components_profil_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _components_profil_lightbox_lightboxUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);










const profil = (photographer, medias) => {
  /*Update title document and add class on body*/
  document.title = `Fisheye | ${photographer.name}`;
  document.querySelector("body").className = 'photographer-page';
  /*Create header */

  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  /* Remove elements */

  const eltToRemove = [document.querySelector("#list"), document.querySelector('.hero-photographer')];
  eltToRemove.forEach(elt => {
    if (elt) {
      elt.remove();
    }
  });
  /*Create hero with photographer */

  const heroSection = (0,_components_profil_hero__WEBPACK_IMPORTED_MODULE_1__["default"])(photographer);
  /*Get and sort medias */

  const getMedias = medias;
  const mediaSorted = [];
  getMedias.forEach(media => mediaSorted.push((0,_Models_mediaFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(media)));
  /*Send media to gallery */

  const galleryPhotographer = (0,_components_profil_gallery__WEBPACK_IMPORTED_MODULE_2__["default"])(mediaSorted);
  const main = document.querySelector('#main-content');
  /*Set aside with counter & price */

  const counter = (0,_components_profil_likesCounter__WEBPACK_IMPORTED_MODULE_4__["default"])(mediaSorted, photographer.price);
  main.append(heroSection, galleryPhotographer, counter);
  /*Add select for filter */

  (0,_components_profil_filter_customSelect__WEBPACK_IMPORTED_MODULE_5__["default"])(medias);
  /*Create modals (contact and lightbox) */

  (0,_components_contactForm_contactUI__WEBPACK_IMPORTED_MODULE_6__["default"])(photographer.name);
  (0,_components_profil_lightbox_lightboxUI__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_components_profil_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_7__["default"])(mediaSorted);
  /*Set focus on h1 for accessibility */

  document.querySelector('.hero-photographer h1').focus();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profil);

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const hero = photographer => {
  let heroSection = document.querySelector('section.hero-photographer');

  if (heroSection) {
    heroSection.remove();
  } else {
    heroSection = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('section', ['hero-photographer']);
  }

  const wrapperDetails = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div');
  const name = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('h1', '', [{
    name: 'tabindex',
    value: 0
  }], photographer.name);
  const location = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('p', ['location'], '', photographer.city + ', ' + photographer.country);
  const tagline = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('p', ['tagline'], '', photographer.tagline);
  wrapperDetails.append(name, location, tagline);
  const contact = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['contact-button', 'modal-trigger'], [{
    name: 'type',
    value: 'button'
  }, {
    name: 'data-modal',
    value: 'modal-form'
  }], 'Contactez-moi');
  const imgWrapper = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['avatar']);
  const img = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('img', '', [{
    name: 'src',
    value: _constants__WEBPACK_IMPORTED_MODULE_1__.path.USER_THUMB + photographer.portrait
  }, {
    name: 'alt',
    value: photographer.name
  }]);
  imgWrapper.append(img);
  heroSection.append(wrapperDetails, contact, imgWrapper);
  return heroSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mediaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _filter_mediasFiltersUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);




const gallery = medias => {
  /* Remove potential previous gallery */
  let gallerySection = document.querySelector('section.medias-section');

  if (gallerySection) {
    gallerySection.remove();
  }

  gallerySection = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('section', ['medias-section']);
  const mediasWrapper = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['medias-wrapper']);
  medias.forEach(media => mediasWrapper.append((0,_mediaCard__WEBPACK_IMPORTED_MODULE_1__["default"])(media)));
  gallerySection.append(_filter_mediasFiltersUI__WEBPACK_IMPORTED_MODULE_2__["default"], mediasWrapper);
  return gallerySection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _icons_like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



const mediaCard = media => {
  const card = document.createElement('article');
  card.classList.add('media-card');
  const lightboxLink = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('a', ['lightbox-link', 'modal-trigger'], [{
    name: 'data-type',
    value: media.type
  }, {
    name: 'id',
    value: media.id
  }, {
    name: 'role',
    value: 'button'
  }, {
    name: 'tabindex',
    value: 0
  }, {
    name: 'title',
    value: 'Open in the lightbox'
  }, {
    name: 'data-src',
    value: media.src
  }, {
    name: 'data-modal',
    value: 'modal-media'
  }]);
  const img = document.createElement('img');
  img.setAttribute('alt', media.alt ?? media.title);
  img.setAttribute('src', media.srcThumb);
  img.setAttribute('data-modal', 'modal-media');
  lightboxLink.append(img);
  const legend = document.createElement('div');
  legend.className = 'media-legend';
  const title = document.createElement('h3');
  title.textContent = media.title;
  const likeCounter = document.createElement('span');
  likeCounter.textContent = media.likes;
  const likeButton = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['like-button'], [{
    name: 'aria-label',
    value: 'likes'
  }]);
  const likeIcon = (0,_icons_like__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const updateCount = () => {
    const mainCounter = document.querySelector('aside span.counter');
    /*User can like only one time */

    if (!media._isLiked) {
      likeCounter.textContent++;
      mainCounter.textContent++;
      media._isLiked = true;
    }
  };

  likeButton.addEventListener('click', updateCount);
  likeButton.append(likeIcon);
  legend.append(title, likeCounter, likeButton);
  card.append(lightboxLink, legend);
  return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediaCard);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const likeSvg = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 20 20');
  svg.setAttribute('aria-hidden', true);
  const likePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  likePath.setAttribute('d', 'M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z');
  svg.append(likePath);
  return svg;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeSvg);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const mediasFilters = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['filter-container']);
const options = {
  popular: 'Popularité',
  title: 'Titre'
};
const listboxArea = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['listbox-area']);
const leftArea = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['left-area']);
const label = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', ['label'], [{
  name: 'id',
  value: 'select-label'
}], 'Trier par');
const optionsWrapper = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', '', [{
  name: 'id',
  value: 'options-wrapper'
}]);
const selectedOpt = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', '', [{
  name: 'id',
  value: 'selected-opt'
}, {
  name: 'aria-haspopup',
  value: 'listbox'
}, {
  name: 'aria-labelledby',
  value: 'select-label selected-opt'
}], options[Object.keys(options)[0]]);
const list = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('ul', ['hidden'], [{
  name: 'id',
  value: 'options-list'
}, {
  name: 'role',
  value: 'listbox'
}, {
  name: 'aria-labelledby',
  value: 'select-label'
}, {
  name: 'tabindex',
  value: -1
}]);

for (const [key, value] of Object.entries(options)) {
  let optionLi = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('li', '', [{
    name: 'id',
    value: key
  }, {
    name: 'role',
    value: 'option'
  }, {
    name: 'tabindex',
    value: 0
  }], value);
  list.append(optionLi);
}

optionsWrapper.append(selectedOpt, list);
leftArea.append(label, optionsWrapper);
listboxArea.append(leftArea);
mediasFilters.append(listboxArea);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediasFilters);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);



const mediaFactory = data => {
  if (data.image) {
    return new _Image__WEBPACK_IMPORTED_MODULE_0__["default"](data);
  } else if (data.video) {
    return new _Video__WEBPACK_IMPORTED_MODULE_1__["default"](data);
  } else {
    return 'Media format unknown';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediaFactory);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



class ImageMedia extends _Media__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data, isLiked) {
    super(data, isLiked);
    this.type = "image";
    this.src = _constants__WEBPACK_IMPORTED_MODULE_1__.path.MEDIA_IMG_WIDE + data.image;
    this.srcThumb = _constants__WEBPACK_IMPORTED_MODULE_1__.path.MEDIA_IMG_THUMB + data.image;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageMedia);

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Media {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.isLiked = false;
    this.alt = data.alt ?? null;
  }
  /**
   * @param {boolean} value
   */


  set isLiked(value) {
    this._isLiked = value;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



class Video extends _Media__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data, isLiked) {
    super(data, isLiked);
    this.type = 'video';
    this.src = _constants__WEBPACK_IMPORTED_MODULE_1__.path.MEDIA_VIDEO_WIDE + data.video;
    this.srcThumb = _constants__WEBPACK_IMPORTED_MODULE_1__.path.MEDIA_VIDEO_THUMB + data.video.replace('.mp4', 'mp4.png');
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _icons_like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



const likesCounter = (data, price) => {
  const aside = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('aside');
  let count = 0;
  data.forEach(like => count += like.likes);
  const counter = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', ['counter'], '', count);
  const likeButton = (0,_icons_like__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const tarif = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', ['price'], '', price + '€ / jour');
  aside.append(counter, likeButton, tarif);
  return aside;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesCounter);

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gallerySort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);


const customSelect = medias => {
  const button = document.getElementById('selected-opt');
  const listbox = document.getElementById('options-list');
  const options = document.querySelectorAll('[role=option]');
  /**
   * Set focus on an item. Class focus on item & aria-activedescendant on listbox
   * @param {object} item 
   */

  const focusItem = item => {
    let focusedItem = document.querySelector('.focused');

    if (focusedItem) {
      focusedItem.classList.remove('focused');
    }

    item.classList.add('focused');
    listbox.setAttribute('aria-activedescendant', item.id);
  };
  /**
   * Select a item and hide listbox
   */


  const selectItem = () => {
    let focusedItem = document.querySelector('.focused');
    button.textContent = focusedItem.textContent;
    hideList();
  };
  /**
   * Add listener on keyboard
   */


  const keyEventsListener = () => {
    listbox.addEventListener('keydown', keyEvents);
  };
  /* Add listener on focus list to trigger listener on keyboad */


  listbox.addEventListener('focus', keyEventsListener);
  /**
   * Execute functions depending on keys pressed
   * @param event  
   */

  const keyEvents = e => {
    e.preventDefault();

    if (e.code === 'Enter' || e.code === 'Space') {
      selectItem();
    }
  };
  /**
   * Show the list of options
   */


  const showList = () => {
    listbox.classList.remove('hidden');
    button.setAttribute('aria-expanded', true);

    if (listbox.getAttribute('aria-activedescendant')) {
      document.getElementById(listbox.getAttribute('aria-activedescendant')).focus();
    } else {
      document.querySelector('li').focus();
    }
  };

  button.addEventListener('click', showList);
  /**
   * Sort medias
   */

  let observer = new MutationObserver(mutationRecords => sortMedias(mutationRecords, medias));
  observer.observe(listbox, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['aria-activedescendant']
  });

  const sortMedias = (records, medias) => {
    let mediaSorted = medias;
    let sortFilter = document.querySelector('#options-list').getAttribute('aria-activedescendant');

    if (records[0].oldValue !== sortFilter) {
      mediaSorted = medias.sort((a, b) => {
        if (sortFilter === 'popular') {
          return b.likes - a.likes;
        }

        if (sortFilter === 'title') {
          let titleA = a.title.toLowerCase();
          let titleB = b.title.toLowerCase();

          if (titleA < titleB) {
            return -1;
          }

          if (titleA > titleB) {
            return 1;
          }

          return 0;
        }
      });
      (0,_gallerySort__WEBPACK_IMPORTED_MODULE_0__["default"])(mediaSorted);
    }
  };
  /**
   * Hide the list of options and trigger medias sort
   */


  const hideList = () => {
    listbox.classList.add('hidden');
    button.removeAttribute('aria-expanded');
  };

  listbox.addEventListener('blur', hideList);
  /* Focus item and select on mouse click    */

  const clickItem = e => {
    focusItem(e);
    selectItem();
  };
  /*Add listeners on options */


  options.forEach(option => option.addEventListener("click", e => clickItem(e.target)));
  options.forEach(option => option.addEventListener("keydown", e => {
    if (e.code === 'Enter') {
      clickItem(option);
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customSelect);

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mediaCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _Models_mediaFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _lightbox_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);



/**
 * Reinit lightbox with medias filtered
 * @param {Array} medias 
 */

const gallerySort = medias => {
  const gallery = document.querySelector('.medias-wrapper');
  const cards = document.querySelectorAll('.media-card');
  cards.forEach(card => card.remove());
  const mediaSorted = [];
  medias.forEach(media => mediaSorted.push((0,_Models_mediaFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(media)));
  mediaSorted.forEach(media => gallery.append((0,_mediaCard__WEBPACK_IMPORTED_MODULE_0__["default"])(media)));
  (0,_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"])(mediaSorted);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallerySort);

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);




const lightbox = medias => {
  /*DOM Elements */
  const lightboxArticle = document.querySelector('.modal-media article');
  const lightbox = document.querySelector('.modal-media article .media-container');
  const mediaTitle = document.querySelector('.modal-media h1');
  const slideButton = document.querySelectorAll('.slide-button');
  const leftArrow = document.querySelector('.left-button');
  const rightArrow = document.querySelector('.right-button');
  const cards = document.querySelectorAll('.lightbox-link');
  const close = document.querySelector('.modal-media .close-modal');
  /*Init variables */

  let currentIndex = 0;
  let firstSlide = false;
  let lastSlide = false;
  /*Init lightbox on click in gallery*/

  const onEnterCard = (e, card) => {
    (0,_utils_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)('modal-media');
    mediaModal(card ?? e.currentTarget, medias);
    document.addEventListener('keydown', keyEvents);
  };
  /*Add listener on each media card when lightbox is loaded*/


  cards.forEach(card => {
    card.addEventListener('click', e => onEnterCard(e));
    card.addEventListener('keydown', e => {
      if (e.code === 'Enter') {
        e.preventDefault;
        onEnterCard(null, card);
      }
    });
  });
  /*Add listener on Escape*/

  const escapeKey = e => {
    if (e.code === 'Escape') {
      e.preventDefault();
      document.removeEventListener('keydown', keyEvents);
      cards.forEach(card => {
        card.removeEventListener('click', e => onEnterCard(e));
        card.removeEventListener('keydown', e => {
          if (e.code === 'Enter') {
            e.preventDefault;
            onEnterCard(null, card);
          }
        });
      });
      slideButton.forEach(button => button.removeEventListener('click', sliderOnclick));
      (0,_utils_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(document.querySelector('.media').getAttribute('data-id'));
    }
  };

  document.addEventListener('keydown', escapeKey);
  /*On close remove listeners and close modal */

  close.addEventListener('click', () => {
    document.removeEventListener('keydown', keyEvents);
    cards.forEach(card => {
      card.removeEventListener('click', e => onEnterCard(e));
      card.removeEventListener('keydown', e => {
        if (e.code === 'Enter') {
          e.preventDefault;
          onEnterCard(null, card);
        }
      });
    });
    slideButton.forEach(button => button.removeEventListener('click', sliderOnclick));
    (0,_utils_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(document.querySelector('.media').getAttribute('data-id'));
  });
  /*On click slider buttons execute slider('direction', 'current media')*/

  const sliderOnclick = e => {
    slider(e.target.getAttribute('data-direction'), document.querySelector('.media-current'));
  };
  /*Arrow keys events */


  const keyEvents = e => {
    if (e.code === 'ArrowRight') {
      e.preventDefault();
      rightArrow.focus();
      if (!lastSlide) slider('right', document.querySelector('.media-current'));
    }

    if (e.code === 'ArrowLeft') {
      e.preventDefault();
      leftArrow.focus();
      if (!firstSlide) slider('left', document.querySelector('.media-current'));
    }
  };
  /**
   * Hide left/right arrow for first and last slide
   * @param {integer} index 
   */


  const displayArrows = index => {
    if (index === 0) {
      leftArrow.classList.add('hidden');
      firstSlide = true;
    } else {
      firstSlide = false;
    }

    if (index === medias.length - 1) {
      rightArrow.classList.add('hidden');
      lastSlide = true;
    } else {
      lastSlide = false;
    }
  };
  /**
   * Create DOM slide
   * @param {Object} media 
   */


  const createSlide = ({
    src,
    type,
    title,
    alt
  }) => {
    const slideElmtsToRemove = document.querySelectorAll('.media-container *');
    slideElmtsToRemove.forEach(elmt => elmt.remove());
    let element = type === 'image' ? 'img' : 'video';
    let mediaElement = null;

    if (element === 'img') {
      mediaElement = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('img', ['media-current'], [{
        name: 'alt',
        value: alt
      }, {
        name: 'src',
        value: src
      }, {
        name: 'tabindex',
        value: 0
      }]);

      if (document.querySelector('.player')) {
        document.querySelector('.player').remove();
      }
    }

    if (element === 'video') {
      const player = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('section', ['player']);
      mediaElement = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('video', ['media-current'], [{
        name: 'title',
        value: 'vidéo' + title
      }, {
        name: 'tabindex',
        value: 0
      }]);
      const source = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('source');
      source.setAttribute('src', src);
      source.setAttribute('type', 'video/mp4');
      const notSupported = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('p', '', '', 'Votre navigateur ne supporte pas la vidéo HTML5.');
      const videoLink = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('a', '', [{
        name: 'href',
        value: src
      }], 'Lien vers la vidéo');
      notSupported.append(videoLink);
      mediaElement.append(source, notSupported);
      const customControls = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['controls']);
      const play = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['playpause'], '', 'Play');
      const stop = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['stop'], '', 'Stop');
      const rwd = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['rwd'], '', 'Retour');
      const fwd = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['fwd'], '', 'Avancer');
      const time = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['time'], '', '00:00');
      customControls.append(play, stop, rwd, fwd, time);
      player.append(mediaElement, customControls);
      mediaElement = player;
    }

    mediaTitle.textContent = title;
    return mediaElement;
  };
  /**
   * Create slide on open modal depending on thumb clicked
   * @param {event} e 
   */


  const mediaModal = (target, mediaSorted) => {
    /*Add listener on arrow buttons */
    slideButton.forEach(button => button.addEventListener('click', sliderOnclick));
    /*Get media in medias based on article ID */

    const media = mediaSorted.filter(media => parseInt(media.id) === parseInt(target.id))[0];
    /*Get media index in medias */

    currentIndex = mediaSorted.findIndex(media => parseInt(media.id) === parseInt(target.id));
    /*Update data-id on Article element */

    lightboxArticle.setAttribute('data-id', target.id);
    /*Setup arrows */

    leftArrow.classList.remove('hidden');
    rightArrow.classList.remove('hidden');
    displayArrows(currentIndex);
    /*Append media and focus on */

    lightbox.append(createSlide(media));

    if (media.type === 'video') {
      (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    document.querySelector('.media-current').focus();
  };
  /**
   * Go to next slide
   * @param {integer} index 
   */


  const nextSlide = index => {
    document.querySelector('.left-button').classList.remove('hidden');
    currentIndex = index + 1;
    lightbox.append(createSlide(medias[currentIndex]));
    document.querySelector('.media-current').focus();

    if (medias[currentIndex].type === 'video') {
      (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  };
  /**
   * Go to previous slide
   * @param {integer} index 
   */


  const prevSlide = index => {
    document.querySelector('.right-button').classList.remove('hidden');
    currentIndex = index - 1;
    lightbox.append(createSlide(medias[currentIndex]));
    document.querySelector('.media-current').focus();

    if (medias[currentIndex].type === 'video') {
      (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  };
  /**
   * Slider
   * @param {string} direction 
   */


  const slider = direction => {
    /*Get index of current media */
    currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(document.querySelector('.modal-media article').getAttribute('data-id')));

    if (direction === "right") {
      nextSlide(currentIndex);
    }

    if (direction === "left") {
      prevSlide(currentIndex);
    }

    lightboxArticle.setAttribute('data-id', medias[currentIndex].id);
    displayArrows(currentIndex);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightbox);

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const videoPlayer = () => {
  if (document.querySelector('.player')) {
    const video = document.querySelector('video');
    const play = document.querySelector('.playpause');
    const stop = document.querySelector('.stop');
    const rwd = document.querySelector('.rwd');
    const fwd = document.querySelector('.fwd');
    const time = document.querySelector('.time');

    play.onclick = () => {
      if (video.paused) {
        video.play();
        play.textContent = 'Pause';
      } else {
        video.pause();
        play.textContent = 'Play';
      }
    };

    stop.onclick = () => {
      video.pause();
      video.currentTime = 0;
      play.textContent = 'Play';
    };

    rwd.onclick = () => {
      video.currentTime -= 3;
    };

    fwd.onclick = () => {
      video.currentTime += 3;

      if (video.currentTime >= video.duration || video.paused) {
        video.pause();
        video.currentTime = 0;
        play.textContent = 'Play';
      }
    };

    video.ontimeupdate = () => {
      let min = Math.floor(video.currentTime / 60);
      let sec = Math.floor(video.currentTime - min * 60);
      let minValue;
      let secValue;

      if (min < 10) {
        minValue = '0' + min;
      } else {
        minValue = min;
      }

      if (sec < 10) {
        secValue = '0' + sec;
      } else {
        secValue = sec;
      }

      time.textContent = minValue + ':' + secValue;
    };
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoPlayer);

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
const main = document.querySelector('#main-content');
const body = document.querySelector('body');
let modal = null;

const openModal = modalContent => {
  modal = document.querySelector('.' + modalContent);
  main.setAttribute('aria-hidden', true);
  modal.classList.add('display-modal');
  modal.removeAttribute('aria-hidden');
  document.querySelector('.display-modal .close-modal').focus();
  body.classList.add('no-scroll');
};
/* Ferme les modales. Si c'est la lightbox in récupère l'id du média pour set le focus sur lapage profil*/


const closeModal = id => {
  main.removeAttribute('aria-hidden');
  modal.classList.remove('display-modal');
  body.classList.remove('no-scroll');

  if (id) {
    document.getElementById(id).focus();
  } else {
    document.querySelector('.contact-button').focus();
  }
};



/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _icons_cross__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);




/**
 * Create contact form 
 * @param {string} photographer Photographer name
 */

const contact = photographer => {
  const contactButton = document.querySelector('.contact-button');
  const main = document.querySelector('#main-content');
  const closeModalButton = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['close-modal'], [{
    name: 'type',
    value: 'button'
  }, {
    name: 'aria-label',
    value: 'Close contact form'
  }]);
  const modal = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('section', ['modal', 'modal-form'], [{
    name: 'aria-hidden',
    value: true
  }, {
    name: 'role',
    value: 'dialog'
  }, {
    name: 'aria-describedby',
    value: 'modal-title photographer-name'
  }]);
  const form = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('form', '', [{
    name: 'id',
    value: 'contact-form'
  }]);
  const title = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('h1', '', [{
    name: 'id',
    value: 'modal-title'
  }], 'Contactez-moi');
  const subtitle = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('h2', '', [{
    name: 'id',
    value: 'photographer-name'
  }], photographer);
  closeModalButton.append((0,_icons_cross__WEBPACK_IMPORTED_MODULE_1__["default"])());
  form.append(title, subtitle, closeModalButton);
  const inputs = [{
    id: 'firstname',
    type: 'text',
    label: 'Prénom'
  }, {
    id: 'lastname',
    type: 'text',
    label: 'Nom'
  }, {
    id: 'email',
    type: 'email',
    label: 'Email'
  }, {
    id: 'message',
    type: 'textarea',
    label: 'Votre message'
  }];
  /* Loop on inputs to fill the the form */

  inputs.forEach(input => {
    form.append((0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('label', [`${input.id}-label`], [{
      name: 'for',
      value: input.id
    }], input.label));

    if (input.type === 'textarea') {
      form.append((0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('textarea', '', [{
        name: 'id',
        value: input.id
      }, {
        name: 'name',
        value: input.id
      }]));
    } else {
      form.append((0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('input', '', [{
        name: 'id',
        value: input.id
      }, {
        name: 'name',
        value: input.id
      }, {
        name: 'type',
        value: input.type
      }]));
    }
  });
  const button = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', '', [{
    name: 'type',
    value: 'submit'
  }, {
    name: 'aria-label',
    value: 'Send'
  }], 'Envoyer');
  form.append(button);
  modal.append(form);
  main.insertAdjacentElement('afterend', modal);
  button.addEventListener('click', (e, fields = inputs) => (0,_form__WEBPACK_IMPORTED_MODULE_2__["default"])(e, fields));
  contactButton.addEventListener('click', () => (0,_utils_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('modal-form'));
  closeModalButton.addEventListener('click', () => (0,_utils_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(null));
  contactButton.addEventListener('keydown', e => {
    if (e.code === 'Enter') {
      e.preventDefault();
      (0,_utils_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('modal-form');
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cross = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 42 42');
  svg.setAttribute('width', 42);
  svg.setAttribute('height', 42);
  svg.setAttribute('fill', 'none');
  svg.setAttribute('aria-hidden', true);
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z');
  svg.append(path);
  return svg;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cross);

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);


const submitForm = (e, inputs) => {
  e.preventDefault();
  const contactForm = document.getElementById('contact-form');
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const mail = document.getElementById('email');
  const message = document.getElementById('message'); // On récupère les data

  let data = {};
  inputs.forEach(input => {
    let inputData = document.getElementById(input.id);
    data[inputData.id] = inputData.value;
  }); //VALIDATION  FORM

  const errorMessages = {
    isRequired: 'Ce champs est requis',
    text: 'Veuillez entrez au moins 2 caractères pour ce champs.Les chiffres ne sont pas acceptés.',
    invalidMail: 'Veuillez entrez une adresse mail valide'
  };
  const validationRules = {
    name: /^(?=.{2,50}$)[a-zÀ-ÿ]+(?:['-\s][a-zÀ-ÿ]+)*$/gi,
    //Min 2 chars. Accents, ' , -  are allowed and insensitive case
    mailRegex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  }; //****************************TESTS FUNCTIONS****************************//
  //Test if is empty

  const notEmpty = v => !!v;
  /**
   * Create an object
   * @param {string} inputName
   * @param {string} errorMessage
   * @returns {object}
   */


  const createKeyValueObject = (inputName, errorMessage) => {
    const error = {};
    error[inputName] = errorMessage;
    return error;
  };
  /**
   *  Test if input value match regex
   * @param {object} input 
   * @param {string} inputRegex 
   * @param {string} errorMessage 
   * @returns {object|null} Object error or null
   */


  const matchRegex = (input, inputRegex, errorMessage) => {
    const regex = new RegExp(inputRegex);

    if (!regex.test(input.value)) {
      return createKeyValueObject(input.name, errorMessage);
    }

    return null;
  };
  /**
   * Test input text = not empty and match regex
   * @param {object} input 
   * @returns {object|null} Object error or null
   */


  const validateInputText = input => {
    if (!notEmpty(input.value)) {
      return createKeyValueObject(input.name, errorMessages.isRequired);
    }

    return matchRegex(input, validationRules.name, errorMessages.text);
  };
  /**
   * Test input text = not empty and match regex
   * @param {object} input 
   * @returns {object|null} Object error or null
   */


  const notEmptyText = input => {
    if (!notEmpty(input.value)) {
      return createKeyValueObject(input.name, errorMessages.isRequired);
    }
  };
  /** Test input mail = not empty + valid mail
   *  @param {object} input
   *  @returns {object|null} Error Object or null 
   */


  const validateMail = input => {
    if (!notEmpty(input.value)) {
      return createKeyValueObject(input.name, errorMessages.isRequired);
    }

    return matchRegex(input, validationRules.mailRegex, errorMessages.invalidMail);
  }; //*****************************ERRORS**************************************

  /**
   * Create error element and append in DOM
   * @param {string} inputName 
   * @param {string} errorMessage 
   */


  const createErrorElement = (inputName, errorMessage) => {
    //Create p tag with error-message class
    const errorDOMElement = document.createElement('p');
    errorDOMElement.className = 'error-message';
    const message = document.createTextNode(errorMessage); //Create messsage and append to errorElement

    errorDOMElement.appendChild(message);
    document.querySelector(`#${inputName}`).insertAdjacentElement('afterend', errorDOMElement);
  };
  /** Remove all errors messages in DOM */


  const cleanAllFormErrors = () => {
    const errorsDisplayed = document.querySelectorAll('.error-message');
    errorsDisplayed?.forEach(element => element.remove());
  };
  /**
   * Loop on errors and send each error to createErrorElement
   * @param {Array} errors 
   */


  const manageErrorMessage = errors => {
    errors.map(error => createErrorElement(Object.keys(error), Object.values(error)));
  }; //On efface les messages d'erreur


  cleanAllFormErrors(); //On récupère le tableau d'erreur en éxecutant les tests sur les champs

  const errors = [validateInputText(firstName), validateInputText(lastName), validateMail(mail), notEmptyText(message)].filter(notEmpty); //Si erreurs on les traite

  if (errors.length > 0) {
    manageErrorMessage(errors);
    return;
  }

  (0,_utils_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(null); //Si ok on log les data

  console.table(data);
  contactForm.reset();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitForm);

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _icons_arrowLighboxLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _icons_arrowLightboxRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _icons_cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);





const lightboxUI = () => {
  const main = document.querySelector('#main-content');
  const modal = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('section', ['modal', 'modal-media'], [{
    name: 'data-modal',
    value: 'modal-media'
  }, {
    name: 'aria-hidden',
    value: true
  }, {
    name: 'role',
    value: 'dialog'
  }, {
    name: 'aria-label',
    value: 'Media modal'
  }]);
  const article = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('article', ['media']);
  const mediaContainer = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['media-container']);
  const title = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('h1', '');
  const closeButton = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['modal-button', 'close-modal'], [{
    name: 'type',
    value: 'button'
  }, {
    name: 'aria-label',
    value: 'Close medias modal'
  }]);
  closeButton.append((0,_icons_cross__WEBPACK_IMPORTED_MODULE_3__["default"])());
  const leftButton = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['modal-button', 'left-button', 'slide-button'], [{
    name: 'data-direction',
    value: 'left'
  }, {
    name: 'aria-label',
    value: 'Previous media'
  }]);
  leftButton.append((0,_icons_arrowLighboxLeft__WEBPACK_IMPORTED_MODULE_1__["default"])());
  const rightButton = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', ['modal-button', 'right-button', 'slide-button'], [{
    name: 'data-direction',
    value: 'right'
  }, {
    name: 'aria-label',
    value: 'Next media'
  }]);
  rightButton.append((0,_icons_arrowLightboxRight__WEBPACK_IMPORTED_MODULE_2__["default"])());
  article.append(mediaContainer, title);
  modal.append(closeButton, leftButton, article, rightButton);
  main.insertAdjacentElement('afterend', modal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightboxUI);

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arrowLeft = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 30 48');
  svg.setAttribute('width', 30);
  svg.setAttribute('height', 48);
  svg.setAttribute('fill', "none");
  svg.setAttribute('aria-hidden', true);
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z');
  svg.append(path);
  return svg;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowLeft);

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arrowRight = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 30 48');
  svg.setAttribute('width', 30);
  svg.setAttribute('height', 48);
  svg.setAttribute('fill', "none");
  svg.setAttribute('aria-hidden', true);
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z');
  svg.append(path);
  return svg;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowRight);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;