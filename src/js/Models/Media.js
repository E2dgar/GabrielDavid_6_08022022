class Media {
    constructor(data){
        console.log('media', data)
        this.title = data.title;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
    }
}

export default Media;