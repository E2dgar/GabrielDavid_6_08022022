import { path } from '../constants'


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

    createUserCard () {
        return `
                <article class="photographer">
                    <a href="/photographer/${this.id}">
                        <div class="media-container">
                            <img src="${path.USER_THUMB + this.portrait}" alt=""/>
                        </div>
                        <h2>${this.name}</h2>
                    </a>

                    <h3>${this.country}, ${this.city}</h3>

                    <p>${this.tagline}</p>

                    <p>${this.price}€/jour</p>
                </article>
                `
    }
}

export default Photographer;