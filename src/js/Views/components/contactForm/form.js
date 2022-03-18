import { closeModal } from '../../../utils/modal'

const submitForm = (e, inputs) => {
	e.preventDefault()

	const contactForm = document.getElementById('contact-form')
	const firstName = document.getElementById('firstname')
	const lastName = document.getElementById('lastname')
	const mail = document.getElementById('email')
	const message = document.getElementById('message')

	// On récupère les data
	let data  = {}
	inputs.forEach(input => {
		let inputData = document.getElementById(input.id)
		data[inputData.id] =  inputData.value
	})

	//VALIDATION  FORM
	const errorMessages = {
		isRequired: 'Ce champs est requis',
		text: 'Veuillez entrez au moins 2 caractères pour ce champs.Les chiffres ne sont pas acceptés.',
		invalidMail: 'Veuillez entrez une adresse mail valide',
	}

	const validationRules = {
		name: /^(?=.{2,50}$)[a-zÀ-ÿ]+(?:['-\s][a-zÀ-ÿ]+)*$/gi, //Min 2 chars. Accents, ' , -  are allowed and insensitive case
		mailRegex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
	}


	//****************************TESTS FUNCTIONS****************************//
	//Test if is empty
	const notEmpty = v => !!v

	/**
	 * Create an object
	 * @param {string} inputName
	 * @param {string} errorMessage
	 * @returns {object}
	 */
	const createKeyValueObject = (inputName, errorMessage) => {
		const error = {}
		error[inputName] = errorMessage
		return error
	}

	/**
	 *  Test if input value match regex
	 * @param {object} input 
	 * @param {string} inputRegex 
	 * @param {string} errorMessage 
	 * @returns {object|null} Object error or null
	 */
	const matchRegex = (input, inputRegex, errorMessage) => {
			const regex = new RegExp(inputRegex)
			if(!regex.test(input.value)){
				return createKeyValueObject(input.name, errorMessage)
			}
			return null
	}

	/**
	 * Test input text = not empty and match regex
	 * @param {object} input 
	 * @returns {object|null} Object error or null
	 */
	const validateInputText = input => {
		if (!notEmpty(input.value)) {
			return createKeyValueObject(input.name, errorMessages.isRequired)
		}
		return matchRegex(input, validationRules.name, errorMessages.text)
	}

	/**
	 * Test input text = not empty and match regex
	 * @param {object} input 
	 * @returns {object|null} Object error or null
	 */
		const notEmptyText = input => {
			if (!notEmpty(input.value)) {
				return createKeyValueObject(input.name, errorMessages.isRequired)
			}
	}

	/** Test input mail = not empty + valid mail
	 *  @param {object} input
	 *  @returns {object|null} Error Object or null 
	 */
	const validateMail = input => {
		if (!notEmpty(input.value)) {
			return createKeyValueObject(input.name, errorMessages.isRequired)
		}
		return matchRegex(input, validationRules.mailRegex, errorMessages.invalidMail)
	}

	//*****************************ERRORS**************************************
	/**
	 * Create error element and append in DOM
	 * @param {string} inputName 
	 * @param {string} errorMessage 
	 */
	const createErrorElement = (inputName, errorMessage) => {
		//Create p tag with error-message class
		const errorDOMElement = document.createElement('p')
		errorDOMElement.className = 'error-message'

		const message = document.createTextNode(errorMessage); //Create messsage and append to errorElement
		errorDOMElement.appendChild(message)

		document.querySelector(`#${inputName}`).insertAdjacentElement('afterend', errorDOMElement)
	}

	/** Remove all errors messages in DOM */
	const cleanAllFormErrors = () => {
		const errorsDisplayed = document.querySelectorAll('.error-message')
		errorsDisplayed?.forEach(element => element.remove())
	}

	/**
	 * Loop on errors and send each error to createErrorElement
	 * @param {Array} errors 
	 */
	const manageErrorMessage = errors => {
		errors.map(error => createErrorElement(Object.keys(error), Object.values(error)))
	}

	//On efface les messages d'erreur
	cleanAllFormErrors()

	//On récupère le tableau d'erreur en éxecutant les tests sur les champs
	const errors = [
		validateInputText(firstName),
		validateInputText(lastName),
		validateMail(mail),
		notEmptyText(message),
	].filter(notEmpty)

	//Si erreurs on les traite
	if(errors.length > 0) {
		manageErrorMessage(errors)
		return
	}

	closeModal(null)
	//Si ok on log les data
	console.table(data)
	contactForm.reset() 
}

export default submitForm
