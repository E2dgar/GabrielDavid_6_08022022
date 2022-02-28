import { createDOMElement } from "../../../services";
import { path } from "../../../constants";

const photographerCard = photographer => {
    const article = createDOMElement("article", "photographer");

    const link = createDOMElement("a", "photographer-link data-link", [{name: "href", value: `#${photographer.id}`}] );
    
    const mediaContainer = createDOMElement("div", "media-container"); 
    const img = createDOMElement("img", "", [{name: "src", value: path.USER_THUMB + photographer.portrait},
                                             {name: "alt", value: photographer.name}]);
    mediaContainer.append(img);
    
    const title = createDOMElement("h2", "", "", photographer.name);
    
    link.append(mediaContainer, title);
    
    const location = createDOMElement("h3", "", "", `${photographer.country}, ${photographer.city}`);
    const tagline = createDOMElement("p", "", "", photographer.tagline);
    const price = createDOMElement("p", "", "", `${photographer.price}€/jour`);
    
    article.append(link, location, tagline, price);
    
    return article;
}

export default photographerCard