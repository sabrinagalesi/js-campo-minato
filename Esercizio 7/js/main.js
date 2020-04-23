/* (7) Il computer deve generare 16 numeri casuali tra 1 e 100. In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. 
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. 
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti. 
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.  
BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali. 
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50.  */

// Prima cosa, fare un for che generi 16 numeri casuali da 1 a 100;
// In seguito, fare un for che chieda 16 volte all'utente di inserire un numero; sempre compreso tra 1 e 100;
// Fare un if dicendo che se il numero inserito è uguale a un numero proibito generato, la partita termina, altrimenti il ciclo continua. 

function mina (listaMine, richiesta) { //Faccio una funzione per listare  l'array di mine 
    var trovato = false;
    for(var i = 0; i < listaMine.length; i++) {
        console.log(listaMine[i]);
        if (richiesta == listaMine[i]) { //Se il numero della richiesta all'utente coincide con il numero corrente esaminato
            console.log("campo minato!");
            trovato = true;
        } 
    } 
    if (trovato == true) { //Facciamo un if con return esterno al for, altrimenti si fermerebbe il ciclo
        return true;
    } else {
        return false;
    }

    //return trovato;
}

function numeroUguale (richiesta, listaUtente) {
    var uguale = false;
    for(var pushUtente = 0; pushUtente < listaUtente.length; pushUtente++) {
        if(richiesta == listaUtente[pushUtente]) {
            uguale = true;
        }
    }
    console.log("numero uguale", richiesta, uguale, listaUtente )
    if(uguale == true) {
        return true;
    } else {
        return false;
    }

    //return uguale;
}

var listaMine= []; //faccio un array vuoto in cui pushare la lista dei numeri random;
var listaUtente=[]; //metto i numeri che inserisce l'utente in un array;


for(var numeroProibito = 0; numeroProibito < 16; numeroProibito++) { //Faccio un for per generare un numero randomico e pusharlo nell'array per 16 volte
    listaMine.push(Math.floor(Math.random () * 100) + 1);
}

console.log(listaMine);

var contatoreTentativi = 0;

var ricercaMina = false; //Impostiamo la ricercaMina uguale a false

//&& listaUtente.length < 84
while(ricercaMina == false && contatoreTentativi < 84) { //Finchè ricercaMina è uguale a false, cioè finchè non hai perso; finchè non si arriva a 84 tentativi;
    console.log("While salvo!")
    do {
        var richiesta = parseInt(prompt("Inserisci un numero!"))
        console.log(richiesta, "numero inserito");
    } while (isNaN(richiesta) || numeroUguale(richiesta, listaUtente) == true); // Con questo while controllo che l'utente non possa scrivere una stringa o uno spazio vuoto.
    listaUtente.push(richiesta);
    ricercaMina = mina(listaMine, richiesta);     //Continua a richiamare la funzione di ricerca
    console.log(listaUtente, "lista utente");
    contatoreTentativi++
    console.log(contatoreTentativi, "contatore");
}


if(ricercaMina == true) { // Se trovato = true allora hai perso
    alert("Campo minato! Complimenti! Hai evitato le mine " + contatoreTentativi + " volte!");
}

if(contatoreTentativi == 84) {
    alert("Complimenti! Hai vinto la partita!");
}

//Fare in modo che il giocatore non possa ripetere lo stesso numero, 
// poi che non possa non scrivere niente(NaN); FATTO
// far finire il gioco a 84 tentaviti; FATTO






