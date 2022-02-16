import "../scss/main.scss";
import Photographer from "./factories/Photographer";
import { getData } from "./services";

const home = async () => {
    const { photographers } =  await getData();
    const wrapper = document.getElementById("list");

    photographers.forEach( photographer => {
            wrapper.innerHTML += new Photographer(photographer).createUserCard();         
        })
}




home();