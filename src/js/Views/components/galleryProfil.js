import { createDOMElement } from "../../services";
import galleryMediaCard from "./galleryMediaCard";
import Photographer from "../../models/Photographer";
import MediaFactory from "../../Models/MediaFactory";

const galleryProfil = (medias) => {
    console.log('medias',medias);
    /* Remove potential previous gallery */
    let gallery = document.querySelector("section.medias-section");
    if(gallery){
        gallery.remove()
    }
    gallery = createDOMElement("section", "medias-section");

    /*const galleryMedias = await photographer.getMedias();
   console.log(galleryMedias)*/
    const mediasWrapper = createDOMElement("div", "medias-wrapper");

    /* Filter depending on media type */
    medias.forEach( media => {
        console.log(galleryMediaCard(media));
        mediasWrapper.append(galleryMediaCard(media)); 
    });
    /*mediasPhotographer.append(mediasFilters, mediasWrapper);

    const counter = likes(filteredMedia, photograph.price);*/
    /*mainWrapper.append(heroPhotographer, mediasPhotographer, counter);*/
   /* mainWrapper.append(heroPhotographer, mediasPhotographer);*/
   gallery.append(mediasWrapper);
console.log("typ",gallery)
   return gallery;

}

export default galleryProfil;