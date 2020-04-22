// (4) Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// Creare un array di numeri interi 
// Definire i numeri pari e i numeri dispari
// Sommare solo i numeri dispari all'interno dell'array

var numeri = [
    2,
    5,
    14,
    33,
    7,
    4,
    8,
    9,
    11,
    27,
    66
]

var sommaDispari = 0;
 

console.log(numeri);

for(var counter = 0; counter < numeri.length; counter++) {
    switch (counter % 2) {
        case 0:
            break;
        case 1: 
            console.log("posizione dispari", numeri[counter]);
            sommaDispari = sommaDispari + numeri[counter];
            break;
    }
}

console.log(sommaDispari);

/* un modo per semplificare il codice e ridurlo a 2 righe
for(var i = 1; i < numeri.length; i += 2) {
    sommaDispari += numeri[i];
} */