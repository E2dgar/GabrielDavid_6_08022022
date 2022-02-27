import Media from "./Media";
import { path } from "../constants";

class Video extends Media {
    constructor(data) {
        super(data)
        /*this.srcThumb = path.MEDIA_VIDEO_THUMB + (data.video).replace(".","");
        this.src = path.MEDIA_VIDEO + data.video;*/
        this.type = "video";
        this.video = data.video;
    }
}

export default Video;