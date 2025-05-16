function now(){
let temps_initial = performance.now();

function add(a, b) {
    return a + b;
}
function add_array(array,value){
    let result =[];
    for (i =0;i<array.length;i++){
        result.push(add(array[i],value));
    }
    console.log(result)
    return result
}

function factoriel(n){
    if(n<=1) {
        return 1;
    }return n*factoriel(n-1);
}

add_array([3, 4214124, 1122414, 10], 1901215);
console.log(factoriel(5));
let temps_final = performance.now();
let temps_ecoule = (temps_final - temps_initial);
console.log(temps_initial)
console.log(temps_final)
console.log("L'exécution a duré " + temps_ecoule + " ms");
}
now()