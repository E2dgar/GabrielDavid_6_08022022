import Media from "./Media";

class Video extends Media {
    constructor(data) {
        super(data)
        this.type = "video";
        this.video = data.video;
    }
}

export default Video;