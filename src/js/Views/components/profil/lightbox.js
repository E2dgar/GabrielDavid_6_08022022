import { createDOMElement } from "../../../services";
import arrowLeft from "../icons/arrowLighboxLeft";
import arrowRight from "../icons/arrowLightboxRight";
import cross from "../icons/cross";

const lightbox = () => {
    const body = document.querySelector("body");
    const main = document.querySelector("#main-content");

    const modal = createDOMElement("section", ['modal', 'modal-media'], [{name: "aria-hidden", value: true}, {name: "role", value: "dialog"}, {name: "aria-label", value: "Media modal"}])
    const article = createDOMElement("article", ['media']);
    const mediaContainer = createDOMElement('div', ['media-container'])
    const title = createDOMElement("h1", "");
    
    const closeBtutton = createDOMElement("button", ['modal-button', 'close-modal'], [{name: 'aria-label', value: 'Close medias modal'}]);
    closeBtutton.append(cross());

    const leftButton = createDOMElement("button", ['modal-button', 'left-button', 'slide-button'], [{name: 'data-direction', value: 'left'}, {name: 'aria-label', value: 'Next media'}]);
    leftButton.append(arrowLeft());

    const rightButton = createDOMElement("button", ['modal-button', 'right-button', 'slide-button'], [{name: 'data-direction', value: 'right'}, {name: 'aria-label', value: 'Previous media'}]);
    rightButton.append(arrowRight());

    article.append(mediaContainer, title);
    modal.append(article, leftButton,  rightButton, closeBtutton);
    main.insertAdjacentElement("afterend", modal);
}

export default lightbox;