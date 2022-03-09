import { createDOMElement } from "../../../services";
import arrowLeft from "../icons/arrowLighboxLeft";
import arrowRight from "../icons/arrowLightboxRight";
import cross from "../icons/cross";

const lightbox = () => {
    const body = document.querySelector("body");
    const main = document.querySelector("#main-content");

    const modal = createDOMElement("section", ['modal', 'modal-media'], [{name: "aria-hidden", value: true}, {name: "role", value: "dialog"}, {name: "aria-describedby", value: "modal-title"}])
    const article = createDOMElement("article", ['media']);
    const mediaContainer = createDOMElement('div', ['media-container'])
    const title = createDOMElement("h1", "", "", ['media-title']);
    
    const closeBtutton = createDOMElement("button", ['modal-button', 'close-modal']);
    closeBtutton.append(cross());

    const leftButton = createDOMElement("button", ['modal-button', 'left-button', 'slide-button'], [{name: 'data-direction', value: 'left'}]);
    leftButton.append(arrowLeft());

    const rightButton = createDOMElement("button", ['modal-button', 'right-button', 'slide-button'], [{name: 'data-direction', value: 'right'}]);
    rightButton.append(arrowRight());

    article.append(mediaContainer, title);
    modal.append(article, rightButton, leftButton, closeBtutton);
    main.insertAdjacentElement("afterend", modal);
}

export default lightbox;