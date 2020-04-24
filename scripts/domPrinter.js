//Generates and returns an H1 element of the language's name
//Accepts the language name and desired class name
const h1 = (text, classNames) => {
  return `<h1 class="${classNames}">${text}</h1>`;
};

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
  for (let i = 0; i < notableArray.length; i++) {
    notableString += `<li>${notableArray[i]}</li>`;
  }
  notableString += `</ul>`;

  //Returns the HTML string
  return notableString;
};

//Generates and returns an HTML string of the FunFacts object of the language
//Accepts funfacts object and desired class name
const funFacts = (funFactsObject, funFactsClass) => {
    let funFactsString = `
    <ul class="${funFactsClass}">
    <h2>Fun Facts:<h2>
    `;

    //Returns related Languages
    funFactsString += `<h4>Related Languages:</h4>`
    const checkForHindi = funFactsObject.relatedLanguages
    const isArray = Array.isArray(checkForHindi)
    if (isArray == false) {
        funFactsString += `<p>${checkForHindi}</p>`
    } else {
        let funFactsLanguagesArray = funFactsObject.relatedLanguages
        for (let i = 0; i < funFactsLanguagesArray.length; i++) {
            funFactsString += `<li>${funFactsLanguagesArray[i]}</li>`
        }
    }


    //Add next lettersinalphabet and number of speakers to li's

    funFactsString += `<h4>Letters in Alphabet:</h4> <p>${funFactsObject.lettersInAlphabet}</p>`
    funFactsString += `<h4>Number of Speakers:</h4> <p>${funFactsObject.numberOfSpeakers}</p>`

    //Add additional info if exists
    const additionalInfo = funFactsObject.mandarinInfo
    if (additionalInfo != undefined) {
        funFactsString += `<h4>Dialect Info:</h4>`
        funFactsString += `<p>${funFactsObject.mandarinInfo.dialectInfo}</p>`
        funFactsString += `<h4>Chinese Dialects:</h4>`
        let chineseDialectsArray = additionalInfo.chineseDialects
        funFactsString += `<ul>`
        for (let j = 0; j < chineseDialectsArray.length; j++) {
            funFactsString += `<li>${chineseDialectsArray[j]}</li>`
        }
        funFactsString += `</ul>`
    }
    funFactsString += `</ul>`;
    return funFactsString;
}


const countrySpoken = (countryArray, countryClass) => {
  let countryString = `
    <ul class ="${countryClass}">
    <h2>Countries Spoken:</h2>`;
  for (let i = 0; i < countryArray.length; i++) {
    countryString += `<li>${countryArray[i]}</li>`;
  }
  countryString += "</ul>";
  return countryString;
};

//Generates a block of HTML for the desired language, adding it to the #language-container inner HTML
//Accepts a language object, then calls the other domPrinter functions based on the object's properties
const htmlGenerator = (language) => {
  let container = document.querySelector("#language-container");
  //Clears the screen when a new language is selected
  container.innerHTML = "";
  //Calls the function to print the language name
  container.innerHTML += h1(language.name, `heading`);
  //Starts Rows and Columns via Bootstrap, then calls the functions for printing Notable People,
  //Fun Facts, and Countries Spoken. At the bottom, it keeps a form of what the user would like
  //to be translated.
  container.innerHTML += `
    <div class="row">
        <div class="col">
            ${notable(language.notablePeople, `notable`)}
        </div>
        <div class="col">
            ${funFacts(language.funFacts, `funfacts`)}
        </div>
        <div class="col">
            ${countrySpoken(
              language.countriesSpoken,
              `countrySpoken`
            )}
        </div>
    </div>
    <div class="row">
        <div class="input-container col">
            <h2>Try it out!</h2>
            <div class = "row">
            <form action="">
                <input type="text" name="translate" id="input-translate">
            </form>
            <button class="translate-btn" id="translate-btn-${
              language.name
            }">Translate</button>
            </div>
        </div>
        <div class="col">
            <div id="field-translate"><h2>Translation: </h2></div> 
        </div>
    </div>`;
};

//A function for translating the user input, tied to an event listener
document
  .querySelector("#language-container")
  .addEventListener("click", function () {
    //checks to make sure the event.target is the translate button
    if (event.target.id.split("-")[0] == "translate") {
      //catches the input from the text field
      const originalPhrase = document.querySelector("#input-translate").value;
      //converts that input to lower case
      const lowerCasePhrase = originalPhrase.toLowerCase();
      //splits the input at every space
      let translateSplit = lowerCasePhrase.split(" ");

      

      let translatedPhrase;

      if (event.target.id.split("-")[2] == "French") {
        translatedPhrase = apiFetch.getAll(originalPhrase, "fr", "fr-FR");
          }
      if (event.target.id.split("-")[2] == "Mandarin") {
        apiFetch.getAll(originalPhrase, "zh", "zh-CN");
          }
      if (event.target.id.split("-")[2] == "Spanish") {
        apiFetch.getAll(originalPhrase, "es", "es-ES");
          }
      if (event.target.id.split("-")[2] == "Hindi") {
        apiFetch.getAll(originalPhrase, "hi", "hi-IN");
          }
          if (event.target.id.split("-")[2] == "German") {
            apiFetch.getAll(originalPhrase, "de", "de-DE");
              }
              if (event.target.id.split("-")[2] == "Japanese") {
                apiFetch.getAll(originalPhrase, "ja", "ja-JP");
                  }
                  if (event.target.id.split("-")[2] == "Russian") {
                    apiFetch.getAll(originalPhrase, "ru", "ru-RU");
                      }
    }
  });

  const apiFetch = {
    getAll: (text, language, languageCode) => {
      let returnedElement;
        fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200420T153316Z.67b81eb3be4a746e.9ef97414c4d9092d1fa3de6691239ca6795ce0cb&text=${text}&lang=en-${language}&format=html
        `)
        .then(r => r.json())
        .then(pr => {
          printText(pr.text, languageCode);
        })
        
        
    }
  
  }


  const printText = (words, wordsLanguage) => {
    document.querySelector("#field-translate").innerHTML =
          "<h2>Translation: </h2>" +
          `${words}
          <br>
          <a target="blank" href="https://translate.yandex.com/">Powered by Yandex.Translate</a>`;
          translationSpeech = new SpeechSynthesisUtterance(`${words}`);
          translationSpeech.lang = wordsLanguage;
          speechSynthesis.speak(translationSpeech)
  }