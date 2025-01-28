//  const input = document.getElementById("player")

const Question = document.querySelector('question1')
const button_valider = document.getElementById('valider')
const input_button = document.getElementById('myInput')


Question.innerHTML = " NO"
 












function enleverAllumettes(Numbertoremove){
    let Allumette = 50 ;
   let PlayerNumber = prompt("Combien de Joueur?")
   PlayerNumber = parseInt(PlayerNumber)
   if(PlayerNumber === 1 ){
    while(Allumette>0){               
    Numbertoremove= prompt(" [JOUEUR 1] Il y a " + Allumette + " allumettes, Joueur 1  Donner le nombre d'allumettes que vous souhaitez enlever en 1 et 6 allumette")
       
    Numbertoremove = parseInt(Numbertoremove)
    if (isNaN(Numbertoremove) && Numbertoremove >= 1 || Numbertoremove <= 6 )
        {
          Allumette = Allumette - Numbertoremove;
          console.log(" Le Joueur 1 a enlever "+ Numbertoremove +" Allumettes, donc il en reste " + Allumette )
        
        }
        
        else {continue; }
    
        if (Allumette <= 0){ 

        alert("You WIN");
    }}}
   
   
    if (PlayerNumber === 2 ){
    while(Allumette>0)
        
   { 
        Numbertoremove= prompt(" [JOUEUR 1] Il y a " + Allumette + " allumettes, Joueur 1  Donner le nombre d'allumettes que vous souhaitez enlever en 1 et 6 allumette")
       
        Numbertoremove = parseInt(Numbertoremove)
        if (isNaN(Numbertoremove) && Numbertoremove >= 1 || Numbertoremove <= 6 )
            {
              Allumette = Allumette - Numbertoremove;console.log(" Le Joueur 1 a enlever "+ Numbertoremove +" Allumettes, donc il en reste " + Allumette )
            
            }else { continue ;}
        if (Allumette <= 0){ 

            alert("[Joueur 1} a gagne");
        }
    
          
        Numbertoremove= prompt(" [JOUEUR 2] Il y a " + Allumette + " allumettes, Joueur 1  Donner le nombre d'allumettes que vous souhaitez enlever en 1 et 6 allumette")
       
        Numbertoremove = parseInt(Numbertoremove)
        if (isNaN(Numbertoremove) && Numbertoremove >= 1 || Numbertoremove <= 6 )
            {
              Allumette = Allumette - Numbertoremove;
            console.log(" Le Joueur 2 a enlever "+ Numbertoremove +" Allumettes, donc il en reste " + Allumette )
            }else { continue ;}
        if (Allumette <= 0){ 

            alert("[Joueur 2} a gagne");
        }}}}
   
   
        

//enleverAllumettes()

// hi