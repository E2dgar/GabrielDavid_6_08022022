const modal = () => {
    const main = document.querySelector("#main-content");
    const contactButton = document.querySelector(".contact-button");
    const modal = document.querySelector(".modal");
    const body = document.querySelector("body");
    const close = document.querySelector(".close-modal");

    const openModal = () => {
        main.setAttribute("aria-hidden", true);
        modal.classList.add("display-modal")
        body.classList.add("no-scroll")
    }
    contactButton.addEventListener("click", openModal);

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