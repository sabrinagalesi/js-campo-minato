/* (7) Il computer deve generare 16 numeri casuali tra 1 e 100. In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. 
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. 
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti. 
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.  
BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali. 
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50.  */

// Prima cosa, fare un for che generi 16 numeri casuali da 1 a 100;
// In seguito, fare un for che chieda 16 volte all'utente di inserire un numero; sempre compreso tra 1 e 100;
// Fare un if dicendo che se il numero inserito è uguale a un numero proibito generato, la partita termina, altrimenti il ciclo continua. 

var listaMine= []; //faccio un array vuoto in cui pushare la lista dei numeri random;

for(var numeroProibito = 0; numeroProibito < 16; numeroProibito++) { //Faccio un for per generare un numero randomico e pusharlo nell'array per 16 volte
    listaMine.push(Math.floor(Math.random () * 100) + 1);
}

console.log(listaMine);

var richiesta = parseInt(prompt("Inserisci un numero!"));


function mina (listaMine, richiesta) {
    for(var i = 0; i < listaMine.length; i++) {
        console.log(listaMine[i]);
        if (richiesta == listaMine[i]) {
            console.log("campo minato!");
            trovato = true;
        } else {
            console.log("Salvo!");
        }
    } 

}

var trovato = false;
while(trovato == false) {
    console.log("While salvo!")
    var richiesta = parseInt(prompt("Inserisci un numero!"));

    trovato = mina(listaMine, richiesta);    
}

if(trovato == true) {
    console.log("Hai perso!");
}







