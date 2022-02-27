import { createDOMElement } from "../services";
import heroProfil from "./components/heroProfil";
import galleryProfil from "./components/galleryProfil";
import mediaFactory from "../Models/MediaFactory";
import Media from "../models/Media";
import ImageMedia from "../Models/Image";
import header from "../components/header";

const profil = (photographer, medias) => {
    document.querySelector("body").className = "photographer-page";
    header();
    /* manage header and remove home lements */
    const homeList = document.querySelector("#list");
    homeList.remove();
    const hero = heroProfil(photographer);

    const getMedias =  medias;
    console.log('await',getMedias)
    const mediaSorted = [];
    getMedias.forEach(media => {
        console.log('perend ', media)
        console.log('stop', new ImageMedia(media));
        mediaSorted.push(mediaFactory(media));
    })
    console.log('sorted',mediaSorted)
    const gallery = galleryProfil(mediaSorted);
console.log('gal', gallery)
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
    mediasPhotographer.append(mediasFilters, mediasWrapper);

    const counter = likes(filteredMedia, photograph.price);*/

    main.append(hero, gallery);

    return main;

}

export default profil;