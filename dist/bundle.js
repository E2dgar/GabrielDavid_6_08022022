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
  history.pushState(null, null, window.location.pathname);
  const links = document.querySelectorAll('.data-link');
  let url = "";
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

  if (hash !== "" && hash !== "main-content") {
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
/* harmony import */ var _Views_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const HomeController = photographers => {
  (0,_Views_home__WEBPACK_IMPORTED_MODULE_0__["default"])(photographers);
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
  document.querySelector('body').className = 'home-page';
  document.title = 'Fisheye';
  const elmentsToRemove = [document.querySelector('section.hero-photographer'), document.querySelector('section.medias-section'), document.querySelector('aside'), document.querySelector('.filter-container'), document.querySelector('.modal-form'), document.querySelector('.modal-media')];
  elmentsToRemove.forEach(elt => {
    if (elt) {
      elt.remove();
    }
  });
  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])('Nos photographes');
  const main = document.getElementById('main-content');

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
  const header = document.querySelector("header");

  if (!document.querySelector("header a")) {
    const link = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("a", ['data-link', 'logo-link'], [{
      name: "href",
      value: "#"
    }]);
    const logo = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("img", ['logo'], [{
      name: "alt",
      value: "Fisheye Home page"
    }, {
      name: "src",
      value: "assets/images/logo.png"
    }]);
    link.append(logo);
    header.append(link);
  }

  if (!document.querySelector("header h1")) {
    const headerTitle = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("h1", "", "", title);
    header.append(headerTitle);
  }

  if (!document.querySelector("body").classList.contains("home-page")) {
    document.querySelector("header h1").remove();
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
/* harmony import */ var _Views_profil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _Models_Photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/**
 * Return view profil with data of a photographer
 * @param {object} photographers 
 * @param {string} id 
 */

const ProfilController = async (photographers, id) => {
  const filtered = photographers.filter(photographer => photographer.id === parseInt(id));
  const photographer = new _Models_Photographer__WEBPACK_IMPORTED_MODULE_1__["default"](filtered[0]);
  (0,_Views_profil__WEBPACK_IMPORTED_MODULE_0__["default"])(photographer, await photographer.getMedias());
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
/* harmony import */ var _Models_mediaFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _components_profil_likesCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _utils_customSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _components_contactForm_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _utils_mediaModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _components_profil_lightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);










const profil = (photographer, medias) => {
  document.title = `Fisheye | ${photographer.name}`;
  document.querySelector("body").className = "photographer-page";
  const cards = document.querySelectorAll("article");
  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  /* manage header and remove home lements */

  const homeList = document.querySelector("#list");
  homeList.remove();
  const heroSection = (0,_components_profil_hero__WEBPACK_IMPORTED_MODULE_1__["default"])(photographer);
  const getMedias = medias;
  const mediaSorted = [];
  getMedias.forEach(media => mediaSorted.push((0,_Models_mediaFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(media)));
  const galleryPhotographer = (0,_components_profil_gallery__WEBPACK_IMPORTED_MODULE_2__["default"])(mediaSorted);
  const main = document.querySelector("#main-content");
  const counter = (0,_components_profil_likesCounter__WEBPACK_IMPORTED_MODULE_4__["default"])(mediaSorted, photographer.price);
  main.append(heroSection, galleryPhotographer, counter);
  (0,_utils_customSelect__WEBPACK_IMPORTED_MODULE_5__["default"])(medias);
  (0,_components_contactForm_contact__WEBPACK_IMPORTED_MODULE_6__["default"])(photographer.name);
  (0,_components_profil_lightbox__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_utils_mediaModal__WEBPACK_IMPORTED_MODULE_7__["default"])(mediaSorted);
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
  let heroSection = document.querySelector("section.hero-photographer");

  if (heroSection) {
    heroSection.remove();
  } else {
    heroSection = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("section", ["hero-photographer"]);
  }

  const wrapperDetails = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div");
  const name = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("h2", "", "", photographer.name);
  const location = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("p", ["location"], "", photographer.city + ", " + photographer.country);
  const tagline = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("p", ["tagline"], "", photographer.tagline);
  wrapperDetails.append(name, location, tagline);
  const contact = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("button", ['contact-button', 'modal-trigger'], [{
    name: 'type',
    value: 'button'
  }, {
    name: "data-modal",
    value: "modal-form"
  }], "Contactez-moi");
  const imgWrapper = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", ["avatar"]);
  const img = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("img", "", [{
    name: "src",
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
/* harmony import */ var _mediasFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);




const gallery = medias => {
  /* Remove potential previous gallery */
  let gallerySection = document.querySelector("section.medias-section");

  if (gallerySection) {
    gallerySection.remove();
  }

  gallerySection = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("section", ['medias-section']);
  const mediasWrapper = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", ['medias-wrapper']);
  medias.forEach(media => mediasWrapper.append((0,_mediaCard__WEBPACK_IMPORTED_MODULE_1__["default"])(media)));
  gallerySection.append(_mediasFilters__WEBPACK_IMPORTED_MODULE_2__["default"], mediasWrapper);
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
/* harmony import */ var _Models_mediaCardFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _utils_mediaModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);





const mediaCard = media => {
  const card = document.createElement('article');
  card.classList.add('media-card');
  /*const wrapperThumb = document.createElement('div')
  wrapperThumb.className = 'img-container'*/

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
  img.setAttribute('alt', media.title);
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
    likeCounter.textContent++;
    mainCounter.textContent++;
  };

  likeIcon.addEventListener('click', updateCount);
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
  const likePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  likePath.setAttribute("d", "M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z");
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * Modify src depending on media type
 * @param {object} data 
 * @returns 
 */

const MediaCardFactory = media => {
  if (media.type === "image") {
    return imageThumb(media.title, media);
  } else if (media.type === "video") {
    return videoThumb(media.title, media);
  }

  return "Format error";
};

const imageThumb = (title, image) => {
  console.log('image', image);
  const img = document.createElement("img");
  img.setAttribute("alt", title);
  img.setAttribute("src", image.srcThumb);
  img.setAttribute("data-modal", "modal-media");
  return img;
};

const videoThumb = (title, image) => {
  const img = document.createElement("img");
  img.setAttribute("alt", title);
  img.setAttribute("src", _constants__WEBPACK_IMPORTED_MODULE_0__.path.MEDIA_VIDEO_THUMB + image.replace(".", "") + ".png");
  img.setAttribute("data-modal", "modal-media");
  return img;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaCardFactory);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



const lightbox = medias => {
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.keyBoardEvents)();
  const lightboxArticle = document.querySelector('.modal-media article');
  const lightbox = document.querySelector('.modal-media article .media-container');
  const mediaTitle = document.querySelector('h1');
  const slideButton = document.querySelectorAll('.slide-button');
  const leftArrow = document.querySelector('.left-button');
  const rightArrow = document.querySelector('.right-button');
  const cards = document.querySelectorAll('.lightbox-link');
  const close = document.querySelector('.modal-media .close-modal');
  let currentIndex = null;
  let firstSlide = false;
  let lastSlide = false;
  /**
   * Hide left/right arrow for first and last slide
   * @param {integer} index 
   */

  const displayArrows = index => {
    if (index === 0) {
      leftArrow.classList.add('hidden');
      firstSlide = true;
      console.log(firstSlide);
    } else {
      firstSlide = false;
    }

    if (index === medias.length - 1) {
      rightArrow.classList.add('hidden');
      lastSlide = true;
      console.log('me lenght', medias.length);
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
    title
  }) => {
    let element = type === 'image' ? 'img' : 'video';
    let attributesElement = [{
      name: 'src',
      value: src
    }, {
      name: 'alt',
      value: title
    }];

    if (element === 'video') {
      attributesElement.push({
        name: 'controls',
        value: true
      });
    }

    mediaTitle.textContent = title;
    return (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(element, ['media-current'], attributesElement);
  };
  /**
   * Create slide on open modal depending on thumb clicked
   * @param {event} e 
   */


  const mediaModal = target => {
    const mediaLightbox = document.querySelector('.modal-media .media-current');

    if (mediaLightbox) {
      mediaLightbox.remove();
      mediaTitle.remove();
    }
    /*Get media in medias based on article ID */


    const media = medias.filter(media => parseInt(media.id) === parseInt(target.id))[0];
    /*Get media index in medias */

    currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(target.id));
    lightboxArticle.setAttribute('data-id', target.id);
    /*Setup arrows */

    leftArrow.classList.remove('hidden');
    rightArrow.classList.remove('hidden');
    displayArrows(currentIndex);
    lightbox.append(createSlide(media));
  };

  cards.forEach(card => {
    card.addEventListener("click", e => {
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('modal-media');
      mediaModal(e.currentTarget);
    });
    card.addEventListener("keydown", e => {
      console.log('keyboard', e);

      if (e.code === "Enter") {
        e.preventDefault();
        (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('modal-media');
        mediaModal(card);
      }
    });
  });
  /**
   * Go to next slide
   * @param {Object} media 
   * @param {integer} index 
   */

  const nextSlide = (media, index) => {
    document.querySelector('.left-button').classList.remove('hidden');
    media.remove();
    currentIndex = index + 1;
    console.log('index in next', currentIndex);
    lightbox.append(createSlide(medias[currentIndex]));
  };
  /**
   * Go to previous slide
   * @param {Object} media 
   * @param {integer} index 
   */


  const prevSlide = (media, index) => {
    document.querySelector('.right-button').classList.remove('hidden');
    media.remove();
    currentIndex = index - 1;
    lightbox.append(createSlide(medias[currentIndex]));
  };
  /**
   * Slider
   * @param {string} direction 
   */


  const slider = direction => {
    const currentMedia = document.querySelector('.media-current');
    currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(document.querySelector('.modal-media article').getAttribute('data-id')));
    console.log(currentMedia);

    if (direction === "right") {
      nextSlide(currentMedia, currentIndex);
    }

    if (direction === "left") {
      prevSlide(currentMedia, currentIndex);
    }

    lightboxArticle.setAttribute('data-id', medias[currentIndex].id);
    displayArrows(currentIndex);
  };

  slideButton.forEach(button => button.addEventListener('click', e => slider(e.target.getAttribute('data-direction'))));

  const keyEvents = e => {
    let key = e.which || e.keycode;

    if (key === 39) {
      e.preventDefault();
      rightArrow.focus();
      if (!lastSlide) slider('right');
    }

    if (key === 37) {
      e.preventDefault();
      leftArrow.focus();
      if (!firstSlide) slider('left');
    }
  };

  document.addEventListener('keydown', keyEvents);
  close.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_1__.closeModal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightbox);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "keyBoardEvents": () => (/* binding */ keyBoardEvents)
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

const closeModal = () => {
  console.log('close is triggered');
  main.removeAttribute('aria-hidden');
  modal.classList.remove('display-modal');
  body.classList.remove('no-scroll');
};

const keyBoardEvents = () => {
  const keyEvents = e => {
    if (e.code === 'Escape') {
      e.preventDefault();
      closeModal();
    }
  };

  document.addEventListener('keydown', keyEvents);
};



/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _icons_arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);


const mediasFilters = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", ['filter-container']);
const options = {
  popular: "Popularité",
  date: "Date",
  title: "Titre"
};
const listboxArea = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", ['listbox-area']);
const leftArea = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", ['left-area']);
const label = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("span", ['label'], [{
  name: "id",
  value: "select-label"
}], "Trier par");
const optionsWrapper = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", "", [{
  name: "id",
  value: "options-wrapper"
}]);
const selectedOpt = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("button", "", [{
  name: "id",
  value: "selected-opt"
}, {
  name: "aria-haspopup",
  value: "listbox"
}, {
  name: "aria-labelledby",
  value: "select-label selected-opt"
}], options[Object.keys(options)[0]]);
const list = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("ul", ['hidden'], [{
  name: "id",
  value: "options-list"
}, {
  name: "role",
  value: "listbox"
}, {
  name: "aria-labelledby",
  value: "select-label"
}, {
  name: "tabindex",
  value: -1
}]);

