// (2) Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
// Fare prompt in cui chiediamo il numero
// Definire quando un numero è pari e quando invece è dispari
// Se è pari, lo stampiamo, se è dispari, facciamo dispari + 1 e stampiamo quello.

do {
    var numero = parseInt(prompt("Inserisci un numero!")); 
} while (isNaN(numero));

switch (numero % 2) {
    case 0:
    alert("Pari " + numero);
    console.log(numero);
    break;
    case 1:
    numero += 1;
    alert("Dispari + 1 = " + numero)
    console.log(numero);
    break;
}