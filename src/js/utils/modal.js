import { createDOMElement } from '../services'

const modal = (medias) => {
  const main = document.querySelector('#main-content')
  const lightboxArticle = document.querySelector('.modal-media article')
  const lightbox = document.querySelector('.modal-media article .media-container')
  const contactButton = document.querySelector('.contact-button')
  const body = document.querySelector('body')
  const close = document.querySelectorAll('.close-modal')
  const slideButton = document.querySelectorAll('.slide-button')
  const leftArrow = document.querySelector('.left-button')
  const rightArrow = document.querySelector('.right-button')
  const cards= document.querySelectorAll('article.media-card')
  let modal = null
  let currentIndex = null

  console.log('modal c', close)

  /**
   * Hide left/right arrow for first and last slide
   * @param {integer} index 
   */
  const displayArrows = index => {
    if(index === 0){
      leftArrow.classList.add('hidden')
    }
    if(index === medias.length - 1){
      rightArrow.classList.add('hidden')
    }
  }

  /**
   * Create DOM slide
   * @param {Object} media 
   */
  const createSlide = ({src, type}) => {
    let element = type === 'image' ? 'img' : 'video'
    let attributesElement = [{name: 'src', value: src}]

    if(element === 'video'){
      attributesElement.push({name: 'controls', value: true})
    }

    return createDOMElement(element, ['media-current'], attributesElement)
  }

  /**
   * Create slide on open modal depending on thumb clicked
   * @param {event} e 
   */
  const mediaModal = e => {
    const mediaLightbox = document.querySelector('.modal-media .media-current')
    if(mediaLightbox) {
        mediaLightbox.remove()
    }
    const targetArticle = e.target.closest("article")

    /*Get media in medias based on article ID */
    const media = medias.filter(media => parseInt(media.id) === parseInt(targetArticle.id))[0]
    lightboxArticle.setAttribute('data-id', parseInt(targetArticle.id))

    /*Get media index in medias */
    currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(document.querySelector('.modal-media article').getAttribute('data-id')))

    /*Setup arrows */
    leftArrow.classList.remove('hidden')
    rightArrow.classList.remove('hidden')
    
    displayArrows(currentIndex)

    lightbox.append(createSlide(media))
  }


  cards.forEach(card => {
    card.addEventListener("click", e => {
        targetModal(e)
        openModal()
        mediaModal(e)
    })
  })

  const targetModal = e => {
    modal = document.querySelector("." + e.target.getAttribute("data-modal"))
  }
  
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
   * Get direction and manage slider
   * @param {event} e 
   */
  const slider = (e) => {
    const direction = e.target.classList.contains('left-button') ? 'left' : 'right'

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

  slideButton.forEach(button => button.addEventListener('click', e => slider(e)))

  const openModal = () => {
    main.setAttribute('aria-hidden', true);
    modal.classList.add('display-modal')
    modal.removeAttribute('aria-hidden')
    body.classList.add('no-scroll')
  }

  /* Open targeted modal */
  contactButton.addEventListener('click', e => {
    targetModal(e)
    openModal()
  })

  const closeModal = () => {
    console.log('close')
    main.removeAttribute('aria-hidden')
    modal.classList.remove('display-modal')
    body.classList.remove('no-scroll')
  }
  close.forEach( button => button.addEventListener('click', closeModal))

  const keyEvents = (e) => {
    let key = e.which || e.keycode;

    if(key === 27){
      e.preventDefault()
      closeModal()
    }
  }
  document.addEventListener('keydown', keyEvents)
}

export default modal;