const postText = async (url = "", data = {}) =>{ 
    const res = await fetch (url, {
        method: "Post", 
        credentials: "same-origin",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

const getSentiment = async () =>{
    
    const res = await fetch("http://localhost:8081/analyseText")

    try {
        const sentimentJson = await res.json()
        
        return sentimentJson
        
    } catch (error) {
        console.log(error);
        
    }
}

const updateUI = (sentiment) => {
    document.getElementById('results').innerHTML = ""
    addParagraphtoResult("p0")
    if (sentiment.text === "invalid") {
        let p = document.getElementById('p0')
        p.innerHTML = "Invalid Input - Try again."
        
    }else{
        for (let index = 1; index < 5; index++) {
            addParagraphtoResult(`p${index}`)
     
         }
         document.getElementById('p0').innerHTML = `Polarity: ${sentiment.polarity}`
         document.getElementById('p1').innerHTML = `Subjectivity: ${sentiment.subjectivity}`
         document.getElementById('p2').innerHTML = `Polarity Confidence: ${Math.round(sentiment.polarity_confidence *100)/100}`
         document.getElementById('p3').innerHTML = `Subjectivity Confidence: ${Math.round(sentiment.subjectivity_confidence*100)/100}`
         document.getElementById('p4').innerHTML = `Content:  \n${sentiment.text}`

    }
    

}
const addParagraphtoResult = (id) => {
    let p = document.createElement("p") 
    p.id = id
    document.getElementById('results').appendChild(p)
}



export { postText, getSentiment, updateUI }
