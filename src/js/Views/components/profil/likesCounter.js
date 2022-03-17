import { createDOMElement } from '../../../services'
import likeSvg from '../icons/like'

const likesCounter = (data, price) => {
  const aside = createDOMElement('aside')

  let count = 0
  data.forEach(like => count += like.likes)

  const counter = createDOMElement('span', ['counter'], '', count)

  const likeButton = likeSvg()

  const tarif = createDOMElement('span', ['price'], '', price + '€ / jour')

  aside.append(counter, likeButton , tarif)

  return aside
}

export default likesCounter