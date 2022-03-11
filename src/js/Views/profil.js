import header from "./components/header";
import hero from "./components/profil/hero";
import gallery from "./components/profil/gallery";
import mediaFactory from "../Models/mediaFactory";
import likesCounter from "./components/profil/likesCounter";
import customSelect from "../utils/customSelect";
import contact from "./components/contactForm/contact";
import modal from "../utils/modal";
import mediaModal from "../utils/mediaModal";
import lightbox from "../utils/mediaModal";
import lightboxUI from "./components/profil/lightbox";
import modalGlobal from "../utils/modalGlobal";

const profil = (photographer, medias) => {
    document.title = `Fisheye | ${photographer.name}`;
    document.querySelector("body").className = "photographer-page";
    const cards = document.querySelectorAll("article");
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

    const counter = likesCounter(mediaSorted, photographer.price);

    
    main.append(heroSection, galleryPhotographer, counter);
    

    customSelect(medias);

    contact(photographer.name)
    lightboxUI();
    lightbox(mediaSorted)
   /* modal(mediaSorted);*/
   /*modalGlobal()*/

   
   
    
}

export default profil;