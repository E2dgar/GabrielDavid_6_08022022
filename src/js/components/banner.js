const bannerMain = (title) => {
    
    const header = document.querySelector("header");

    if(!document.querySelector("header a")){
        const link = document.createElement("a");
        link.setAttribute("href",  "#" );
        link.className = "data-link";
       
    
        const logo = document.createElement("img");
        logo.setAttribute("alt", "Fisheye logo");
        logo.setAttribute("src", "assets/images/logo.png");
        logo.className = "logo"
    
        link.appendChild(logo);
        header.appendChild(link);
        header.append(link)
    
        const headerTitle = document.createElement("h1");
        headerTitle.textContent= title;
    
        header.append(headerTitle)
    }
    
}

const bannerProfil = () => {
    const headerTitle = document.querySelector("header h1");
    if(headerTitle) headerTitle.remove();
}   
export {bannerMain, bannerProfil };