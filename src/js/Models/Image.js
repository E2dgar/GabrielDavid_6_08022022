import Media from "./Media";
import { path } from "../constants";

class ImageMedia extends Media {
    constructor(data) {
        super(data)
       /* this.srcThumb = path.MEDIA_IMG_THUMB + data.image;
        this.srcWide = path.MEDIA_IMG_WIDE + data.image;*/
        this.type = "image";
        this.image = data.image;
    }
}

export default ImageMedia;