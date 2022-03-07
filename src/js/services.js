import { path } from "./constants"

/**
 * 
 * @returns Return data json from api url
 */
const getData = async () => {
  try {
    const response = await fetch(path.API_URL)
    const data = response.json()

    return data
  } 
  catch (error) {
    console.log(error)
  }
};


/**
 * Create a DOM element and set attributes if needed
 * @param {string} tag 
 * @param {string|null} className
 * @param {Array|null} attributes
 * @param {string} textContent
 * @returns {object} DOM Element
 */
 const createDOMElement = (tag, className, attributes, textContent) => {
  const DOMElement = document.createElement(tag);

  if(className){
    DOMElement.className = className;
  }

  if(attributes){
    attributes.forEach(attribute => {
      DOMElement.setAttribute(attribute.name, attribute.value)
    })
  }

  if(textContent){
    DOMElement.textContent = textContent
  }
  
  return DOMElement;
};


export { getData, createDOMElement }