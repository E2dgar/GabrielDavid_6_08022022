import profil from '../Views/pages/profil'
import Photographer from '../Models/Photographer'

/**
 * Return view profil with data of a photographer
 * @param {object} photographers 
 * @param {string} id 
 */
const ProfilController = async (photographers, id) => {
    const filtered = photographers.filter(photographer => photographer.id === parseInt(id))

    const photographer = new Photographer(filtered[0])

    profil(photographer, await photographer.getMedias())
}

export default ProfilController