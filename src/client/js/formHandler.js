function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
        
        
    displayCategory(formText)
    
    

}

function displayCategory(text){
    determineCategory(text)
     .then(function(data){
        Client.updateUI(data)
     })
}



function determineCategory(text){
    
    Client.postText("http://localhost:8081/text", {text: text})
    return Client.getCategory()
}
export { handleSubmit, determineCategory }
