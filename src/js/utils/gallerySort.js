import mediaCard from '../Views/components/profil/mediaCard'
import mediaFactory from '../Models/mediaFactory'

const gallerySort = medias => {
    const gallery = document.querySelector('.medias-wrapper')
    const cards = document.querySelectorAll('.media-card')

    cards.forEach( card => card.remove())

    const mediaSorted = []
    medias.forEach(media => mediaSorted.push(mediaFactory(media)))
    mediaSorted.forEach( media =>  gallery.append(mediaCard(media)))
}

export default gallerySort