const russianData = {
    name: "Russian",
    notablePeople: [
      "Vladimir Putin",
      "Yuri Gagarin",
      "Leo Tolstoy",
      "Joseph Stalin"
    ],
    funFacts: {
      relatedLanguages: ["Ukrainian", "Bulgarian", "Serbo-Croatian"],
      lettersInAlphabet: 33,
      numberOfSpeakers: "about 138 million"
    },
    countriesSpoken: [
      "Belarus",
      "Formet Soviet countries",
      "Kazakhstan",
      "Kyrgyzstan",
      "Russia"
    ]
  };
  
  // Calls a function to print the French HTML to the DOM (check domPrinter.js)
  document.querySelector("#russian").addEventListener("click", function(){
      htmlGenerator(russianData);
  })