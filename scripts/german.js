const germanData = {
    name: "German",
    notablePeople: [
      "Johannes Gutenberg",
      "Martin Luther",
      "Johann Sebastian Bach",
      "Wolfgang Amadeus Mozart",
      "Werner Herzog"
    ],
    funFacts: {
      relatedLanguages: ["Dutch", "Swedish"],
      lettersInAlphabet: 26,
      numberOfSpeakers: "about 229 million"
    },
    countriesSpoken: [
        "Austria",
      "Belgium",
      "Germany",
      "Liechtenstein",
      "Luxembourg",
      "Switzerland"
    ]
  };
  
  // Calls a function to print the French HTML to the DOM (check domPrinter.js)
  document.querySelector("#german").addEventListener("click", function(){
      htmlGenerator(germanData);
  })