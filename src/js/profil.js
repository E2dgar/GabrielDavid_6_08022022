import header from "./components/header";
import { path } from "./constants";
import { getData, createDOMElement } from "./services";
import MediaFactory from "./factories/MediaFactory";
import likes from "./components/likes";
import mediasFilters from "./components/mediasFilters";

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


    
    
    /*TODO refacto get media ? */
    
}

export default profil