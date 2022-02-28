import header from "./components/header";
import hero from "./components/profil/hero";
import gallery from "./components/profil/gallery";
import mediaFactory from "../Models/MediaFactory";
import likesCounter from "./components/profil/likesCounter";

const profil = (photographer, medias) => {
    document.querySelector("body").className = "photographer-page";
    header();
    /* manage header and remove home lements */
    const homeList = document.querySelector("#list");
    homeList.remove();
    const heroSection = hero(photographer);

    const getMedias =  medias;
    const mediaSorted = [];
    getMedias.forEach(media => mediaSorted.push(mediaFactory(media)));
    
    const galleryPhotographer = gallery(mediaSorted);

    const main = document.querySelector("#main-content");

    /*const { media } = await getData();

    const filteredMedia = media.filter( media => photograph.id === media.photographerId);

    let mediasPhotographer = document.querySelector("section.medias-section");
    if(mediasPhotographer){
        mediasPhotographer.remove()
    }
    mediasPhotographer = createDOMElement("section", "medias-section");


    const mediasWrapper = createDOMElement("div", "medias-wrapper");

    filteredMedia.forEach( media => {
        if(media.video){

        } else {
            mediasWrapper.append( new MediaFactory(media).createGalleryCard()); 
        }
         
    })
    mediasPhotographer.append(mediasFilters, mediasWrapper);*/

    const counter = likesCounter(mediaSorted, photographer.price);

    
    main.append(heroSection, galleryPhotographer, counter);

    return main;
}

export default profil;