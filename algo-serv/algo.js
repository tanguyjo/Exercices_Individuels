const express = require('express');
const app = express();
const PORT = 8888;
let valuessorted = [];


const bubbleSort = (arr) => {
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {  // compare les deux elements du tableau et si i > i+1 on les echange
          let temp = arr[i];        //stocke element i dans un temp
          arr[i] = arr[i + 1];      // stocke element i+1 dans i
          arr[i + 1] = temp;      // stocke le temp dans i+1
          swapped = true;       // le tableau a été modifié donc on met swapped = true
        }
      }
    } while (swapped); // tant qu'on modifie on continue a faire le tri
  
    return arr;
  };

app.use(express.json());

app.post('/', (req, res) => {
  const { sort_order, values } = req.body;

  if (sort_order === 'asc') {   // si on donne asc
    valuessorted = bubbleSort(values); // on appelle le bubble sort
  } else if (sort_order === 'desc') { // si on donne desc
    valuessorted = bubbleSort(values).reverse(); // on appelle le bubble sort et on inverse avec reverse
    }
  return res.json({ received: values, sort_order,sorted: valuessorted }); 
});
app.listen(PORT, () => { 
  console.log(`Serveur lancé sur http://localhost:${PORT}`); 
});


// curl -X POST http://localhost:8888 -H "Content-Type: application/json" -d '{"sort_order": "desc", "values": [3, 2, 4, 1]}'
// curl -X POST http://localhost:8888 -H "Content-Type: application/json" -d '{"sort_order": "asc", "values": [3, 2, 4, 1]}'    


// curl -X POST http://localhost:8888 -H "Content-Type: application/json" -d '{"sort_order": "asc", "values": [3, 2, 4, 1, 5, 6, 7, 8, 9, 10,99,31,52,35,11,75,74,73]}'