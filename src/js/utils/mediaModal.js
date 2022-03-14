import { createDOMElement } from '../services'
import { openModal, closeModal, keyBoardEvents } from './modal'


const lightbox = (medias) => {
 /* let countListenr = 1;
  let mesMedias = []
  mesMedias = medias
  keyBoardEvents();*/
  const keyEvents = (e) => {
    console.log(e.code)
    let key = e.which || e.keycode;
      if(key === 39){
        e.preventDefault()
        rightArrow.focus();
        if(!lastSlide) slider('right')
      }
      if(key === 37){
        e.preventDefault()
        leftArrow.focus();
        if(!firstSlide) slider('left')
      }
    
  }
  console.log('lightbox is fired')
  document.removeEventListener('keydown', keyEvents)

  const lightboxArticle = document.querySelector('.modal-media article')
  const lightbox = document.querySelector('.modal-media article .media-container')
  const mediaTitle = document.querySelector('h1')
  const slideButton = document.querySelectorAll('.slide-button')
  const leftArrow = document.querySelector('.left-button')
  const rightArrow = document.querySelector('.right-button')
  const cards= document.querySelectorAll('.lightbox-link')
  const close = document.querySelector('.modal-media .close-modal')
  
  let currentIndex = 0
  let firstSlide = false
  let lastSlide = false
 
  /**
   * Hide left/right arrow for first and last slide
   * @param {integer} index 
   */
  const displayArrows = index => {
    if(index === 0){
      leftArrow.classList.add('hidden')
      firstSlide = true
      console.log(firstSlide)
    } else {
      firstSlide = false
    }
    if(index === medias.length - 1){
      rightArrow.classList.add('hidden')
      lastSlide = true
    } else {
      lastSlide = false
    }
  }

  /**
   * Create DOM slide
   * @param {Object} media 
   */
  const createSlide = ({src, type, title}) => {
    let element = type === 'image' ? 'img' : 'video'
    let attributes = []
    let mediaElement = null

    if(element === 'img'){
      mediaElement = createDOMElement('img', ['media-current'], [{name: 'alt', value: title}, {name: 'src', value: src}])
    }
    if(element === 'video'){
      mediaElement = createDOMElement('video', ['media-current'], [{name: 'controls', value: true}, {name: 'title', value: title}])
      const source = createDOMElement('source')
      source.setAttribute('src', src)
      source.setAttribute('type', 'video/mp4')

      const notSupported = createDOMElement('p', '', '', 'Votre navigateur ne supporte pas la vidéo HTML5.')
      const videoLink = createDOMElement('a', '', [{name: 'href', value: src}], 'Lien vers la vidéo')
      notSupported.append(videoLink)

      mediaElement.append(source, notSupported)
    }

    mediaTitle.textContent = title;
    return mediaElement
  }

  /**
   * Create slide on open modal depending on thumb clicked
   * @param {event} e 
   */
  const mediaModal = target => {
    const mediaLightbox = document.querySelector('.modal-media .media-current')
    if(mediaLightbox) {
        mediaLightbox.remove()
        mediaTitle.remove()
    }

    /*Get media in medias based on article ID */
    const media = medias.filter(media => parseInt(media.id) === parseInt(target.id))[0]


    /*Get media index in medias */
    currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(target.id))

    lightboxArticle.setAttribute('data-id', target.id)

    /*Setup arrows */
    leftArrow.classList.remove('hidden')
    rightArrow.classList.remove('hidden')
    
    displayArrows(currentIndex)

    lightbox.append(createSlide(media))
  }

  cards.forEach(card => {
    card.addEventListener("click", e => {
      openModal('modal-media')
      mediaModal(e.currentTarget)
    })

    card.addEventListener("keydown", e => {
      console.log('keyboard',e)
      if(e.code === "Enter"){ 
        e.preventDefault();
        openModal('modal-media')
        mediaModal(card)
      }
    })
  })


  /**
   * Go to next slide
   * @param {Object} media 
   * @param {integer} index 
   */
  const nextSlide = (media, index) => {
    document.querySelector('.left-button').classList.remove('hidden')

    media.remove()

    currentIndex = index + 1

    lightbox.append(createSlide(medias[currentIndex]))
  }

  /**
   * Go to previous slide
   * @param {Object} media 
   * @param {integer} index 
   */
  const prevSlide = (media, index) => {
    document.querySelector('.right-button').classList.remove('hidden')

    media.remove()

    currentIndex = index - 1

    lightbox.append(createSlide(medias[currentIndex]))
  }

  /**
   * Slider
   * @param {string} direction 
   */
  const slider = (direction) => {
      const currentMedia = document.querySelector('.media-current')
      currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(document.querySelector('.modal-media article').getAttribute('data-id')))
      
      if(direction === "right") {
        nextSlide(currentMedia, currentIndex)
      }
      if(direction === "left") {
        prevSlide(currentMedia, currentIndex)
      }

      lightboxArticle.setAttribute('data-id', medias[currentIndex].id)

      displayArrows(currentIndex)
  }

  slideButton.forEach(button => button.addEventListener('click', e => slider(e.target.getAttribute('data-direction'))))

  

  /*A placer qu'une fois */
  document.addEventListener('keydown', keyEvents)

  const escapeKey = e => {
    if(e.code === 'Escape'){
      e.preventDefault()
      document.removeEventListener('keydown', keyEvents)
      closeModal()
    }
  }
  document.addEventListener('keydown', escapeKey)


  close.addEventListener('click',() => {
    document.removeEventListener('keydown', keyEvents)
    closeModal()
  })
}

export default lightbox;