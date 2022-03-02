import mediaCard from "../Views/components/profil/mediaCard";
import MediaFactory from "../Models/MediaFactory";

const gallerySort = medias => {
    const gallery = document.querySelector(".medias-wrapper");
    const cards = document.querySelectorAll(".media-card");

    cards.forEach( card => {
        card.remove();
    });

    const mediaSorted = [];
    medias.forEach(media => mediaSorted.push(MediaFactory(media)));
    mediaSorted.forEach( media =>  gallery.append(mediaCard(media)));
}

export default gallerySort;