import ImgMedia from "./ImgMedia";
import VideoMedia from "./VideoMedia";

class MediaFactory {
    constructor(data){
        if(data.image){
            return new ImgMedia(data);
        } else if (data.video){
            return new VideoMedia(data);
        } else {
            throw "Invalid format"
        }
    }
}

export default MediaFactory;