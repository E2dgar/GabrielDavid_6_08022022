import { createDOMElement } from "../services"


const mediasFilters = createDOMElement("div", "listbox");
const label = createDOMElement("span", "", [{name: "id", value: "select-label"}], "Trier par");
const select = createDOMElement("div", "select");
const button = createDOMElement("button", "", [{name: "aria-haspopup", value: "listbox"},
                                               {name: "aria-labelledby", value: "select-label select-button"},
                                               {name: "id", value:"select-button"}]);

const optionsList = createDOMElement("ul", "hidden", [{name: "tabindex", value: -1},
                                                  {name: "role", value: "listbox"},
                                                  {name: "aria-labelledby", value: "select-label"},
                                                  {name: "aria-activedescendant", value: ""}]);

const options = [
    {key:"popular", value: "Popularité"},
    {key:"date", value: "Date"},
    {key:"title", value: "Titre"},
]
options.forEach(option => {
    let element = createDOMElement("li", "", [{name: "id", value: option.key},
                                              {name: "role", value: "option"}],
                                              option.value);
    optionsList.append(element)
});

select.append(button, optionsList);
mediasFilters.append(label, select);


export default mediasFilters;