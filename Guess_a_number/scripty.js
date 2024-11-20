function numberUser() {
   let givenNumber = prompt("Donner un Nombre (1)");
   return givenNumber
}
function guess() {

   let Numbertoguess = prompt("Donne un nombre a deviner entre 0 < ? < 50")
   while (Numbertoguess > 50 || Numbertoguess < 0) {
      Numbertoguess = prompt("Redonne un nombre a deviner entre 0 < ? < 50!!")
      
   }return Numbertoguess
}
function didIWin(givenNumber, Numbertoguess) {
   console.log(Numbertoguess);
   console.log(Numbertoguess);
// == --> c'est comparaison de la valeur/ === --> comparaison avec le type ex string ou numb
   if (givenNumber === Numbertoguess) {
      //console.log("Bravo ! Vous avez deviné le nombre ");
      console.log("true");
      return true
   }
   else if (givenNumber < Numbertoguess) {
      //console.log("Plus Grand")
      console.log("false");
      return false
   }
   else if (givenNumber > Numbertoguess) {
      // console.log("Plus Petit")
      console.log("false");
      return false
   }

}
let Numbertoguess = guess()
const paragraph = document.querySelector("Resulat")
function SubmitNumber(){
   const input = document.getElementById("Myinput")
    value = input.value
   console.log(value)
   let givenNumber = value
   compteur ++;  
   gamePlay(givenNumber)

}
let compteur = 0;
let inf = 0;
let sup = 50;
function gamePlay(givenNumber) {
//    let Win = false // On dit qu'il a pas encore deviner le chiffre
//    while (!Win) { //tant que il a pas gagner
//       compteur++
//       didIWin(givenNumber, Numbertoguess) // On Verifie si c'est le bon nombre
      
//       Win = didIWin(givenNumber, Numbertoguess) // On assigne la valeur true ou false a Win

//       if (Win) { // SI la nouvelle valeur assigne a win est True
//          alert("True, You WON with "+ compteur + " tries") //ON renvoie True
//       }

//       else {
//         //document.getElementById("Resultat").innerHTML = "False, Try again " + compteur + " try";
//                  alert("False, Try again " + compteur + " try") //On renvoie False
//       //givenNumber = prompt("donner un Nombre entre " + inf + "<?<"+ sup ) // Demande Un nombre
//       /* J'arrive pas a trouver un moyen de contourner de faire l'alert en boucle donc on peux plus utiliser le input*/
   
//    }}

let Win = false

document.getElementById('Valider').addEventListener('click', function() {
       
 })
 didIWin(givenNumber, Numbertoguess)
 Win = didIWin(givenNumber, Numbertoguess)
 // + inf + "< ? <"+ sup 
 if (givenNumber < sup && givenNumber > Numbertoguess ){
   sup = givenNumber;
 }
 if (givenNumber > inf  && givenNumber < Numbertoguess ){
   inf = givenNumber;
 }
 if (Win) { 
      alert("True, You WON with "+ compteur + " tries") //ON renvoie True
     compteur = 0
   }     
        

   else {
      //document.getElementById("Resultat").innerHTML = "False, Try again " + compteur + " try";
               alert(`False, Try again et donner un Nombre entre ${inf} <?< ${sup} et c'est votre${compteur} try`) //On renvoie False
   //givenNumber = prompt("donner un Nombre entre " + inf + "<?<"+ sup ) // Demande Un nombre
}}



function square(length){
  for(length,)
}