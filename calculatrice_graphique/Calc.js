let Shown = document.getElementById("resultat");

function affichage(value) {
  Shown.value += value;
}

function effacer() {
  Shown.value = "";
}

function calculer() {
  let result = eval(Shown.value);
  if (result === Infinity) {
    result = "Non defini";
  }
  Shown.value = result;
}
function deleted() {
  Shown.value = Shown.value.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculer();
  }
});

