import "../scss/main.scss";
import Photographer from "./factories/Photographer";
import { getData } from "./services";

let url = window.location.href
console.log(url)
const home = async () => {
    const { photographers } =  await getData();
    const wrapper = document.getElementById("list");

    photographers.forEach( photographer => {
            wrapper.innerHTML += new Photographer(photographer).createUserCard();         
        })
}




home();