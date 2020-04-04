


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
    for (let index = 0; index < 5; index++) {
       let p = document.createElement("p") 
       p.id = `p${index}`
       document.getElementById('results').appendChild(p)

    }
    document.getElementById('p0').innerHTML = `${sentiment.polarity}`
    document.getElementById('p1').innerHTML = `${sentiment.subjectivity}`
    document.getElementById('p2').innerHTML = `${sentiment.polarity_confidence}`
    document.getElementById('p3').innerHTML = `${sentiment.subjectivity_confidence}`
    document.getElementById('p4').innerHTML = `${sentiment.text}`

}



export { postText, getCategory, updateUI }
