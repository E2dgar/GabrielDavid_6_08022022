import { createDOMElement } from '../services'
import videoPlayer from '../Views/components/profil/lightbox/player'
import { openModal, closeModal } from './modal'


const lightbox = (medias) => {
 /* let countListenr = 1;
  let mesMedias = []
  mesMedias = medias
  keyBoardEvents();*/
  const keyEvents = (e) => {
    let key = e.which || e.keycode;
      if(key === 39){
        e.preventDefault()
        rightArrow.focus();
        console.log("ecode",e.code)
        if(!lastSlide) slider('right')
      }
      if(key === 37){
        e.preventDefault()
        
        console.log("ecode",e.code)
        leftArrow.focus();
        if(!firstSlide) slider('left')
      }
    
  }
  document.removeEventListener('keydown', keyEvents)

  const lightboxArticle = document.querySelector('.modal-media article')
  const lightbox = document.querySelector('.modal-media article .media-container')
  const mediaTitle = document.querySelector('.modal-media h1')
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
  const createSlide = ({src, type, title, alt}) => {
    let element = type === 'image' ? 'img' : 'video'
  
    let mediaElement = null

    if(element === 'img'){
      mediaElement = createDOMElement('img', ['media-current'], [{name: 'alt', value: alt}, {name: 'src', value: src}])
      if(document.querySelector('.player')){
        document.querySelector('.player').remove()
      }
    }
    if(element === 'video'){
      const player = createDOMElement('section', ['player'])

      mediaElement = createDOMElement('video', ['media-current'], [{name: 'title', value: title}])
      const source = createDOMElement('source')
      source.setAttribute('src', src)
      source.setAttribute('type', 'video/mp4')

      const notSupported = createDOMElement('p', '', '', 'Votre navigateur ne supporte pas la vidéo HTML5.')
      const videoLink = createDOMElement('a', '', [{name: 'href', value: src}], 'Lien vers la vidéo')
      notSupported.append(videoLink)

      mediaElement.append(source, notSupported)

      const customControls = createDOMElement('div', ['controls'])
      const play = createDOMElement('button', ['playpause'], '', 'Play')
      const stop = createDOMElement('button', ['stop'], '', 'Stop')
      const rwd = createDOMElement('button', ['rwd'], '', 'Rwd')
      const fwd = createDOMElement('button', ['fwd'], '', 'Fwd')
      const time = createDOMElement('div', ['time'], '', '00:00')

      customControls.append(play, stop, rwd, fwd, time)

      player.append(mediaElement, customControls)
      mediaElement = player
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
    
    videoPlayer()
  }

  cards.forEach(card => {
    card.addEventListener("click", e => {
      openModal('modal-media')
      mediaModal(e.currentTarget)
      document.addEventListener('keydown', keyEvents)
    })

    card.addEventListener("keydown", e => {
      if(e.code === "Enter"){ 
        e.preventDefault()
        openModal('modal-media')
        mediaModal(card)
        document.addEventListener('keydown', keyEvents)
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
    
    videoPlayer()
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
    
    videoPlayer()
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