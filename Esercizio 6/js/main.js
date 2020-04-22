// (6) Scrivi una funzione per stabilire se un numero è primo. 
//     Chiedi un numero all’utente e utilizza la funzione per comunicargli se il numero inserito è primo oppure no.
// Fare un prompt in cui chiediamo all'utente di inserire un numero
// Fare una funzione in cui diciamo che se il numero che ha inserito diviso per se stesso da resto 0, allora è un numero primo, altrimenti no
// Fare un alert che notifichi all'utente se il numero che ha inserito è primo o no

var richiestaNumero = prompt("Digita un numero. Ti dirò se è un numero primo!");

console.log(richiestaNumero);

function primo(richiestaNumero) {
    if(richiestaNumero % richiestaNumero ==0 && richiestaNumero % 1 == 0 && richiestaNumero % 2 !=0) {
        alert("Numero primo!", richiestaNumero);
    } else {
        alert("Non è primo!", richiestaNumero);
    }
}

primo(richiestaNumero);