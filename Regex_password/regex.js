password = "A123456@-0"
mypassword ="Tanguy@Jonqua2025"
const exp = /^(?=.{8,})/ // -> au moins 8 caracteres
const exp2 = /(?=.*[0-9])/ //  -> au moins un chiffre
const exp3 = /(?=.*[a-zA-Z])/ // -> au moins une lettre
const exp3bis = /(?=.*[A-Z])/ //  -> au moins une lettre majuscule
const exp4 = /(?=.*[!@#$%^&*])/ //  -> au moins un caractere special
const exp5 = /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/ //  -> au moins un chiffre, une lettre, une lettre Majuscule et un caractere special et au moins 8 caracteres

const input = document.querySelector("#pass")
const button = document.querySelector("#check")
const resultText = document.querySelector("#result")

function passwordChecker(pass){
    if (exp5.test(pass) == true){
        if(pass.length >= 12){
        resultText.textContent = "Your password is: ✅ Strong and Valid"
        resultText.style.color = "green"
            console.log(`le mot de passe ${pass} est valide et fort`)}
        else if(pass.length >=10){
        resultText.textContent = "Your password is:  Medium but still Valid⚠️"
        resultText.style.color = "orange"
            console.log(`le mot de passe ${pass} est valide et moyen`)}
        else if(pass.length >=8){
             resultText.textContent = "Your password is super weak: but still miraculously Valid  ❌"
            resultText.style.color = "orange"
            console.log(`le mot de passe ${pass} est valide et faible`)}       
    }else{
        resultText.textContent = "Your password is:  just so bad, make it at least 8 chars long, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character ❌❌❌";
        resultText.style.color = "red";
        console.log(`le mot de passe ${pass} n'est pas valide`)
    }
}
// passwordChecker(password)
// passwordChecker(mypassword)


button.addEventListener("click", function(){
    const password = input.value
    passwordChecker(password)
}
)