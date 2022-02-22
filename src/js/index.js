import "../scss/main.scss";

import home from "./home";
import profil from "./profil";
import { getData } from "./services"


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
  if(hash !== ""){
    const filtered = photographers.filter(photographer => photographer.id === parseInt(hash))
    profil(filtered)
  }else {
    home();
  }
}
window.onpopstate = renderPage;