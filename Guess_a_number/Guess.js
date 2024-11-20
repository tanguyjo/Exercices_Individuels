// function numberUser() {
//    let givenNumber = prompt("Donner un Nombre (1)");
//    return givenNumber
// }
document.addEventListener('DOMContentLoaded', function() {
// let compteur = 0;
// let inf = 0;
// let sup = 100;
// let Numbertoguess = Math.floor(Math.random() * 101)
// let Compte = compteur + " Tries"
const paragraph1 = document.getElementById("Resultat");
    paragraph1.innerHTML = "Number of Tries : " + compteur; 

});
// function guess() {

//    let Numbertoguess = prompt("Donne un nombre a deviner entre 0 < ? < 100")
//  while (Numbertoguess > 100 || Numbertoguess < 0) {
//       Numbertoguess = prompt("Redonne un nombre a deviner entre 0 < ? < 100!!")
      
//    }return Numbertoguess
// }

//let Numbertoguess = Math.floor(Math.random() * 101);


function didIWin(givenNumber, Numbertoguess) {
   givenNumber =Number(givenNumber)
   Numbertoguess = Number(Numbertoguess)
   console.log(Numbertoguess);
   if (givenNumber === Numbertoguess) {
      console.log("true");
      return true
   }
   else if (givenNumber < Numbertoguess) {
      console.log("false");
      return false
   }
   else if (givenNumber > Numbertoguess) {
      console.log("false");
      return false
   }

}
//let Numbertoguess =  Math.floor(Math.random() * 101);
//console.log(Numbertoguess)
let compteur = 0;
let inf = 0;
let sup = 100;
let Numbertoguess = Math.floor(Math.random() * 101)
let Compte = compteur + " Tries"

const paragraph = document.querySelector("Resulat")
function SubmitNumber(){
   const input = document.getElementById("Myinput")
    value = input.value
   console.log("User input:", value)
   compteur ++; 
   gamePlay(value)
}



// let randomNumber = Math.floor(Math.random() * 101);


function gamePlay(givenNumber) {
let Win = false
document.getElementById('Valider').addEventListener('click', function() {      
 })
 didIWin(givenNumber, Numbertoguess)
 Win = didIWin(givenNumber, Numbertoguess)
 let paragraph1 = document.getElementById("Resultat");
paragraph1.innerHTML = "Number of Tries :"+ compteur;
if (givenNumber < sup && givenNumber > Numbertoguess ){
   sup = givenNumber;
 }  if (givenNumber > inf  && givenNumber < Numbertoguess ){
   inf = givenNumber;
 }   if (Win) { 
      alert("True, You WON with "+ compteur + " tries") 
     compteur = 0
   }      else {
      alert(`False, Try again et donner un Nombre entre ${inf}<?<${sup} et c'est votre ${compteur} try`) 
}}






//Animals or Words

function getRandomWord(){
   const words =[ "Chicken", "Slug", "Snail", "Pig", "Cow",
        "Sheep", "Horse", "Squirrel", "Turtle", "Squirrel", 
        "Dolphin", "Elephant", "Meerkats", "Bear", "Rabbit",
        "Koala", "Parrot", "Raven", "Chimpanzee", "Frog",
         "Mouse", "Bee", "Tiger", "Lion", "Zebra",
        "Giraffe", "Ant", "Spider", "Butterfly", "Pigeon","Panda","Cat","Dog"
      
      ];
      const randomWord =Math.floor(Math.random() * words.length);
      return words[randomWord];
      
   }


WordtoGuess = getRandomWord()
console.log(WordtoGuess)
function didIGuessTheWord(givenWord,WordtoGuess ) {    
   console.log(WordtoGuess);
   if (givenWord === WordtoGuess) {
      console.log("true");
   return true }
      else console.log("false")
      return false
}

let comptes = 0;



function SubmitWord(){
   const input = document.getElementById("WordInput")
    wordvalue = input.value
   console.log("User input:", wordvalue)
   comptes ++; 
   WordgamePlay(wordvalue)
}

function getFirstTwoLetters(str) {
   return str.substring(0, 2);
}
const resultletter = getFirstTwoLetters(WordtoGuess)
console.log(resultletter);



function WordgamePlay(givenWord) {
   let Win2 = false
   document.getElementById('Valid').addEventListener('click', function() {      
    })
    didIGuessTheWord(givenWord, WordtoGuess)
    Win2 = didIGuessTheWord(givenWord, WordtoGuess)
    let paragraph2 = document.getElementById("Result");
   paragraph2.innerHTML = "Number of Tries :"+ comptes;
      if (Win2) { 
         alert("True, You WON with "+ comptes + " tries") 
        comptes = 0
      }      else {
         alert("False, Try again and give an Animal that starts with the letters:  " + resultletter +" It is your " + comptes + " try") 
   }}
   
   
    function getRandomCountries(){
   const countries = [ "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
      "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
      "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
      "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
      "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
      "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
      "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
      "China", "Colombia", "Comoros", "Democratic Republic of the Congo", "Congo",
      "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
      "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
      "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
      "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
      "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
      "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
      "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
      "India", "Indonesia", "Iran", "Iraq", "Ireland",
      "Israel", "Italy", "Jamaica", "Japan", "Jordan",
      "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
      "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
      "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
      "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
      "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
      "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
      "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
      "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
      "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
      "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
      "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
      "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
      "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
      "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
      "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
      "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan",
      "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
      "Tajikistan", "Tanzania", "Thailand", "Timor-Leste (East Timor)", "Togo",
      "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
      "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
      "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
      "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];
  const randomCountry = Math.floor(Math.random() * countries.length);
  return countries[randomCountry];
}


CountrytoGuess = getRandomCountries()
console.log(CountrytoGuess)


function didIGuessTheCountry(givenCountry,CountrytoGuess ) {    
   console.log(CountrytoGuess);
   if (givenCountry.toLowerCase() === CountrytoGuess.toLowerCase()) {
      console.log("true");
   return true }
      else{console.log("false")
      return false} 
      }

let comptesCountry = 0;



function SubmitCountry(){
   const input = document.getElementById("CountryInput")
   Countryvalue = input.value
   console.log("User input:", Countryvalue)
   comptesCountry ++; 
   CountrygamePlay(Countryvalue)
}

function getFirstTwoLetters(str) {
   return str.substring(0, 2);
}
const resultletterCountry = getFirstTwoLetters(CountrytoGuess)
console.log(resultletterCountry);



function CountrygamePlay(givenCountry) {
   let Win3 = false
   document.getElementById('ValidCountry').addEventListener('click', function() {      
    })
    didIGuessTheCountry(givenCountry, CountrytoGuess)
    Win3 = didIGuessTheCountry(givenCountry, CountrytoGuess)
    let paragraph3 = document.getElementById("ResultCountry");
   paragraph3.innerHTML = "Number of Tries :"+ comptesCountry;
      if (Win3) { 
         alert("True, You WON with "+ comptesCountry + " tries") 
         comptesCountry = 0
      }      else {
         alert("False, Try again and give a Country that starts with the letters:  " + resultletterCountry +" It is your " + comptesCountry + " try") 
   }}
   
   