for (const [key, value] of Object.entries(options)) {
  let optionLi = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("li", "", [{
    name: "id",
    value: key
  }, {
    name: "role",
    value: "option"
  }], value);
  list.append(optionLi);
}

optionsWrapper.append(selectedOpt, list);
leftArea.append(label, optionsWrapper);
listboxArea.append(leftArea);
mediasFilters.append(listboxArea);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediasFilters);

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arrow = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 16 11');
  svg.setAttribute('aria-hidden', true);
  svg.setAttribute('width', 16);
  svg.setAttribute('height', 11);
  svg.setAttribute('fill', "none");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M1.88 10.5466L8 4.43996L14.12 10.5466L16 8.66663L8 0.66663L1.64355e-07 8.66663L1.88 10.5466Z");
  svg.append(path);
  return svg;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrow);

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);



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
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



class ImageMedia extends _Media__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super(data);
    this.type = "image";
    this.src = _constants__WEBPACK_IMPORTED_MODULE_1__.path.MEDIA_IMG_WIDE + data.image;
    this.srcThumb = _constants__WEBPACK_IMPORTED_MODULE_1__.path.MEDIA_IMG_THUMB + data.image;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageMedia);

/***/ }),
/* 22 */
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
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



class Video extends _Media__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super(data);
    this.type = 'video';
    this.src = _constants__WEBPACK_IMPORTED_MODULE_1__.path.MEDIA_VIDEO_WIDE + data.video;
    this.srcThumb = _constants__WEBPACK_IMPORTED_MODULE_1__.path.MEDIA_VIDEO_THUMB + data.video.replace('.mp4', 'mp4.png');
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _icons_like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



