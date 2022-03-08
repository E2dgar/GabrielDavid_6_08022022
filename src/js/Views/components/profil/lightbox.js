import { createDOMElement } from "../../../services";

const lightbox = () => {
    const body = document.querySelector("body");
    const main = document.querySelector("#main-content");

    const modal = createDOMElement("section", ['modal', 'modal-media'], [{name: "aria-hidden", value: true}, {name: "role", value: "dialog"}, {name: "aria-describedby", value: "modal-title"}])
    const article = createDOMElement("article", ['media']);
    const mediaContainer = createDOMElement('div', ['media-container'])
    const title = createDOMElement("h1", "", "", ['titre media']);
    const media = 

    article.append(mediaContainer, title);
    modal.append(article);
    main.insertAdjacentElement("afterend", modal);
}

export default lightbox;