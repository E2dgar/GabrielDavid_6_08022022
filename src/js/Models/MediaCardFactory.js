import { path } from "../constants";

/**
 * Modify src depending on media type
 * @param {object} data 
 * @returns 
 */
const MediaCardFactory = (media) => {
    if(media.type === "image"){
        return imageThumb(media.title, media.image);
    } else if(media.type === "video"){
        return videoThumb(media.title, media.video)
    } 
    return "Format error"
}

const imageThumb = (title, image) => {
    const img = document.createElement("img");
    img.setAttribute("alt", title);
    img.setAttribute("src", path.MEDIA_IMG_THUMB + image );
    img.setAttribute("data-modal", "modal-media")

    return img;
}

const videoThumb = (title, image) => {
    const img = document.createElement("img");
    img.setAttribute("alt", title);
    img.setAttribute("src", path.MEDIA_VIDEO_THUMB + image.replace(".","") + ".png" );
    img.setAttribute("data-modal", "modal-media")

    return img;
}

export default MediaCardFactory;