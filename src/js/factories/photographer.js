import { path } from '../constants';
import { createDOMElement } from '../services';


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
        const article = createDOMElement("article", "photographer");

        const link = createDOMElement("a", "photographer-link data-link", [{name: "href", value: `#${this.id}`}] );

        const mediaContainer = createDOMElement("div", "media-container"); 
        const img = createDOMElement("img", "", [{name: "src", value: path.USER_THUMB + this.portrait},
                                                 {name: "alt", value: this.name}]);
        mediaContainer.append(img);

        const title = createDOMElement("h2", "", "", this.name);

        link.append(mediaContainer, title);

        const location = createDOMElement("h3", "", "", `${this.country}, ${this.city}`);
        const tagline = createDOMElement("p", "", "", this.tagline);
        const price = createDOMElement("p", "", "", `${this.price}€/jour`);

        article.append(link, location, tagline, price);

        return article;
    }
}

export default Photographer;