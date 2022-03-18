import { createDOMElement } from '../../../services'
import mediaCard from './mediaCard'
import mediasFilters from './filter/mediasFiltersUI'

const gallery = medias => {
    /* Remove potential previous gallery */
    let gallerySection = document.querySelector('section.medias-section')
    if(gallerySection){
        gallerySection.remove()
    }
    gallerySection = createDOMElement('section', ['medias-section'])

    const mediasWrapper = createDOMElement('div', ['medias-wrapper'])

    medias.forEach( media =>  mediasWrapper.append(mediaCard(media)))

    gallerySection.append(mediasFilters, mediasWrapper)

    return gallerySection
}

export default gallery