let numbers = [3, 2, 4, 1];
// numbers.sort((a,b) => a-b);
console.log(numbers);


function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j=0; j< array.length-i-1; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
}
bubbleSort(numbers)
console.log(numbers);
const API_URL = 'http://localhost:3000';

// async function addLanguage() {
//     const response = await fetch(`${API_URL}/languages`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: `{ "language": "`+input.value+`" }`,
//     });
	
// 	// affiche la réponse entière :
// 	console.log('Response: ', response);
	 
// 	 // on vérifie le statut pour voir si Malcolm a reçu le mot :
// 	if (response.status == 200 || response.status == 201|| response.status == 202) {
// 	    console.log(`Malcolm is 🥳!`);
		
// 	} else if (response.status === 408) {
// 	    console.log(`Malcolm is 😭`);
// 	} else {
// 	    console.log('Something went wrong 🤔');
// 	}
// 	// on recupère le body (qui est un json) :
// 	const body = await response.json();
// 	console.log(body);
// }

// // on appelle la fonction
// addLanguage();

