/*Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.*/


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


//con forEach
let newArray = []

const min = parseInt(prompt('Inserisci un numero compreso fra 0 e 5'));
const max = parseInt(prompt('Inserisci un numero compreso fra 0 e 5'));

myArray.forEach(
    (element, i) =>{
        if (min <= i && max >= i){
            newArray.push(element)
        }
    } 
)


console.log(newArray);


//con Filter


const newArrayFilter = newArray.filter(
    /*(element, i) =>{
        if (min <= i && max >= i){
            return true
        }
            return false
    }*/

    (element , i) => min <= i && max >= i
)

console.log(newArrayFilter);

