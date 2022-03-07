import header from "./components/header";
import Photographer from "../Models/Photographer";
import photographerCard from "./components/home/photographerCard";
import { createDOMElement } from "../services";

const home = async (photographers) => {
    document.querySelector("body").className = "home-page";

    document.title = "Fisheye";

    const elmentsToRemove = [
        document.querySelector("section.hero-photographer"),
        document.querySelector("section.medias-section"),
        document.querySelector("aside"),
        document.querySelector(".modal"),
    ]

    elmentsToRemove.forEach(elt => {
        if(elt){
            elt.remove();
        }
    })

    header("Nos photographes");

    const main = document.getElementById("main-content");

    if(!document.querySelector("section.photographer-section")){
        const wrapper = createDOMElement("section", "photographer-section", [{name: "id", value: "list"}]);

        photographers.forEach( photographer => wrapper.append( photographerCard(new Photographer(photographer))));
            
        main.append(wrapper)
    }  
}

export default home;