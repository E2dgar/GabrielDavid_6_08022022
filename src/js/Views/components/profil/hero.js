import { createDOMElement } from "../../../services";
import { path } from "../../../constants";

const hero = (photographer) => {
    let heroSection = document.querySelector("section.hero-photographer");
    if(heroSection){
        heroSection.remove()
    } else {
        heroSection = createDOMElement("section", "hero-photographer");
    }

    const wrapperDetails = createDOMElement("div");

    const name = createDOMElement("h2", "", "", photographer.name)
    const location = createDOMElement("p", "location", "", photographer.city + ", " + photographer.country)
    const tagline = createDOMElement("p", "tagmine", "", photographer.tagline);
    wrapperDetails.append(name, location, tagline);
    
    
    const contact = createDOMElement("button", "contact-button", "", "Contactez-moi");
    
    const imgWrapper = createDOMElement("div", "img-container")
    const img = createDOMElement("img", "", [{name: "src", value: path.USER_THUMB + photographer.portrait}] )
    imgWrapper.append(img);
    
    heroSection.append(wrapperDetails, contact, imgWrapper);

    return heroSection;
}

export default hero;