

// Je cree ma variable message et lui assigne Bonjour !
let firstname = "Beyonce"
//let firstname = prompt("Quel est votre prenom ?");

let message = "Bonjour " + firstname + " !"

//console.log(message)


function sayHello(firstname, hour) {
    if (hour <= 18) {
        //document.querySelector('h1').innerText = message;
        console.log("Bonjour " + firstname);
    }
    else {
        // document.querySelector('h1').innerText = message;
        console.log("Bonsoir " + firstname)


    }
}
sayHello("Beyonce", 22)