
  const hindiData = {
    name: "Hindi",
    notablePeople: [
      "Nelly Furtado",
      "John Cena",
      "Natalie Di Luccio",
      "Anush Stepanyan",
      "Will Smith",
      "Hugh Jackman",
      "Julia Roberts",
      "Ben Kingsley",
      "Dev Patel"

    ],
    funFacts: {
      relatedLanguages: `Hindi is not really one language, rather it is a "catchall" name for over 300 different languages, like Chinese, which is another generic name for different languages.`,
      lettersInAlphabet: 50,
      numberOfSpeakers: "about 341 million"
    },
    countriesSpoken: [
      "India",
      "Nepal",
      "Fiji",
      "Pakistan",
      "Trinidad and Tobago",
      "Singapore",
      "South Africa",
      "Mauritius",
      "Guyana",
      "Suriname"
    ]
  };

  document.querySelector("#hindi").addEventListener("click", function(){
    htmlGenerator(hindiData);
})