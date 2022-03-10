import { createDOMElement } from '../../../services'
import likeSvg from '../icons/like'
import mediaCardFactory from '../../../Models/mediaCardFactory'
import mediaModal from '../../../utils/mediaModal'

const mediaCard = media => {
    const card = document.createElement('article')
    card.className = 'media-card'

    /*const wrapperThumb = document.createElement('div')
    wrapperThumb.className = 'img-container'*/

    const lightboxLink = createDOMElement('a', ['lightbox-link'], [
      {name: 'data-type', value: media.type},
      {name: 'id', value: media.id},
      {name: 'role', value: 'button'}, 
      {name: 'tabindex', value: 0}, 
      {name: 'title', value: 'Open in the lightbox'},
      {name: 'data-src', value: media.src},
      {name: 'data-modal', value: 'modal-media'}
    ])
    const img = document.createElement('img')
    img.setAttribute('alt', media.title)
    img.setAttribute('src', media.srcThumb)
    lightboxLink.append(img)

    const legend = document.createElement('div')
    legend.className = 'media-legend'

    const title = document.createElement('h3')
    title.textContent = media.title

    const likeCounter = document.createElement('span')
    likeCounter.textContent = media.likes

    const likeButton = createDOMElement('button', ['like-button'], [{name: 'aria-label', value: 'likes'}])   
    const likeIcon = likeSvg()

    const updateCount = () => {
        const mainCounter = document.querySelector('aside span.counter')
        likeCounter.textContent++
        mainCounter.textContent++
    }
    likeIcon.addEventListener('click', updateCount)
    likeButton.append(likeIcon)

    legend.append(title, likeCounter, likeButton)

    card.append(lightboxLink, legend)

    return card
}

export default mediaCard