const likesCounter = (data, price) => {
  const aside = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("aside");
  let count = 0;
  data.forEach(like => count += like.likes);
  const counter = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("span", ['counter'], "", count);
  const likeButton = (0,_icons_like__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const tarif = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("span", ['price'], "", price + "€ / jour");
  aside.append(counter, likeButton, tarif);
  return aside;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesCounter);

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Views_components_profil_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _gallerySort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _mediaModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);




const customSelect = medias => {
  const button = document.getElementById('selected-opt');
  const listbox = document.getElementById('options-list');
  const options = document.querySelectorAll('[role=option]');
  const firstItem = document.querySelector('[role=option]');
  /**
   * Set focus on the first item if no aria-activedescendant
   */

  const setUpFocus = () => {
    if (listbox.getAttribute('aria-activedescendant')) {
      return;
    }

    focusFirstItem();
  };
  /**
   * Execute focusItem on first item
   */


  const focusFirstItem = () => {
    if (firstItem) {
      focusItem(firstItem);
    }
  };
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
   * Get previous item when use down arrow
   */


  const getPreviousItem = () => {
    let focusedItem = document.querySelector('.focused');

    if (!focusedItem.previousSibling) {
      return;
    }

    let nextItem = focusedItem.previousSibling;
    focusItem(nextItem);
  };
  /**
   * Get next item when use up arrow 
   */


  const getNextItem = () => {
    let focusedItem = document.querySelector('.focused');

    if (!focusedItem.nextSibling) {
      return;
    }

    let nextItem = focusedItem.nextSibling;
    focusItem(nextItem);
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
    let key = e.which || e.keycode;
    e.preventDefault();

    if (key === 40) {
      getNextItem();
    }

    if (key === 38) {
      getPreviousItem();
    }

    if (key === 13 || key === 32) {
      selectItem();
    }
  };
  /**
   * Show the list of options
   */


  const showList = () => {
    listbox.classList.remove('hidden');
    button.setAttribute('aria-expanded', true);
    listbox.focus();
    setUpFocus();
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
    let sort = false;
    let sortFilter = document.querySelector('#options-list').getAttribute('aria-activedescendant');

    if (records[0].oldValue !== sortFilter) {
      sort = true;
      mediaSorted = medias.sort((a, b) => {
        if (sortFilter === 'popular') {
          return b.likes - a.likes;
        }

        if (sortFilter === 'date') {
          let da = new Date(a.date);
          let db = new Date(b.date);
          return db - da;
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
      (0,_gallerySort__WEBPACK_IMPORTED_MODULE_1__["default"])(mediaSorted);
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
    focusItem(e.target);
    selectItem();
  };

  options.forEach(option => option.addEventListener("click", e => clickItem(e)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customSelect);

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Views_components_profil_mediaCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _Models_mediaFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _mediaModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);




const gallerySort = medias => {
  const gallery = document.querySelector('.medias-wrapper');
  const cards = document.querySelectorAll('.media-card');
  cards.forEach(card => card.remove());
  const mediaSorted = [];
  medias.forEach(media => mediaSorted.push((0,_Models_mediaFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(media)));
  mediaSorted.forEach(media => gallery.append((0,_Views_components_profil_mediaCard__WEBPACK_IMPORTED_MODULE_0__["default"])(media)));
  (0,_mediaModal__WEBPACK_IMPORTED_MODULE_2__["default"])(mediaSorted);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallerySort);

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _icons_cross__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _utils_contactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);




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
  const form = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('form', '');
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
      }]));
    } else {
      form.append((0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('input', '', [{
        name: 'id',
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
  button.addEventListener('click', (e, fields = inputs) => (0,_utils_contactForm__WEBPACK_IMPORTED_MODULE_2__["default"])(e, fields));
  form.append(button);
  modal.append(form);
  main.insertAdjacentElement('afterend', modal);
  contactButton.addEventListener('click', () => (0,_utils_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('modal-form'));
  closeModalButton.addEventListener('click', _utils_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal);
  contactButton.addEventListener("keydown", e => {
    console.log('keyboard', e);

    if (e.code === "Enter") {
      e.preventDefault();
      (0,_utils_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('modal-form');
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),
/* 28 */
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
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const submitForm = (e, inputs) => {
  e.preventDefault();
  let data = {};
  inputs.forEach(input => {
    let inputData = document.getElementById(input.id);
    data[inputData.id] = inputData.value;
  });
  console.table(data);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitForm);

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _icons_arrowLighboxLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _icons_arrowLightboxRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _icons_cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);





const lightboxUI = () => {
  const body = document.querySelector("body");
  const main = document.querySelector("#main-content");
  const modal = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("section", ['modal', 'modal-media'], [{
    name: 'data-modal',
    value: 'modal-media'
  }, {
    name: "aria-hidden",
    value: true
  }, {
    name: "role",
    value: "dialog"
  }, {
    name: "aria-label",
    value: "Media modal"
  }]);
  const article = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("article", ['media']);
  const mediaContainer = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('div', ['media-container']);
  const title = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("h1", "");
  const closeBtutton = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("button", ['modal-button', 'close-modal'], [{
    name: 'type',
    value: 'button'
  }, {
    name: 'aria-label',
    value: 'Close medias modal'
  }]);
  closeBtutton.append((0,_icons_cross__WEBPACK_IMPORTED_MODULE_3__["default"])());
  const leftButton = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("button", ['modal-button', 'left-button', 'slide-button'], [{
    name: 'data-direction',
    value: 'left'
  }, {
    name: 'aria-label',
    value: 'Next media'
  }]);
  leftButton.append((0,_icons_arrowLighboxLeft__WEBPACK_IMPORTED_MODULE_1__["default"])());
  const rightButton = (0,_services__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("button", ['modal-button', 'right-button', 'slide-button'], [{
    name: 'data-direction',
    value: 'right'
  }, {
    name: 'aria-label',
    value: 'Previous media'
  }]);
  rightButton.append((0,_icons_arrowLightboxRight__WEBPACK_IMPORTED_MODULE_2__["default"])());
  article.append(mediaContainer, title);
  modal.append(article, leftButton, rightButton, closeBtutton);
  main.insertAdjacentElement("afterend", modal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightboxUI);

/***/ }),
/* 31 */
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
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z");
  svg.append(path);
  return svg;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowLeft);

/***/ }),
/* 32 */
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
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z");
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