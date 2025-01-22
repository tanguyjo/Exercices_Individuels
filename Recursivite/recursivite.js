const fs = require('fs');
const path = require('path');

const folderPath = '/Users/Tanguy/Desktop/COUR/Ada_Tech_School';
fs.readdir(folderPath, (err, files) => {
    if (err) {
      //  console.error('Error reading folder:', err);
    } else {
        //console.log('Files in folder:', files);
    }
});

const dossierPrincipal = {
  nom: "Ada",
  contenu: [
    {
      nom: "Projets collectifs Ada",
      contenu: [
        {
          nom: "Pico8",
          contenu: [
            {
              nom: "mariokart.p8",
            },
          ],
        },
        {
          nom: "Dataviz",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
    { nom: "CV.pdf" },
    {
      nom: "Projets persos",
      contenu: [
        {
          nom: "Portfolio",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
  ],
};

// 📑  🗂️ >
function afficherDossier(dossierPrincipal) {
  console.log("🗂️  " + dossierPrincipal.nom);
}
console.log("Etape 1");
afficherDossier(dossierPrincipal)
console.log('-'.repeat(50));
function afficherDossierIteratif(dossierPrincipal) {
  console.log("> 🗂️  " + dossierPrincipal.nom);
  for (let i = 0; i < dossierPrincipal.contenu.length; i++) {
    if (dossierPrincipal.contenu[i].contenu) {
      console.log("  🗂️  " + dossierPrincipal.contenu[i].nom);
    } else {
      console.log("  📑  " + dossierPrincipal.contenu[i].nom);
    }
  }
}
console.log("Etape 2");
 afficherDossierIteratif(dossierPrincipal)
 console.log('-'.repeat(50));
function afficherDossierIteratifEntier(dossierPrincipal){
    console.log("> 🗂️  " + dossierPrincipal.nom);
    for (let i = 0; i < dossierPrincipal.contenu.length; i++) {
      if (dossierPrincipal.contenu[i].contenu) {
        console.log("  🗂️  " + dossierPrincipal.contenu[i].nom);
        for (let j = 0; j < dossierPrincipal.contenu[i].contenu.length; j++) {
            if (dossierPrincipal.contenu[i].contenu) {
                console.log("  🗂️  " + dossierPrincipal.contenu[i].contenu[j].nom);
                for (let k = 0; k < dossierPrincipal.contenu[i].contenu[j].contenu.length; k++) {
                    console.log("  📑  " + dossierPrincipal.contenu[i].contenu[j].contenu[k].nom);
                }
              } else {
                console.log("  📑  " + dossierPrincipal.contenu[i].contenu[j].nom);
              }}
      } else {
        console.log("  📑  " + dossierPrincipal.contenu[i].nom);
      }
    } 
}
console.log("Etape 3 Iteratif");
afficherDossierIteratifEntier(dossierPrincipal)
console.log('-'.repeat(50));
function afficherDossierRecursifEntier(dossierPrincipal){

        if (dossierPrincipal.contenu) {
            console.log(">🗂️  " + dossierPrincipal.nom);
            dossierPrincipal.contenu.forEach(afficherDossierRecursifEntier)
            return
        } else {
            console.log(" 📑  " + dossierPrincipal.nom);
            return
        }
    


}
console.log("Etape 3 Recursif");
 afficherDossierRecursifEntier(dossierPrincipal)
 console.log('-'.repeat(50));
//Qu’en penses-tu ? Quels sont les avantages et inconvénients de chaque manière d’écrire ?
// De la maniere Iteratif on peut voir tout les dossierPrincipals et dossiers en meme temps, mais on doit faire un boucle pour chaque dossier