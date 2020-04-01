const postText = async (url = "", data = {}) =>{ 
    let res = await fetch (url, {
        method: "Post", 
        credentials: "same-origin",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        let newData = await res.json();
        return newData
    } catch (error) {
        console.log(error);
    }
}

const getCategory = async () =>{
    
    const res = await fetch("/analyseText")
    try {
        const catJson = await res.json()
        const categorie = catJson.label
        return categorie
        
    } catch (error) {
        console.log(error);
        
        
        
    }
}

const updateUI = (category) => {
    
    document.getElementById('results').innerHTML = `This Text belongs to the category ${category}`
    
    
}



export { postText, getCategory, updateUI }
