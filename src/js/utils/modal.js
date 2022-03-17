const main = document.querySelector('#main-content')
const body = document.querySelector('body')
let modal = null

const openModal = modalContent => {
  modal = document.querySelector('.' + modalContent)
  main.setAttribute('aria-hidden', true);
  modal.classList.add('display-modal')
  modal.removeAttribute('aria-hidden')
  document.querySelector('.display-modal .close-modal').focus()
  body.classList.add('no-scroll')
}

/* Ferme les modales. Si c'est la lightbox in récupère l'id du média pour set le focus sur lapage profil*/
const closeModal = (id) => {
  main.removeAttribute('aria-hidden')
  modal.classList.remove('display-modal')
  body.classList.remove('no-scroll')
  if(id){
    document.getElementById(id).focus()
  } else {
    console.log('focus on', document.querySelector('.contact-button'))
    document.querySelector('.contact-button').focus()
  }
}

const keyBoardEvents = () => {
  const keyEvents = e => {
    if(e.code === 'Escape'){
      e.preventDefault()
      closeModal(null)
    }
  }
  document.addEventListener('keydown', keyEvents)
}

export {openModal, closeModal, keyBoardEvents}