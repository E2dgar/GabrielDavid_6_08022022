import { createDOMElement } from "../services";
import heartIcon from "../components/heartIcon";


const likes = (data, price) => {
    const aside = createDOMElement("aside");

    let count = 0;
    data.forEach(like => count += like.likes);

   
    const counter = createDOMElement("span", "counter", "", count);

    const tarif = createDOMElement("span", "price", "", price + "€ / jour");

    aside.append(counter, heartIcon, tarif);

    return aside;
}

export default likes;