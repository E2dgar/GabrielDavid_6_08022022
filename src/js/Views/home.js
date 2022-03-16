import header from './components/header'
import Photographer from '../Models/Photographer'
import photographerCard from './components/home/photographerCard'
import { createDOMElement } from '../services'

const home = async (photographers) => {
  /*Set document title and add class on body */
  document.title = 'Fisheye'
  document.querySelector('body').className = 'home-page'

  /*Remove elements from profil page */
  const elmentsToRemove = [
    document.querySelector('section.hero-photographer'),
    document.querySelector('section.medias-section'),
    document.querySelector('aside'),
    document.querySelector('.filter-container'),
    document.querySelector('.modal-form'),
    document.querySelector('.modal-media')
  ]

  elmentsToRemove.forEach(elt => {
    if(elt){
      elt.remove()
    }
  })

  /*Create header */
  header('Nos photographes')

  const main = document.getElementById('main-content');

  /*Create list of photographer only if not exist */
  if(!document.querySelector('section.photographer-section')){
    const wrapper = createDOMElement('section', ['photographer-section'], [{name: 'id', value: 'list'}])

    photographers.forEach( photographer => wrapper.append(photographerCard(new Photographer(photographer))))
        
    main.append(wrapper)
  }  
}

export default home