#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
#include <vector>

// Not equivalent in C++: document.addEventListener('DOMContentLoaded', function() {
// Let the user setup
void setup() {
// let compteur = 0;
// let inf = 0;
// let sup = 100;
// let Numbertoguess = Math.floor(Math.random() * 101)
srand(static_cast<unsigned int>(time(0)));
int compteur = 0;
int inf = 0;
int sup = 100;
int Numbertoguess = std::rand() % 101;
std::string Compte = std::to_string(compteur) + " Tries";
// const paragraph1 = document.getElementById("Resultat");
std::cout << "Number of Tries : " << compteur << std::endl;
}

// function didIWin(givenNumber, Numbertoguess) {
bool didIWin(int givenNumber, int Numbertoguess) {
   // givenNumber =Number(givenNumber)
   // Numbertoguess = Number(Numbertoguess)
   std::cout << Numbertoguess << std::endl;
   if (givenNumber == Numbertoguess) {
      std::cout << "true" << std::endl;
      return true;
   }
   else if (givenNumber < Numbertoguess) {
      std::cout << "false" << std::endl;
      return false;
   }
   else if (givenNumber > Numbertoguess) {
      std::cout << "false" << std::endl;
      return false;
   }
   return false;
}

// let Numbertoguess = Math.floor(Math.random() * 101);
int Numbertoguess = std::rand() % 101;

// const paragraph = document.querySelector("Resulat")
void SubmitNumber() {
   // const input = document.getElementById("Myinput")
   // value = input.value
   // Instead, let's assume the user enters an integer for this example:
   int value;
   std::cout << "User input: ";
   std::cin >> value;
   compteur++;
   gamePlay(value);
}

// function gamePlay(givenNumber) {
void gamePlay(int givenNumber) {
   bool Win = false;
   // document.getElementById('Valider').addEventListener('click', function() { })
   didIWin(givenNumber, Numbertoguess);
   Win = didIWin(givenNumber, Numbertoguess);
   // let paragraph1 = document.getElementById("Resultat");
   std::cout << "Number of Tries :" << compteur << std::endl;
   if (givenNumber < sup && givenNumber > Numbertoguess){
      sup = givenNumber;
   }
   if (givenNumber > inf && givenNumber < Numbertoguess ){
      inf = givenNumber;
   }
   if (Win) { 
      std::cout << "True, You WON with " << compteur << " tries" << std::endl;
      compteur = 0;
   }
   else {
      std::cout << "False, Try again et donner un Nombre entre " << inf << "<?<" << sup << " et c'est votre " << compteur << " try" << std::endl;
   }
}

// Animals or Words
std::string getRandomWord() {
   std::vector<std::string> words = {
      "Chicken", "Slug", "Snail", "Pig", "Cow",
      "Sheep", "Horse", "Squirrel", "Turtle", "Squirrel", 
      "Dolphin", "Elephant", "Meerkats", "Bear", "Rabbit",
      "Koala", "Parrot", "Raven", "Chimpanzee", "Frog",
      "Mouse", "Bee", "Tiger", "Lion", "Zebra",
      "Giraffe", "Ant", "Spider", "Butterfly", "Pigeon","Panda","Cat","Dog"
   };
   int randomWord = std::rand() % words.size();
   return words[randomWord];
}

std::string WordtoGuess = getRandomWord();

// function didIGuessTheWord(givenWord,WordtoGuess )
bool didIGuessTheWord(std::string givenWord, std::string WordtoGuess) {    
   std::cout << WordtoGuess << std::endl;
   if (givenWord == WordtoGuess) {
      std::cout << "true" << std::endl;
      return true;
   }
   else {
      std::cout << "false" << std::endl;
      return false;
   }
}

int comptes = 0;

void SubmitWord() {
   // Instead, we manually input word value:
   std::string wordvalue;
   std::cout << "User input: ";
   std::cin >> wordvalue;
   comptes++;
   WordgamePlay(wordvalue);
}

std::string getFirstTwoLetters(const std::string& str) {
   return str.substr(0, 2);
}
std::string resultletter = getFirstTwoLetters(WordtoGuess);

void WordgamePlay(std::string givenWord) {
   bool Win2 = false;
   // document.getElementById('Valid').addEventListener('click', function() { })
   didIGuessTheWord(givenWord, WordtoGuess);
   Win2 = didIGuessTheWord(givenWord, WordtoGuess);
   // let paragraph2 = document.getElementById("Result");
   std::cout << "Number of Tries :" << comptes << std::endl;
   if (Win2) { 
      std::cout << "True, You WON with " << comptes << " tries" << std::endl;
      comptes = 0;
   }
   else {
      std::cout << "False, Try again and give an Animal that starts with the letters: " << resultletter << " It is your " << comptes << " try" << std::endl;
   }
}

// function getRandomCountries()
std::string getRandomCountries() {
   std::vector<std::string> countries = {
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
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
   };
   int randomCountry = std::rand() % countries.size();
   return countries[randomCountry];
}

std::string CountrytoGuess = getRandomCountries();
std::cout << CountrytoGuess << std::endl;

// function didIGuessTheCountry(givenCountry,CountrytoGuess )
bool didIGuessTheCountry(std::string givenCountry, std::string CountrytoGuess) {    
   std::cout << CountrytoGuess << std::endl;
   if (givenCountry == CountrytoGuess) {
      std::cout << "true" << std::endl;
      return true;
   }
   else {
      std::cout << "false" << std::endl;
      return false; 
   }
}

int comptesCountry = 0;

void SubmitCountry() {
   // Instead, we manually input country value:
   std::string Countryvalue;
   std::cout << "User input: ";
   std::cin >> Countryvalue;
   comptesCountry++;
   CountrygamePlay(Countryvalue);
}

std::string resultletterCountry = getFirstTwoLetters(CountrytoGuess);

void CountrygamePlay(std::string givenCountry) {
   bool Win3 = false;
   // document.getElementById('ValidCountry').addEventListener('click', function() { })
   didIGuessTheCountry(givenCountry, CountrytoGuess);
   Win3 = didIGuessTheCountry(givenCountry, CountrytoGuess);
   // let paragraph3 = document.getElementById("ResultCountry");
   std::cout << "Number of Tries :" << comptesCountry << std::endl;
   if (Win3) { 
      std::cout << "True, You WON with " << comptesCountry << " tries" << std::endl;
      comptesCountry = 0;
   }
   else {
      std::cout << "False, Try again and give a Country that starts with the letters: " << resultletterCountry << " It is your " << comptesCountry << " try" << std::endl;
   }
}

int randomNumber = std::rand() % 10001;
std::cout << randomNumber << std::endl;