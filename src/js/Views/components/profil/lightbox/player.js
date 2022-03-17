const videoPlayer = () => {
  if(document.querySelector('.player')){
    const video = document.querySelector('video')
    const play = document.querySelector('.playpause')
    const stop = document.querySelector('.stop')
    const rwd = document.querySelector('.rwd')
    const fwd = document.querySelector('.fwd')
    const time = document.querySelector('.time')
  
    play.onclick = () => {
      if(video.paused){
        video.play()
        play.textContent = 'Pause'
      } else {
        video.pause()
        play.textContent = 'Play'
      }
    }
  
    stop.onclick = () => {
      video.pause()
      video.currentTime = 0
      play.textContent = 'Play'
    }
  
    rwd.onclick = () => {
      video.currentTime -= 3
    }
  
    fwd.onclick = () => {
      video.currentTime += 3
      if(video.currentTime >= video.duration || video.paused){
        video.pause()
        video.currentTime = 0
        play.textContent = 'Play'
      }
    }
  
    video.ontimeupdate = () => {
      let min = Math.floor(video.currentTime / 60)
      let sec = Math.floor(video.currentTime - min * 60)
      let minValue
      let secValue
  
      if(min < 10){
        minValue = '0' + min
      } else {
        minValue = min
      }
  
      if(sec < 10){
        secValue = '0' + sec
      } else {
        secValue = sec
      }
  
      time.textContent = minValue + ':' + secValue
    }
  }
}

export default videoPlayer