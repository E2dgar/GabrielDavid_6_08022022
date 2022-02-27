import "../scss/main.scss";

import home from "./home";
import profil from "./Views/profil";
import { getData } from "./services";
import Photographer from "./Models/Photographer";


window.onload = () => {
    history.pushState(null, null,  window.location.pathname );
    const links = document.querySelectorAll('.data-link');
    let url ="";
    links.forEach(element => {
        element.addEventListener('click', e => {
            e.preventDefault();
            url=e.target.closest('a').href
            history.pushState(null, null, window.location.pathname + url)
        })
    });

   home();
}


const renderPage = async () => {
  const { photographers } =  await getData();

  const hash = window.location.hash.substring(1);
  if(hash !== "" && hash !== "main-content"){
    const filtered = photographers.filter(photographer => photographer.id === parseInt(hash));
    console.log("filt",filtered)
    const photographer = new Photographer(filtered[0]);
    console.log('ph', photographer)
    profil(photographer, await photographer.getMedias())
  }else {
    home();
  }
}
window.onpopstate = renderPage;