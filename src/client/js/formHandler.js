function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value   
    displaySentiment(formText)
}

function displaySentiment(url){
    determineSentiment(url)
     .then(function(data){
        Client.updateUI(data)
     })
}

function determineSentiment(url){
    
    Client.postText("http://localhost:8081/text", {url: url})
    return Client.getSentiment()
}
export {handleSubmit, determineSentiment}
