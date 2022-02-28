import { createDOMElement } from "../../../services";
import likeSvg from "../icons/like";
import MediaCardFactory from "../../../Models/MediaCardFactory";

const mediaCard = (media) => {
    const card = document.createElement("article");
    card.className = "media-card";

    const wrapperThumb = document.createElement("div");
    wrapperThumb.className = "img-container";

    const img = MediaCardFactory(media);
    wrapperThumb.append(img)

    const legend = document.createElement("p");
    legend.className = "media-legend";

    const title = document.createElement("h3")
    title.textContent = media.title;

    const likeCounter = document.createElement("span");
    likeCounter.textContent = media.likes;

    const likeButton = createDOMElement("button", "like-button", [{name: "aria-label", value: "likes"}]);   
    const likeIcon = likeSvg(); 

    const updateCount = () => {
        const mainCounter = document.querySelector("aside span.counter");
        likeCounter.textContent++;
        mainCounter.textContent++;
    }
    likeIcon.addEventListener("click", updateCount)
    likeButton.append(likeIcon);


    legend.append(title, likeCounter, likeButton);

    card.append(wrapperThumb, legend);

    return card;
}

export default mediaCard;