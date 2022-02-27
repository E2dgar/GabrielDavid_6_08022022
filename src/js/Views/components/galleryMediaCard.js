import { createDOMElement } from "../../services";
import likeSvg from "../../components/icons/like";
import mediaCardFactory from "./mediaCardFactory";

const galleryMediaCard = (media) => {
    const card = document.createElement("article");
    card.className = "media-card";

    const wrapperThumb = document.createElement("div");
    wrapperThumb.className = "img-container";

    const img = mediaCardFactory(media);
    wrapperThumb.append(img)

    const legend = document.createElement("p");
    legend.className = "media-legend";

    const title = document.createElement("h3")
    title.textContent = media.title;

    const likeCounter = document.createElement("span");
    likeCounter.textContent = media.likes;

    const likeButton = createDOMElement("button", "like-button", [{name: "aria-label", value: "likes"}]);    
    likeButton.append(likeSvg());


    legend.append(title, likeCounter, likeButton);

    card.append(wrapperThumb, legend);

    return card;
}

export default galleryMediaCard;