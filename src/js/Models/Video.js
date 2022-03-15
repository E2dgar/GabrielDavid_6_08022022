import Media from './Media'
import { path } from '../constants'

class Video extends Media {
  constructor(data, isLiked) {
    super(data, isLiked)
    this.type = 'video'
    this.src = path.MEDIA_VIDEO_WIDE + data.video
    this.srcThumb = path.MEDIA_VIDEO_THUMB + data.video.replace('.mp4', 'mp4.png')
  }

  
}

export default Video