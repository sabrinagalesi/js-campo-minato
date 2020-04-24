/* (8) Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50 
1- creo un array vuoto;
2- fare prompt chiedendo un numero;
3- fare una somma di tutti i numeri inseriti dall'utente con do
4- con un while, continuare a chiedere numeri all'utente finchè la somma arriva a 50*/


var numeriUtente = []; //Creo un array vuoto;
var somma = 0;

do {
    var richiesta = parseInt(prompt("Inserisci un numero minore di 50!"));
    numeriUtente.push(richiesta);
    console.log(richiesta, numeriUtente);
    somma = somma + richiesta;
    console.log(somma);
} while(somma != 50 && richiesta < 50);


