import { bannerProfil } from "./components/banner";
import profilBanner from "./profilBanner";
import { path } from "./constants";
import { getData } from "./services";
import MediaFactory from "./factories/MediaFactory"

const profil = async (photographer) => {
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
    

    /*TODO refacto get media ? */
    const { media } = await getData();

    const filteredMedia = media.filter( media => photographer[0].id === media.photographerId);

    let mediasPhotographer = document.querySelector("section.medias-section");
    if(mediasPhotographer){
        mediasPhotographer.remove()
    }
    mediasPhotographer = document.createElement("section");
    mediasPhotographer.className = "medias-section";

    const tagFilter = document.createElement("p");
    tagFilter.textContent = "Filtre à implémenter";

    const mediasWrapper = document.createElement("div");
    mediasWrapper.className = "medias-wrapper";

    filteredMedia.forEach( media => {
if(media.video){

} else {
    console.log("add media")
    mediasWrapper.append( new MediaFactory(media).createGalleryCard());    
    console.log(mediasWrapper)   
}
         
    })
    mediasPhotographer.append(mediasWrapper);

    mainWrapper.append(heroPhotographer, mediasPhotographer);


}

export default profil