import { bannerProfil } from "./components/banner";

const profil = (photographer) => {
    bannerProfil();
    //Remove photographers list
    const indexWrapper = document.getElementById("list");
    indexWrapper.remove();


    //Change title doc
    document.title = "Fisheye | " + photographer[0].name

    //Inset wrapper profil
    const mainWrapper = document.getElementById("main-content");
    const profilWrapper = document.createElement("section");

    const photographerName = document.createElement("h2")
    photographerName.textContent = photographer[0].name;
    profilWrapper.appendChild(photographerName)

    mainWrapper.appendChild(profilWrapper);
}

export default profil