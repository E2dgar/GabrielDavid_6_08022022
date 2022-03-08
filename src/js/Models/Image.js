import Media from "./Media";
import { path } from "../constants";

class ImageMedia extends Media {
    constructor(data) {
        super(data)
        this.type = "image";
        this.src = path.MEDIA_IMG_WIDE + data.image;
        this.srcThumb = path.MEDIA_IMG_THUMB + data.image;
    }
}

export default ImageMedia;