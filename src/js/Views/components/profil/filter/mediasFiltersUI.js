import { createDOMElement } from '../../../../services'

const mediasFilters = createDOMElement('div', ['filter-container'])

const options = { 
    popular:  'Popularité',
    title:    'Titre',
}

const listboxArea = createDOMElement('div', ['listbox-area'])
const leftArea = createDOMElement('div', ['left-area'])
const label = createDOMElement('span', ['label'], [{name: 'id', value: 'select-label'}], 'Trier par')
const optionsWrapper = createDOMElement('div', '', [{name: 'id', value: 'options-wrapper'}])
const selectedOpt = createDOMElement('button', '', [{name: 'id', value: 'selected-opt'}, {name: 'aria-haspopup', value: 'listbox'}, {name: 'aria-labelledby', value: 'select-label selected-opt'}], options[Object.keys(options)[0]])

const list = createDOMElement('ul', ['hidden'], [{name: 'id', value: 'options-list'}, {name: 'role', value: 'listbox'}, {name: 'aria-labelledby', value: 'select-label'}, {name: 'tabindex', value: -1}])


for (const [key, value] of Object.entries(options)){
  let optionLi = createDOMElement('li', '', [{name: 'id', value: key}, {name: 'role', value: 'option'}, {name: 'tabindex', value: 0}], value)
  list.append(optionLi)
}

optionsWrapper.append(selectedOpt, list)
leftArea.append(label, optionsWrapper)
listboxArea.append(leftArea)

mediasFilters.append(listboxArea)

export default mediasFilters