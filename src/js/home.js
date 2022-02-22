import header from "./components/header";
import Photographer from "./factories/Photographer";
import { getData, createDOMElement } from "./services";

const home = async () => {
    document.querySelector("body").className = "home-page";

    const photoPage = document.querySelector("section.hero-photographer");
    const photoPageGallery = document.querySelector("section.medias-section");

    if(photoPage){
        photoPage.remove();
    }
    if(photoPageGallery){
        photoPageGallery.remove();
    }

    header("Nos photographes");

    const { photographers } =  await getData();
    
    const main = document.getElementById("main-content");

    if(!document.querySelector("section.photographer-section")){
        const wrapper = createDOMElement("div", "photographer-section", [{name: "id", value: "list"}]);

        photographers.forEach( photographer => {
                wrapper.innerHTML += new Photographer(photographer).createUserCard();         
            });
            
        main.append(wrapper)
    }  
}

export default home;