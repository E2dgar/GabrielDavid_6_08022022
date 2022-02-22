import Media from "./Media";

class VideoMedia extends Media {
    constructor(data){
        super();
        this.video = data.video;
    }

    createGalleryCard() {
        const wrapper = document.createElement("article");
        wrapper.className = "media-card";

        const wrapperImg = document.createElement("div");
        wrapperImg.className = "img-container";

        /*const img = document.createElement("img");
        img.setAttribute("alt", this.title);
        img.setAttribute("src", path.MEDIA_IMG_THUMB + this.image );

        wrapperImg.append(img)*/

        const legend = document.createElement("p");
        legend.className = "media-legend";

        const title = document.createElement("h3")
        /*title.textContent = this.title;*/

        const likeCounter = document.createElement("span");
        likeCounter.textContent = this.likes;

        const heart = document.createElement("i");
        heart.className = "fa-heart";

        legend.append(title, likeCounter, heart);

        wrapper.append(wrapperImg, legend)


    }
}

export default VideoMedia;