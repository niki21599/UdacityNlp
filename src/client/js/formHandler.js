function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
        
    displayCategory(formText)

}

function displayCategory(text){
    Client.postText("/text", {text: text})
    Client.getCategory()
     .then(function(data){
        Client.updateUI(data)
     })
}
export { handleSubmit }
