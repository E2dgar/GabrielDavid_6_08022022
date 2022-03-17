import { createDOMElement } from '../services'
import videoPlayer from '../Views/components/profil/lightbox/player'
import { openModal, closeModal } from './modal'


const lightbox = (medias) => {
  /*DOM Elements */
  const lightboxArticle = document.querySelector('.modal-media article')
  const lightbox = document.querySelector('.modal-media article .media-container')
  const mediaTitle = document.querySelector('.modal-media h1')
  const slideButton = document.querySelectorAll('.slide-button')
  const leftArrow = document.querySelector('.left-button')
  const rightArrow = document.querySelector('.right-button')
  const cards= document.querySelectorAll('.lightbox-link')
  const close = document.querySelector('.modal-media .close-modal')

  /*Init variables */
  let currentIndex = 0
  let firstSlide = false
  let lastSlide = false

  /*Init lightbox on click in gallery*/
  const onEnterCard = (e, card) => {
    openModal('modal-media')
    mediaModal(card ?? e.currentTarget, medias)
    document.addEventListener('keydown', keyEvents)
  }

  /*Add listener on each media card when lightbox is loaded*/
  cards.forEach(card => {
    card.addEventListener('click', e => onEnterCard(e))

    card.addEventListener('keydown', e => {
      if(e.code === 'Enter'){
        e.preventDefault
        onEnterCard(null, card)
      }
    })
  })

  /*Add listener on Escape*/
  const escapeKey = e => {
    if(e.code === 'Escape'){
      e.preventDefault()
      document.removeEventListener('keydown', keyEvents)
      cards.forEach(card => {
        card.removeEventListener('click', e => onEnterCard(e))
    
        card.removeEventListener('keydown', e => {
          if(e.code === 'Enter'){
            e.preventDefault
            onEnterCard(null, card)
          }
        })
      })
      slideButton.forEach(button => button.removeEventListener('click', sliderOnclick))
      closeModal(document.querySelector('.media').getAttribute('data-id'))
    }
  }
  document.addEventListener('keydown', escapeKey)

  /*On close remove listeners and close modal */
  close.addEventListener('click',() => {
    document.removeEventListener('keydown', keyEvents)
   
    cards.forEach(card => {
      card.removeEventListener('click', e => onEnterCard(e))
  
      card.removeEventListener('keydown', e => {
        if(e.code === 'Enter'){
          e.preventDefault
          onEnterCard(null, card)
        }
      })
    })
    slideButton.forEach(button => button.removeEventListener('click', sliderOnclick))
    closeModal(document.querySelector('.media').getAttribute('data-id'))
  })

  /*On click slider buttons execute slider('direction', 'current media')*/
  const sliderOnclick = e => {
    slider(e.target.getAttribute('data-direction'), document.querySelector('.media-current'))
  }

  /*Arrow keys events */
  const keyEvents = e => {
    if(e.code === 'ArrowRight'){
      e.preventDefault()
      rightArrow.focus()
      if(!lastSlide) slider('right', document.querySelector('.media-current'))
    }
    if(e.code === 'ArrowLeft'){
      e.preventDefault()
      leftArrow.focus()
      if(!firstSlide) slider('left', document.querySelector('.media-current'))
    } 
  }
 
  /**
   * Hide left/right arrow for first and last slide
   * @param {integer} index 
   */
  const displayArrows = index => {
    if(index === 0){
      leftArrow.classList.add('hidden')
      firstSlide = true
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
    const slideElmtsToRemove = document.querySelectorAll('.media-container *')
    slideElmtsToRemove.forEach(elmt => elmt.remove())

    let element = type === 'image' ? 'img' : 'video'
    let mediaElement = null

    if(element === 'img'){
      mediaElement = createDOMElement('img', ['media-current'], [{name: 'alt', value: alt}, {name: 'src', value: src}, {name: 'tabindex', value: 0}])
      if(document.querySelector('.player')){
        document.querySelector('.player').remove()
      }
    }
    if(element === 'video'){
      const player = createDOMElement('section', ['player'])

      mediaElement = createDOMElement('video', ['media-current'], [{name: 'title', value: title}, {name: 'tabindex', value: 0}])
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
      const rwd = createDOMElement('button', ['rwd'], '', 'Retour')
      const fwd = createDOMElement('button', ['fwd'], '', 'Avancer')
      const time = createDOMElement('div', ['time'], '', '00:00')

      customControls.append(play, stop, rwd, fwd, time)

      player.append(mediaElement, customControls)
      mediaElement = player
    }

    mediaTitle.textContent = title

    return mediaElement
  }
  
  /**
   * Create slide on open modal depending on thumb clicked
   * @param {event} e 
   */
  const mediaModal = (target, mediaSorted) => {   
    /*Add listener on arrow buttons */
    slideButton.forEach(button => button.addEventListener('click', sliderOnclick))
   
    /*Get media in medias based on article ID */
    const media = mediaSorted.filter(media => parseInt(media.id) === parseInt(target.id))[0]


    /*Get media index in medias */
    currentIndex = mediaSorted.findIndex(media => parseInt(media.id) === parseInt(target.id))
    /*Update data-id on Article element */
    lightboxArticle.setAttribute('data-id', target.id)

    /*Setup arrows */
    leftArrow.classList.remove('hidden')
    rightArrow.classList.remove('hidden')
    
    displayArrows(currentIndex)

    /*Append media and focus on */
    lightbox.append(createSlide(media))
    if(media.type ===  'video'){
      videoPlayer()
    }
    document.querySelector('.media-current').focus()
  }

  
  /**
   * Go to next slide
   * @param {integer} index 
   */
  const nextSlide = index => {
    document.querySelector('.left-button').classList.remove('hidden')

    currentIndex = index + 1

    lightbox.append(createSlide(medias[currentIndex]))
    document.querySelector('.media-current').focus()

    if(medias[currentIndex].type ===  'video'){
      videoPlayer()
    }
  }

  /**
   * Go to previous slide
   * @param {integer} index 
   */
  const prevSlide = index => {
    document.querySelector('.right-button').classList.remove('hidden')

    currentIndex = index - 1

    lightbox.append(createSlide(medias[currentIndex]))
    document.querySelector('.media-current').focus()

    if(medias[currentIndex].type === 'video'){
      videoPlayer()
    }
  }

  /**
   * Slider
   * @param {string} direction 
   */
  const slider = direction => {
    /*Get index of current media */
    currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(document.querySelector('.modal-media article').getAttribute('data-id')))
    
    if(direction === "right") {
      nextSlide(currentIndex)
    }
    if(direction === "left") {
      prevSlide(currentIndex)
    }

    lightboxArticle.setAttribute('data-id', medias[currentIndex].id)
    
    displayArrows(currentIndex)
  }
}

export default lightbox