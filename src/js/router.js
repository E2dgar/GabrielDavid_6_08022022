import { getData } from "./services";
import profil from "./profil";

class Router {
    constructor() {
        window.addEventListener("hashchange", e => this.onRouteChange(e));
    }

    async onRouteChange(e) {
        const hashLocation = window.location.hash.substring(1);

        const { photographers } =  await getData();

        if(!isNaN(hashLocation)){
            const filtered = photographers.filter(photographer => photographer.id === parseInt(hashLocation))
            profil(filtered);
        }

    }
}

export default Router;