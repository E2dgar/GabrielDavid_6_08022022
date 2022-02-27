import { createDOMElement } from "../../services";
import { path } from "../../constants";

const heroProfil = (photographer) => {

    console.log('hero photo');
    let hero = document.querySelector("section.hero-photographer");
    if(hero){
        hero.remove()
    } else {
        hero = createDOMElement("section", "hero-photographer");
    }

    const wrapperDetails = createDOMElement("div");

    const name = createDOMElement("h2", "", "", photographer.name)
    const location = createDOMElement("p", "location", "", photographer.city + ", " + photographer.country)
    const tagline = createDOMElement("p", "tagmine", "", photographer.tagline);
    wrapperDetails.append(name, location, tagline);
    
    
    const contact = createDOMElement("button", "", "", "Contactez-moi");
    
    const imgWrapper = createDOMElement("div", "img-container")
    const img = createDOMElement("img", "", [{name: "src", value: path.USER_THUMB + photographer.portrait}] )
    imgWrapper.append(img);
    
    hero.append(wrapperDetails, contact, imgWrapper);
console.log('end of hero')
    return hero;
}

export default heroProfil;