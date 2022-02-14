class PhotographerApi {
    /**
     * @param {string} url
     */
     constructor(url){
        this._url = url;
    }

    async getPhotographers() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(error => console.log('api error', error))
    }
}

const apiTest = await new PhotographerApi('src/js/data/photographers.json').getPhotographers();
console.log(apiTest)

export default PhotographerApi;