const japaneseData = {
    name: "Japanese",
    notablePeople: [
        "Shinzo Abe",
        "Natalie Portman",
        "Steven Seagal",
        "Edward Norton",
        "Utada Hikaru"
    ],
    funFacts: {
      relatedLanguages: ["Korean", "Ryukyuan", "Ainu"],
      lettersInAlphabet: 46,
      numberOfSpeakers: "about 127 million"
    },
    countriesSpoken: [
        "Brazil",
        "France",
      "Japan",
      "Palau",
      "Peru",
      "Philippines",
      "Taiwan",
      "United States"
    ]
  };
  
  // Calls a function to print the French HTML to the DOM (check domPrinter.js)
  document.querySelector("#japanese").addEventListener("click", function(){
      htmlGenerator(japaneseData);
  })