import "../scss/main.scss";
import Router from "./router";
import { bannerMain } from "./components/banner";
import Photographer from "./factories/Photographer";
import { getData } from "./services";


new Router();
const home = async () => {
    bannerMain("Nos photographes");
    const { photographers } =  await getData();
    const wrapper = document.getElementById("list");

    photographers.forEach( photographer => {
            wrapper.innerHTML += new Photographer(photographer).createUserCard();         
        })
}

home();