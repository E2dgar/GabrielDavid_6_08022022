import Media from "./Media";

class ImageMedia extends Media {
    constructor(data) {
        super(data)
        this.type = "image";
        this.image = data.image;
    }
}

export default ImageMedia;