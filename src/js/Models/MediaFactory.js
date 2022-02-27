import ImageMedia from "./Image";
import Video from "./Video";

const mediaFactory = (data) => {
    if(data.image){
        return new ImageMedia(data);
    } else if(data.video){
        return new Video(data)
    } else {
        return "Media format unknown"
    }
}

export default mediaFactory;