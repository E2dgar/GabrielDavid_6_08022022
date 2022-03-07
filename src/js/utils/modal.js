import { createDOMElement } from "../services";

const modal = () => {
    const main = document.querySelector("#main-content");
    const lightbox = document.querySelector('.modal-media article .media-container')
    const contactButton = document.querySelector(".contact-button");
    const body = document.querySelector("body");
    const close = document.querySelector(".close-modal");
    let modal = null;

    const cards= document.querySelectorAll("article.media-card");
    const mediaModal = (e) => {
        const src = ((e.target.getAttribute("src").replace('thumbs', 'wide')));
        const type = e.target.closest("article").getAttribute('data-type');
        let mediaElement = null
        switch(type){
            case('image'):
                mediaElement = createDOMElement("img", "", [{name: 'src', value: src}]);
            break;
            case('video'):
                let video = src.replace('mp4.png', '.mp4')
                mediaElement = createDOMElement("video", "", [{name: 'controls', value: true}, {name: 'src', value: video}]);
            break;
            default: ""
        }
        lightbox.append(mediaElement);
    }
    cards.forEach(card => {
        card.addEventListener("click", e => {targetModal(e); openModal(); mediaModal(e)});
    });

    const targetModal = e => {
        modal = document.querySelector("." + e.target.getAttribute("data-modal"))
    }

    const openModal = () => {
        main.setAttribute("aria-hidden", true);
        modal.classList.add("display-modal")
        body.classList.add("no-scroll")
    }
    contactButton.addEventListener("click", e => {targetModal(e); openModal()});

    const closeModal = () => {
        main.removeAttribute("aria-hidden");
        modal.classList.remove("display-modal")
        body.classList.remove("no-scroll")
    }
    close.addEventListener("click", closeModal);

    
    const keyEvents = (e) => {
        let key = e.which || e.keycode;

        if(key === 27){
        e.preventDefault();
            closeModal();
        }
    }
    document.addEventListener("keydown", keyEvents)
}

export default modal;