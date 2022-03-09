const submitForm = (e, inputs) => {
    e.preventDefault()

    let data  = {}

    inputs.forEach(input => {
        let inputData = document.getElementById(input.id)
        data[inputData.id] =  inputData.value
    })
    console.table(data)
}

export default submitForm
