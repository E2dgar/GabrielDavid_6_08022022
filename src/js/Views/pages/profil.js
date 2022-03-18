import header from '../components/header'
import hero from '../components/profil/hero'
import gallery from '../components/profil/gallery'
import mediaFactory from '../../Models/mediaFactory'
import likesCounter from '../components/profil/likesCounter'
import customSelect from '../components/profil/filter/customSelect'
import contact from '../components/contactForm/contactUI'
import lightbox from '../components/profil/lightbox/lightbox'
import lightboxUI from '../components/profil/lightbox/lightboxUI'

const profil = (photographer, medias) => {
  /*Update title document and add class on body*/
  document.title = `Fisheye | ${photographer.name}`
  document.querySelector("body").className = 'photographer-page'

  /*Create header */
  header()

  /* Remove elements */
  const eltToRemove = [
    document.querySelector("#list"),
    document.querySelector('.hero-photographer')
  ]
  
  eltToRemove.forEach( elt => {
    if(elt){
      elt.remove()
    }
  })

  /*Create hero with photographer */
  const heroSection = hero(photographer)

  /*Get and sort medias */
  const getMedias =  medias
  const mediaSorted = []
  getMedias.forEach(media => mediaSorted.push(mediaFactory(media)))
  /*Send media to gallery */  
  const galleryPhotographer = gallery(mediaSorted);

  const main = document.querySelector('#main-content')

  /*Set aside with counter & price */
  const counter = likesCounter(mediaSorted, photographer.price)

  main.append(heroSection, galleryPhotographer, counter)
    
  /*Add select for filter */
  customSelect(medias)

  /*Create modals (contact and lightbox) */
  contact(photographer.name)
  lightboxUI()
  lightbox(mediaSorted)

  /*Set focus on h1 for accessibility */
  document.querySelector('.hero-photographer h1').focus()
}

export default profil;