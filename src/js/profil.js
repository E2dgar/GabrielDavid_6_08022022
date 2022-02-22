import header from "./components/header";
import { path } from "./constants";
import { getData, createDOMElement } from "./services";
import MediaFactory from "./factories/MediaFactory"

const profil = async (photographer) => {
    document.querySelector("body").className = "photographer-page";
    const photograph = photographer[0];

    //Change title doc
    document.title = "Fisheye | " + photograph.name;

    header();
    //Remove photographers list
    const indexWrapper = document.getElementById("list");
    if(indexWrapper){
        indexWrapper.remove();
    } 

    //Photographer profil
    const mainWrapper = document.getElementById("main-content");
    let heroPhotographer = document.querySelector("section.hero-photographer")

    if(heroPhotographer){
        heroPhotographer.remove()
    }
    heroPhotographer = createDOMElement("section", "hero-photographer");


    const wrapperDetails = createDOMElement("div");

    const name = createDOMElement("h2", "", "", photograph.name)
    const location = createDOMElement("p", "location", "", photograph.city + ", " + photograph.country)
    const tagline = createDOMElement("p", "tagmine", "", photograph.tagline);
    wrapperDetails.append(name, location, tagline);

    
    const contact = createDOMElement("button", "", "", "Contactez-moi");

    const imgWrapper = createDOMElement("div", "img-container")
    const img = createDOMElement("img", "", [{name: "src", value: path.USER_THUMB + photograph.portrait}] )
    imgWrapper.append(img);

    heroPhotographer.append(wrapperDetails, contact, imgWrapper)
    
    /*TODO refacto get media ? */
    const { media } = await getData();

    const filteredMedia = media.filter( media => photograph.id === media.photographerId);

    let mediasPhotographer = document.querySelector("section.medias-section");
    if(mediasPhotographer){
        mediasPhotographer.remove()
    }
    mediasPhotographer = createDOMElement("section", "medias-section");

    const tagFilter = document.createElement("p");
    tagFilter.textContent = "Filtre à implémenter";

    const mediasWrapper = createDOMElement("div", "medias-wrapper");

    filteredMedia.forEach( media => {
        if(media.video){

        } else {
            mediasWrapper.append( new MediaFactory(media).createGalleryCard()); 
        }
         
    })
    mediasPhotographer.append(mediasWrapper);

    mainWrapper.append(heroPhotographer, mediasPhotographer);
}

export default profil