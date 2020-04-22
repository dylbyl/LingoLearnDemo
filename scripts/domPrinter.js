// The purpose of this file is to define functions that will return individual HTML components

// You should not call any of these functions in this file. Instead, you should call them in the individual file for your language (e.g. hindi.js)


// For example, we can define a function here that prints an H1 element

const h1 = (text, classNames) => {
    return `<h1 class="${classNames}">${text}</h1>`
}

// Go to french.js to see how we can execute this function


// -------------------- For reference! -----------------//

// Here are some other ways to right the exact same function we wrote above:

// function h1(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = function(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = (text, classNames) => `<h1 class="${classNames}">${text}</h1>`

const funFacts = (funFactsObject, funFactsClass) =>{
    let funFactsString = `
    <ul class="${funFactsClass}">
    <h1>Fun Facts:<h1>
    `;
    
    //Returns related Languages
    funFactsString += `<h3>Related Languages</h3>`
    let funFactsLanguagesArray = funFactsObject.relatedLanguages
    for (let i=0; i< funFactsLanguagesArray.length; i++){
        funFactsString += `<li>${funFactsLanguagesArray[i]}</li>`    
    }

    //Add next lettersinalphabet and number of speakers to li's

    funFactsString += `<h3>Letters in Alphabet: ${funFactsObject.lettersInAlphabet}</h3>`
    funFactsString += `<h3>Number of Speakers: ${funFactsObject.numberOfSpeakers}</h3>`
    
    //Add additional info if exists
    
    if (funFactsObject.name == "Mandarin"){
    funFactsString += `<h3>Dialect Info:</h3>`
    funFactsString += `<p>${funFactsObject.mandarinInfo.dialectInfo}</p>`
    funFactsString += `<h3>Chinese Dialects: `
    let chineseDialectsArray = funFactsObject.mandarinInfo.chineseDialects
    for(let j=0; j<chineseDialectsArray.length;i++){
        funFactsString += `<li>${$chineseDialectsArray[j]}</li>`
    }}
    funFactsString +=`</ul>`
    return funFactsString;
}



