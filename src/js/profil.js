import { bannerProfil } from "./components/banner";
import profilBanner from "./profilBanner";
import { path } from "./constants";

const profil = (photographer) => {
    /*bannerProfil();
    profilBanner();*/
    //Remove photographers list
    const indexWrapper = document.getElementById("list");
    if(indexWrapper){
        indexWrapper.remove();

    } 

    //Change title doc
    document.title = "Fisheye | " + photographer[0].name

    //Inset wrapper profil
    const mainWrapper = document.getElementById("main-content");
    let heroPhotographer = document.querySelector("section.hero-photographer")

    if(heroPhotographer){
        heroPhotographer.remove()
    }

     heroPhotographer = document.createElement("section");
    heroPhotographer.className = "hero-photographer";

    const wrapperDetails = document.createElement("div");

    const name =  document.createElement("h2");
    name.textContent = photographer[0].name;

    const location = document.createElement("p");
    location.className = "location";
    location.textContent = photographer[0].city + ", " + photographer[0].country;

    const tagline = document.createElement("p");
    tagline.className = "tagline";
    tagline.textContent = photographer[0].tagline;

    wrapperDetails.append(name, location, tagline);

    const contact = document.createElement("button")
    contact.textContent = "Contactez-moi"

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "img-container";
    const img = document.createElement("img")
    img.setAttribute("src", path.USER_THUMB + photographer[0].portrait)
    imgWrapper.append(img);

    
    heroPhotographer.append(wrapperDetails, contact, imgWrapper)
    mainWrapper.appendChild(heroPhotographer);
}

export default profil