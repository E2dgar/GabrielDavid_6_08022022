const main = document.querySelector('#main-content')
const body = document.querySelector('body')
let modal = null

const keyEvents = (e) => {
  console.log('remove dans modal')
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

const openModal = modalContent => {
  modal = document.querySelector('.' + modalContent)
  main.setAttribute('aria-hidden', true);
  modal.classList.add('display-modal')
  modal.removeAttribute('aria-hidden')
  document.querySelector('.display-modal .close-modal').focus()
  body.classList.add('no-scroll')

 
 
    


}


const closeModal = () => {

  

  document.removeEventListener('keydown', keyEvents)
  
  console.log('close is triggered')
  main.removeAttribute('aria-hidden')
  modal.classList.remove('display-modal')
  body.classList.remove('no-scroll')
}

const keyBoardEvents = () => {
const keyEvents = e => {
  if(e.code === 'Escape'){
    e.preventDefault()
    closeModal()
  }
}
document.addEventListener('keydown', keyEvents)
}

export {openModal, closeModal, keyBoardEvents}