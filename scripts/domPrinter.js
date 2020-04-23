//Generates and returns an H1 element of the language's name
//Accepts the language name and desired class name
const h1 = (text, classNames) => {
    return `<h1 class="${classNames}">${text}</h1>`
}


// Go to french.js to see how we can execute this function
//Generates and returns an HTML string of the notable speakers of a language
//Accepts an array of notable speakers and the desired class name
const notable = (notableArray, notableClass) => {
    //Begins the HTML by setting the ul's class and adding an H1 element
    let notableString = `
    <ul class="${notableClass}">
    <h2>Notable Speakers:</h2>
    `;

    //Creates li elements for each entry in the array of notable speakers
    for (let i=0; i < notableArray.length; i++){
        notableString += `<li>${notableArray[i]}</li>`
    }
    notableString += `</ul>`;

    //Returns the HTML string
    return notableString;
}


//Generates and returns an HTML string of the FunFacts object of the language
//Accepts funfacts object and desired class name
const funFacts = (funFactsObject, funFactsClass) =>{
    let funFactsString = `
    <ul class="${funFactsClass}">
    <h2>Fun Facts:<h2>
    `;
    
    //Returns related Languages
    funFactsString += `<h4>Related Languages:</h4>`
    let funFactsLanguagesArray = funFactsObject.relatedLanguages
    for (let i=0; i< funFactsLanguagesArray.length; i++){
        funFactsString += `<li>${funFactsLanguagesArray[i]}</li>`    
    }

    //Add next lettersinalphabet and number of speakers to li's

    funFactsString += `<h4>Letters in Alphabet:</h4> <p>${funFactsObject.lettersInAlphabet}</p>`
    funFactsString += `<h4>Number of Speakers:</h4> <p>${funFactsObject.numberOfSpeakers}</p>`
    
    //Add additional info if exists
    const additionalInfo = funFactsObject.mandarinInfo
    if (additionalInfo != undefined){
     funFactsString += `<h4>Dialect Info:</h4>`
     funFactsString += `<p>${funFactsObject.mandarinInfo.dialectInfo}</p>`
     funFactsString += `<h4>Chinese Dialects:</h4>`
    let chineseDialectsArray = additionalInfo.chineseDialects
    funFactsString += `<ul>`
    for(let j=0; j < chineseDialectsArray.length;j++){
          funFactsString += `<li>${chineseDialectsArray[j]}</li>`
        }
    funFactsString +=`</ul>`
}
    funFactsString +=`</ul>`;
    return funFactsString;
}

//Generates a block of HTML for the desired language, adding it to the #language-container inner HTML
//Accepts a language object, then calls the other domPrinter functions based on the object's properties
const htmlGenerator = (language) => {
    let container = document.querySelector("#language-container");
    //Clears the screen when a new language is selected
    container.innerHTML = '';
    //Creates a new Bootstrap row
    container.innerHTML += '<div class="row">'
    //Calls the function to print the language name
    container.innerHTML += h1(language.name, `${language.name}-heading`);
    container.innerHTML += '</div><div class="row">'
    //Calls the function to print notable speakers of the language
    container.innerHTML += notable(language.notablePeople, `${language.name}-notable`)
    container.innerHTML += funFacts(language.funFacts, `${language.name}-funfacts`)
    container.innerHTML += '</div><div class="row">'
    container.innerHTML += '</div>'
    // Calls the function to print countriesSpoken of the language
    container.innerHTML += countrySpoken(language.countriesSpoken, `${language.name}-countrySpoken`)
}

// -------------------- For reference! -----------------//

// Here are some other ways to right the exact same function we wrote above:

// function h1(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = function(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = (text, classNames) => `<h1 class="${classNames}">${text}</h1>`





const countrySpoken = (countryArray, countryClass) =>{
    let countryString = `
    <ul class ="${countryClass}">
    <h1>Countries Spoken:</h1>`;
    for(let i=0; i < countryArray.length; i++){
        countryString+= `<li>${countryArray[i]}</li>`
    }
    countryString += '</ul>';
    return countryString;
}
