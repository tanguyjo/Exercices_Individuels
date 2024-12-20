const words =  document.getElementById("word");
const trys  =  document.getElementById("try");
const well  =  document.getElementById("well");
const miss  =  document.getElementById("miss");
const not   =  document.getElementById("not");
const win   =  document.getElementById("win");



function tryWord(word, base) {
  // TODO: fix jeu sensible à la casse.
  if (word.toLowerCase() === base) {
    return true;
  } else {
    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    let arrayBase = base.split("");
    let arrayWord = word.split("");

    for (let i = 0; i < arrayWord.length; i++) {
      if (arrayBase[i] === arrayWord[i]) {
        wellPlaced.push(arrayWord[i]);
      } else if(arrayBase.includes(arrayWord[i])) {
        missplaced.push(arrayWord[i]);
      }
    }

    for (const char of arrayWord) {
      if (arrayBase.includes(char) === false) {
        notInWord.push(char);
      }
    }
console.log(wellPlaced,missplaced,notInWord)
    return {
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
    };
  }
}


function guess() {
  let base = "dictionnaire";
  let word = document.getElementById("word").value;
  let result = tryWord(word.toLowerCase(), base);
 
if(word == ""|| word == " "){
    return
  }

  if (result == true ) {
    win.innerText = `Vous avez gagné`;
  return
  }

  if(isNaN(parseFloat(word))){
  words.value = "";
  trys.innerText = word;
  well.innerText = `Bien placé:  ${result.wellPlaced.join(", ")}`;
  miss.innerText = `Mal placé: ${result.missplaced.join(", ")}`;
  not.innerText = `Pas dans le mot: ${result.notInWord.join(", ")}`;
  
  }
}

module.exports = {tryWord,guess}