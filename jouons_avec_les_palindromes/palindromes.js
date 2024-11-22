                                    // Etape 1:

function maxDaysInMonth(month){
       let days = 0
   if(month== 1||month == 3 || month == 5 || month == 7 ||month == 8 || month == 10 || month == 12)
    { days =31;
       return days
     }
     else if(month == 2) { 
         days = 29; 
       return days}
        else {
             days = 30;
             return days
        }
}
// maxDaysInMonth(1)
// maxDaysInMonth(2)
// maxDaysInMonth(3)
// maxDaysInMonth(6)

function isValidDate(date){
    let Datesplit = ""
     Datesplit = date.split("/");
    //  console.log(Datesplit);
    //  console.log(Datesplit[0])
    //  console.log(Datesplit[1]);
    //  console.log(Datesplit[2])
    //  console.log((Datesplit[0]+Datesplit[1]))
    maxDaysInMonth(Datesplit[1])
    //console.log(parseInt(Datesplit[0]))
    //console.log(parseInt(Datesplit[1]))
    if(parseInt(Datesplit[0])>parseInt(maxDaysInMonth(Datesplit[1]))){
        console.log(date + " Is not a valid date");
        return false;
    }
    else if (parseInt(Datesplit[1])>12){
        console.log(date + " Is not a valid Date");
        return false;

    } else {
        console.log(date + " Is a valid Date")
       
    }
 return Datesplit;
}


//isValidDate("20/11/2024")



//  date ="20/11/2024"
//  Datesplit = [ '20', '11', '2024' ]

                                    //Etape 2:
function isPalindrome(date){
    if(isValidDate(date) == false){
        return console.log(false + " because " + date + " is not a valid date");}
        else {
    
Datesplit = date.split("/");
//console.log((Datesplit[0]+Datesplit[1]))
//console.log(parseInt(Datesplit[1]+Datesplit[0]))

split1 = Datesplit[1]
split0 = Datesplit[0]


Datesplit1= split1.split("").reverse().join("")
Datesplit0= split0.split("").reverse().join("")
//console.log(Datesplit1.split("").reverse().join(""))
//console.log(Datesplit0.split("").reverse().join(""))
 if((( parseInt(Datesplit1 + Datesplit0))) === parseInt(Datesplit[2]))
 {
    console.log(date + " est une annee palindrome");
    return console.log(true)
 }  else  {
    console.log(date + " n'est pas une annee palindrome");
    return console.log(false)
}
}
}
//isPalindrome("20/02/2002")
isPalindrome("13/01/1031")






                                    //Etape 3:


function getNextPalindromes(numberx){
   date = "20/11/2024"
   let Datesplit = date.split("/");
    
   
    let split0 = Datesplit[0];
    let split1 = Datesplit[1];
    let  split2 = Datesplit[2];

//    let resplit0 = (parseInt(split0) + 1).toString();
//    let resplit1 = (parseFloat(parseInt(split1) + 1)).toString();
//    let  resplit2 = (parseFloat(parseInt(split2) + 1)).toString();
//    let newdate = (resplit0+'/'+resplit1 +'/'+resplit2);
//    console.log(newdate);

 
   //console.log(reDatesplit)
//    console.log(resplit0)
//    console.log(resplit1)
//    console.log(resplit2)

   
   let nombredepalindromes = 0
//     while(nombredepalindromes < numberx){
//         if(isPalindrome(date) == true){ 
//             nombredepalindromes ++;
//             console.log(date)
//         }
//     else{ if(Datesplit[1] !==2){
//          resplit0 = (parseFloat(parseInt(split0))).toString();
//          resplit1 = (parseFloat(parseInt(split1 = (0o2))  )).toString();
//          resplit2 = (parseFloat(parseInt(split2))).toString();
//          date = (resplit0+'/'+resplit1 +'/'+resplit2);
//           }


// }

while (nombredepalindromes < numberx){
let resplit0 = Datesplit[0];
let resplit1 =Datesplit[1];
let resplit2 = Datesplit[2];
    if(isPalindrome(date) == true){ 
        nombredepalindromes ++;
        console.log(date)
    }
   
         else if (Datesplit[0] < 29){
            resplit0 = (parseFloat(parseInt( resplit0) + 1)).toString();
        resplit1 = (parseFloat(parseInt( resplit1))).toString();
        resplit2 = (parseFloat(parseInt( resplit2))).toString();
        date = (resplit0+'/'+resplit1 +'/'+resplit2);
        console.log(date)
      
         }
            resplit0 = (parseFloat(parseInt( resplit0))).toString();
            resplit1 = (parseFloat(parseInt( resplit1))).toString();
            resplit2 = ((parseInt( (resplit2) + 1))).toString();
            date = (resplit0+'/'+resplit1 +'/'+resplit2);
            console.log(date)

    }
 
        
 
}
getNextPalindromes(8)