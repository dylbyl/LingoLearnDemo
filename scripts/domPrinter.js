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
    container.innerHTML += '</div><div class="row">'
    container.innerHTML += `<div class="col"><form action="">
        <input type="text" name="translate" id="input-translate">
      </form>
      <button id="translate-btn-${language.name}">Translate</button></div>
      <div id="field-translate"></div>`
    container.innerHTML += '</div>'
    // Calls the function to print countriesSpoken of the language
    container.innerHTML += countrySpoken(language.countriesSpoken, `${language.name}-countrySpoken`)
}

document.querySelector("#language-container").addEventListener("click", function(){
    if (event.target.id.split("-")[0] == "translate") {
        const originalPhrase = document.querySelector("#input-translate").value;
        const lowerCasePhrase = originalPhrase.toLowerCase();
        let translateSplit = lowerCasePhrase.split(" ");
        let translatePhrase = "";
        for (let i = 0; i < translateSplit.length; i++){
            if (i >= 1){
                console.log(translateSplit[i]);
                translatePhrase += translateSplit[i].charAt(0).toUpperCase() + translateSplit[i].slice(1)
                console.log(translatePhrase);
            }
            else{
            translatePhrase += translateSplit[i];
            }
        }
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
        if((translatePhrase == "") || (language[`dictionary`][`${translatePhrase}`] === undefined)){
            document.querySelector("#field-translate").innerHTML = "Sorry! Please input a valid phrase!";
        }
        else if(language[`dictionary`][`${translatePhrase}`] != undefined){
            document.querySelector("#field-translate").innerHTML = language[`dictionary`][`${translatePhrase}`];
        }
    }

})

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