/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/


const descrizioneBici = [
    {
        'nome' : 'Cannondale',
        'peso' : 30
    },
    
    {
        'nome' : 'Carrera',
        'peso' : 25
    },
    
    {
        'nome' : 'Casati',
        'peso' : 15
    },
    
    {
        'nome' : 'Cicli',
        'peso' : 80
    }
];

console.log(descrizioneBici)


let grande = descrizioneBici[0];
for ( let i = 0; i < descrizioneBici.length; i++){
    let x = descrizioneBici[i];
    if (grande['peso'] > x['peso']) {
        grande = x;
    }
}

console.log(grande)



let {nome, peso} = grande;

bici.innerHTML = `

    <div> nome ---> ${nome}  </div> 
    <div> peso ---> ${peso}  </div> 
`