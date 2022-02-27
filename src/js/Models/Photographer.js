import { getData } from "../services"

class Photographer {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
    }
    /**
     * Get all medias of a photographer
     * @returns {object}
     */
    async getMedias () {
        const { media } = await getData();
        return media.filter( media => this.id === parseInt(media.photographerId));
    }
}

export default Photographer;