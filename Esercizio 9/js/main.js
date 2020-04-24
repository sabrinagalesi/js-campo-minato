/* (9) Fai inserire un numero, che chiameremo N, all’utente. 
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. 
Ogni volta che ne crei uno, stampalo a schermo. 
1- Fare prompt per far inserire un numero all'utente
2- formare tanti array quanti ne ha chiesti l'utente
3- array devono contenere 10 elementi casuali tra 1 e 100
4- stampare a schermo ogni array che viene creato*/

var richiestaNumero = parseInt(prompt("Inserisci un numero: stamperò tanti array quanti me ne hai chiesti!")) // Faccio un prompt e chiedo il numero

console.log(richiestaNumero);

for(arrayMaker = 0; arrayMaker < richiestaNumero; arrayMaker++) { // genero tanti array quanti ne ha chiesti l'utente;
    var arrayN = [];
    console.log(arrayMaker,arrayN);
}

