import { createDOMElement } from "../services";

const modal = (medias) => {
    const main = document.querySelector("#main-content");
    const lightboxArticle = document.querySelector('.modal-media article')
    const lightbox = document.querySelector('.modal-media article .media-container')
    const contactButton = document.querySelector(".contact-button");
    const body = document.querySelector("body");
    const close = document.querySelector(".close-modal");
    const slideButton = document.querySelectorAll('.slide-button')
    
    let modal = null;
    let mediaIndex = null;
    let currentIndex = null

console.log('medias', medias);
    const cards= document.querySelectorAll("article.media-card");
    const mediaModal = (e) => {
        const mediaLightbox = document.querySelector('.modal-media .media-current')
        if(mediaLightbox) {
            mediaLightbox.remove()
        }
        const targetArticle = e.target.closest("article")
        const media = medias.filter(media => parseInt(media.id) === parseInt(targetArticle.id))[0]
        lightboxArticle.setAttribute('data-id', parseInt(targetArticle.id))
        currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(document.querySelector('.modal-media article').getAttribute('data-id')))
        if(currentIndex === 0){
            console.log('prev not')
            const leftArrow = document.querySelector('.left-button')
            leftArrow.classList.add('hidden')
        }
        if(currentIndex === medias.length - 1){
         document.querySelector('.right-button').classList.add('hidden')
     }
        const src = media.src;
        const type = media.type;
        let mediaElement = null
        switch(type){
            case('image'):
                mediaElement = createDOMElement("img", ['media-current'], [{name: 'src', value: src}]);
            break;
            case('video'):
                let video = src.replace('mp4.png', '.mp4')
                mediaElement = createDOMElement("video", ['media-current'], [{name: 'controls', value: true}, {name: 'src', value: video}]);
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

    const slide = (e) => {
        const direction = e.target.classList.contains('left-button') ? 'left' : 'right';
        console.log('direction', direction)
        const currentMedia = document.querySelector('.media-current')
       /* mediaIndex = medias.findIndex(media => parseInt(media.id) === parseInt(targetArticle.id))*/
       currentIndex = medias.findIndex(media => parseInt(media.id) === parseInt(document.querySelector('.modal-media article').getAttribute('data-id')))
      
       console.log('cur', currentIndex)
        if(direction === "right") {
            document.querySelector('.left-button').classList.remove('hidden')
            currentIndex++
            console.log('plus', currentIndex)
            const newMediaSrc = medias[currentIndex].src
            currentMedia.setAttribute('src', newMediaSrc);
            lightboxArticle.setAttribute('data-id', medias[currentIndex].id)
        }
        if(direction === "left") {
            document.querySelector('.left-button').classList.remove('hidden')
            currentIndex--
            console.log('plus', currentIndex)
            const newMediaSrc = medias[currentIndex].src
            currentMedia.setAttribute('src', newMediaSrc);
            lightboxArticle.setAttribute('data-id', medias[currentIndex].id)
        }
        if(currentIndex === 0){
            console.log('prev not')
            const leftArrow = document.querySelector('.left-button')
            leftArrow.classList.add('hidden')
        }
        if(currentIndex === medias.length - 1){
         document.querySelector('.right-button').classList.add('hidden')
     }

    }
    slideButton.forEach(button => {
        button.addEventListener('click', e => slide(e))
    })

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