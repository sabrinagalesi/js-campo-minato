//(5) Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi,
//    fino a quando ne avrà tanti quanti l’altro.
// Creare due array, uno più lungo e uno più corto
// fare console.log per sapere la lunghezza dei due array
// con un while, fare un push all'array più corto finchè non ha la stessa lunghezza dell'array più lungo

var arrayLungo = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
]

var arrayCorto = [
    20,
    19,
    18,
    17,
    16,
    15
]

console.log(arrayLungo.length, arrayCorto.length);

while(arrayCorto.length < arrayLungo.length) {
    arrayCorto.push(Math.floor(Math.random() * 20) + 1);
}

console.log(arrayCorto);
