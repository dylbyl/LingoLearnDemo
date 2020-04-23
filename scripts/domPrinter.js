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

//Generates a block of HTML for the desired language, adding it to the #language-container inner HTML
//Accepts a language object, then calls the other domPrinter functions based on the object's properties
const htmlGenerator = (language) => {
    let container = document.querySelector("#language-container");
    //Clears the screen when a new language is selected
    container.innerHTML = '';
    //Calls the function to print the language name
    container.innerHTML += h1(language.name, `${language.name}-heading`);
    //Starts Rows and Columns via Bootstrap, then calls the functions for printing Notable People,
    //Fun Facts, and Countries Spoken. At the bottom, it keeps a form of what the user would like
    //to be translated. 
    container.innerHTML += `
    <div class="row">
        <div class="col">
            ${notable(language.notablePeople, `${language.name}-notable`)}
        </div>
        <div class="col">
            ${funFacts(language.funFacts, `${language.name}-funfacts`)}
        </div>
        <div class="col">
            ${countrySpoken(language.countriesSpoken, `${language.name}-countrySpoken`)}
        </div>
    </div>
    <div class="row">
        <div class="input-container col">
            <form action="">
                <input type="text" name="translate" id="input-translate">
            </form>
            <button class="translate-btn" id="translate-btn-${language.name}">Translate</button>
        </div>
        <div class="col">
            <div id="field-translate"><h2>Translation: </h2></div> 
        </div>
    </div>`
}

//A function for translating the user input, tied to an event listener
document.querySelector("#language-container").addEventListener("click", function(){
    //checks to make sure the event.target is the translate button
    if (event.target.id.split("-")[0] == "translate") {

        //catches the input from the text field
        const originalPhrase = document.querySelector("#input-translate").value;
        //converts that input to lower case
        const lowerCasePhrase = originalPhrase.toLowerCase();
        //splits the input at every space
        let translateSplit = lowerCasePhrase.split(" ");

        //Leaves the first word alone, but capitalizes all other words in the string and removes their spaces
        let translatePhrase = "";
        for (let i = 0; i < translateSplit.length; i++){
            //taking all words after word 1 (index 0 of split array)
            if (i >= 1){
                console.log(translateSplit[i]);
                //the character at index 0 of the string is sent toUpperCase, then the rest of the word is added to it
                translatePhrase += translateSplit[i].charAt(0).toUpperCase() + translateSplit[i].slice(1)
                console.log(translatePhrase);
            }
            //keeping index 0 the same
            else{
            translatePhrase += translateSplit[i];
            }
        }

        //Checks which language is currently being translated, using the translate button id tag
        let language = {};
        if(event.target.id.split("-")[2] == "French"){
            language = frenchData;
        }
        if(event.target.id.split("-")[2] == "Mandarin"){
            language = mandarinData;
        }
        if(event.target.id.split("-")[2] == "Spanish"){
            language = spanishData;
        }

        //If the input string is not a key in the lagnuage's .dictionary, an error message is printed
        if((translatePhrase == "") || (language[`dictionary`][`${translatePhrase}`] === undefined)){
            document.querySelector("#field-translate").innerHTML = "<h2>Sorry! </h2>Please input a valid phrase!";
        }
        //If the input string matches with a key in the dictionary, the corresponding value is printed
        else if(language[`dictionary`][`${translatePhrase}`] != undefined){
            document.querySelector("#field-translate").innerHTML = "<h2>Translation: </h2>" + language[`dictionary`][`${translatePhrase}`];
        }
    }

})
