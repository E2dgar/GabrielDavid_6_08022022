import { createDOMElement } from '../../../services'
import cross from '../icons/cross'
import submitForm from '../../../utils/contactForm'
import { openModal, closeModal, keyBoardEvents } from '../../../utils/modal'
/**
 * Create contact form 
 * @param {string} photographer Photographer name
 */
const contact = photographer => {
  const contactButton = document.querySelector('.contact-button')
  const main = document.querySelector('#main-content')
  const closeModalButton = createDOMElement('button', ['close-modal'], [{name: 'type', value: 'button'}, {name: 'aria-label', value: 'Close contact form'}])
  const modal = createDOMElement('section', ['modal', 'modal-form'], [{name: 'aria-hidden', value: true}, {name: 'role', value: 'dialog'}, {name: 'aria-describedby', value: 'modal-title photographer-name'}])
  const form = createDOMElement('form', '', [{name: 'id', value: 'contact-form'}])
  const title = createDOMElement('h1', '', [{name: 'id', value: 'modal-title'}], 'Contactez-moi')
  const subtitle = createDOMElement('h2', '', [{name: 'id', value: 'photographer-name'}], photographer)

  closeModalButton.append(cross())
  form.append(title, subtitle, closeModalButton)

  const inputs = [
      {id: 'firstname', type: 'text', label: 'Prénom'},
      {id: 'lastname', type: 'text', label: 'Nom'},
      {id: 'email', type: 'email', label: 'Email'},
      {id: 'message', type: 'textarea', label: 'Votre message'},
  ] 

  /* Loop on inputs to fill the the form */
  inputs.forEach(input => {
    form.append(createDOMElement('label', [`${input.id}-label`], [{name: 'for', value: input.id}], input.label))
    if(input.type === 'textarea'){
      form.append(createDOMElement('textarea', '', [{name: 'id', value: input.id}, {name: 'name', value: input.id},]))
    } else {
      form.append(createDOMElement('input', '', [{name: 'id', value: input.id}, {name: 'name', value: input.id}, {name: 'type', value: input.type}]))
    }
  })

  const button = createDOMElement('button', '', [{name: 'type', value: 'submit'},  {name: 'aria-label', value: 'Send'}], 'Envoyer')
  
  form.append(button)

  modal.append(form)
  main.insertAdjacentElement('afterend', modal)

  button.addEventListener('click', (e, fields = inputs) => submitForm(e, fields))

  contactButton.addEventListener('click',() => openModal('modal-form'))
  closeModalButton.addEventListener('click',closeModal)

  contactButton.addEventListener("keydown", e => {
    console.log('keyboard',e)
    if(e.code === "Enter"){ 
      e.preventDefault();
      openModal('modal-form')
    }
  })

  
}

export default contact