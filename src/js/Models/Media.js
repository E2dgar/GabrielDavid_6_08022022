class Media {
  constructor(data){
    this.id = data.id
    this.title = data.title
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
    this.isLiked = false
  }

  /**
   * @param {boolean} value
   */
  set isLiked(value) {
    this._isLiked = value
  }
}

export default Media