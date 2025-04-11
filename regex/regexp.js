// const exp = /<ma regex>/
// const res = "une chaine de char".match(exp)
// console.log(res)


const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."

// g -> global  /de/g  -> 3
// b -> word boundary -> /\bde\b/g  -> 2

// Retourne le nombre de de
const exp = /\bde\b/g
console.log(`'de' apparait ${str.match(exp).length} fois`)

// Retourne le nombre de de et des
const exp2 = /\bde|des\b/g
console.log(`'de'et 'des' apparait ${str.match(exp2).length}fois`)

// retourne le nombre de de, des et les avec un operateur optionnels ?
const exp3 = /\bde|des?les\b/g
console.log(`'de','des'et 'les' apparait ${str.match(exp2).length}fois`)

//retourne le nombre de caracteres alphabétiques dans la chaine.
const exp4 = /[a-zA-Z]/g //[a-zA-Z] pour les majuscules et minuscules
console.log(`il y a ${str.match(exp4).length} caracteres alphabetiques dans la chaine`)

//Écrire l'expression qui renvoie tous les caracteres spéciaux présents dans la phrase (ponctuation et accents).
const exp5 = /[^\w\s]/g // renvoie tout ce qui n'est pas un mot ou un espace
// ^ -> negation
// s -> espace  \s -> espace blanc
// w -> word  \w -> caracteres alphanumériques
console.log(`il y a ${str.match(exp5).length} caracteres speciaux dans la chaine`)