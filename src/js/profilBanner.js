const profilBanner = (photographer) => {
    const wrapper = document.getElementById("main-content")
    const section = document.createElement("section")
    const details = document.createElement("div")
    const title = document.createElement("h1")
    const location = document.createElement("p")
    const tagline = document.createElement("p")
    const contact = document.createElement("button")
    const imgContainer = document.createElement("div")
    const img = document.createElement("img")

    section.append(title);
    section.append(imgContainer);
    wrapper.append(section)

}

export default profilBanner