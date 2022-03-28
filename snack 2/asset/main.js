/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, 
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e
 stampiamo tutto in console.*/



 const squadreCalcio =
[
    {
        'nome': 'F.C Internazionale 1908',
        'puntifatti' : 0,
        'fallisubiti' : 0
    },
    {
        'nome': 'Milan',
        'puntifatti' : 0,
        'fallisubiti' : 0
    },
    {
        'nome': 'Napoli',
        'puntifatti' : 0,
        'fallisubiti' : 0
    },
    {
        'nome': 'Lazio',
        'puntifatti' : 0,
        'fallisubiti' : 0
    },
    {
        'nome': 'Roma',
        'puntifatti' : 0,
        'fallisubiti' : 0
    }
];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


/*let puntieFalli = getRandomInt(100)
console.log(puntieFalli)*/



for (let  i = 0;  i < squadreCalcio.length;  i++) {
    let element = getRandomInt(100);
    squadreCalcio[i].puntifatti  = element;
    squadreCalcio[i].fallisubiti  = element;
    
}

console.log(squadreCalcio);

const newArrayTeams = [];

for (let i = 0; i < squadreCalcio.length; i++) {
    let element = squadreCalcio[i];
    
    const { nome, fallisubiti } = element;

    newArrayTeams.push(
        { 
            nome,
            fallisubiti 
        }  
    )
}

console.log( newArrayTeams)