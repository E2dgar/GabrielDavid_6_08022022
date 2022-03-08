import { createDOMElement } from '../../../services';
import likeSvg from '../icons/like';
import mediaCardFactory from '../../../Models/mediaCardFactory';
import mediaModal from '../../../utils/mediaModal';

const mediaCard = (media) => {
    const card = document.createElement('article');
    card.className = 'media-card';
    card.setAttribute('data-type', media.type)
    card.setAttribute('id', media.id)


    const wrapperThumb = document.createElement("div");
    wrapperThumb.className = "img-container";

    const img = document.createElement("img");
    img.setAttribute("alt", media.title);
    img.setAttribute("src", media.srcThumb );
    img.setAttribute("data-modal", "modal-media")
    wrapperThumb.append(img)

    const legend = document.createElement("p");
    legend.className = "media-legend";

    const title = document.createElement("h3")
    title.textContent = media.title;

    const likeCounter = document.createElement("span");
    likeCounter.textContent = media.likes;

    const likeButton = createDOMElement("button", ['like-button'], [{name: "aria-label", value: "likes"}]);   
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