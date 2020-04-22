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