let Shown = document.getElementById('resultat');

function affichage(value) {
   Shown.value += value;
}

function effacer() {
    Shown.value = '';
}

function calculer() {
 let result = eval(Shown.value);
 if(result === Infinity) {
    result = 'Non defini';}
Shown.value = result;
}

// document.getElementById("searchInput").addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {                           // quand on appuis sur enter ca simule le clic du bouton 
//       document.getElementById("egal").click(); // Simule un clic sur le bouton
//     }
//   });