import { bannerMain } from "./components/banner";
import Photographer from "./factories/Photographer";
import { getData } from "./services";

const home = async () => {

    const photoPage = document.querySelector("section.hero-photographer");
    if(photoPage){
        photoPage.remove();
    }

    bannerMain("Nos photographes");
    const { photographers } =  await getData();
    const main = document.getElementById("main-content");
    const wrapper = document.createElement("div");
    wrapper.className="photographer_section";
    wrapper.setAttribute("id", "list")

    

    photographers.forEach( photographer => {
            wrapper.innerHTML += new Photographer(photographer).createUserCard();         
        })
    main.append(wrapper)
}

export default home;