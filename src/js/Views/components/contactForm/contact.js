import { createDOMElement } from "../../../services";
import cross from "../icons/cross";

const contact = (photographer) => {
    const body = document.querySelector("body");
    const main = document.querySelector("#main-content");
    const contactButton = document.querySelector(".contact-button");
    const modal = createDOMElement("section", "modal", [{name: "aria-hidden", value: true}, {name: "role", value: "dialog"}, {name: "aria-describedby", value: "modal-title"}])
    const form = createDOMElement("form", "");
    const title = createDOMElement("h1", "", "", "Contactez-moi");
    const subtitle = createDOMElement("h2", "", "", photographer);

    form.append(title, subtitle, cross);

    const inputs = [
        {id: "firstname", type: "text", label: "Prénom"},
        {id: "lastname", type: "text", label: "Nom"},
        {id: "email", type: "email", label: "Email"},
        {id: "message", type: "textarea", label: "Votre message"},
    ] 

    inputs.forEach( input => {
        console.log(input.id)
        form.append(createDOMElement("label", `${input.id}-label`, [{name: "for", value: input.id}], input.label));
        if(input.type === "textarea"){
            form.append(createDOMElement("textarea", "", [{name: "id", value: input.id}]));
        } else {
            form.append(createDOMElement("input", "", [{name: "id", value: input.id}, {name: "type", value: input.type}]));
        }
        
    })

    const button = createDOMElement("button", "", [{name: "type", value: "submit"}], "Envoyer");
    form.append(button);
    modal.append(form);
    main.insertAdjacentElement("afterend", modal);

    
    /*contactButton.addEventListener("click", displayModal);*/

}

export default contact;