import profil from "../Views/profil";
import Photographer from "../models/Photographer";

const ProfilController = async (photographers, id) => {
    const filtered = photographers.filter(photographer => photographer.id === parseInt(id));
    
    const photographer = new Photographer(filtered[0]);
    
    profil(photographer, await photographer.getMedias())
}

export default ProfilController;