import { path } from "../constants";
import Media from "./Media";

class ImgMedia extends Media {
    constructor(likes, title, price, date, image){
        super(likes, title, price, date, image);
    }

    createGalleryCard() {
        const wrapper = document.createElement("article");
        wrapper.className = "media-card";

        const wrapperImg = document.createElement("div");
        wrapperImg.className = "img-container";

        const img = document.createElement("img");
        img.setAttribute("alt", this.title);
        img.setAttribute("src", path.MEDIA_IMG_THUMB + this.image );

        wrapperImg.append(img)

        const legend = document.createElement("p");
        legend.className = "media-legend";

        const title = document.createElement("h3")
        title.textContent = this.title;

        const likeCounter = document.createElement("span");
        likeCounter.textContent = this.likes;

        const likeButton = document.createElement("button");
        const likeSvg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        likeSvg.setAttribute('viewBox', '0 0 20 20');
        likeSvg.setAttribute('aria-hidden', true);

        const likePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        likePath.setAttribute(
            "d",
            "M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"
        )
        likeSvg.append(likePath);
        likeButton.append(likeSvg)

        legend.append(title, likeCounter, likeButton);

        wrapper.append(wrapperImg, legend)

        return wrapper


    }
}

export default ImgMedia;