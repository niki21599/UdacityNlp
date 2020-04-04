


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

const getCategory = async () =>{
    
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
         document.getElementById('p0').innerHTML = `${sentiment.polarity}`
         document.getElementById('p1').innerHTML = `${sentiment.subjectivity}`
         document.getElementById('p2').innerHTML = `${sentiment.polarity_confidence}`
         document.getElementById('p3').innerHTML = `${sentiment.subjectivity_confidence}`
         document.getElementById('p4').innerHTML = `${sentiment.text}`

    }
    

}
const addParagraphtoResult = (id) => {
    let p = document.createElement("p") 
    p.id = id
    document.getElementById('results').appendChild(p)
}



export { postText, getCategory, updateUI }
