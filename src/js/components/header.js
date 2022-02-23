import { createDOMElement } from "../services";

const header = (title) => {
    const header = document.querySelector("header");

    if(!document.querySelector("header a")){
        const link = createDOMElement("a", "data-link", [{name: "href", value: "#"}]);
    
        const logo = createDOMElement("img", "logo", [ {name: "alt", value: "Fisheye Home page"},
                                                       {name: "src", value: "assets/images/logo.png"}]);
       
    
        link.append(logo);
        header.append(link)
    }
    
    if(!document.querySelector("header h1")){
        const headerTitle = createDOMElement("h1", "", "", title);
        header.append(headerTitle)
    }

    if(!document.querySelector("body").classList.contains("home-page")){
        document.querySelector("header h1").remove();
        console.log('delete')
    }

}

export default header;