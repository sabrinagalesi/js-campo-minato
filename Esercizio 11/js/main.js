/* (11) Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
    Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. 
    1- Fare due prompt e chiedere di inserire una parola
    2- Fare una funzione per verificare che le parole abbiano la stessa lunghezza
    3- se hanno la stessa lunghezza, stamparle entrambe, altrimenti stampare la più lunga*/

function lunghezza(richiesta1, richiesta2, stessaLunghezza) {
    if (richiesta1.length == richiesta2.length) {
        stessaLunghezza = true;
        console.log(stessaLunghezza);
    }   return stessaLunghezza
}

var stessaLunghezza = false;
do{
    var richiesta1 = prompt("Inserisci una parola!");
} while(!isNaN(richiesta1));
do{
    var richiesta2 = prompt("Inserisci un'altra parola!");
} while(!isNaN(richiesta2));

console.log(richiesta1.length, richiesta2.length);

lunghezza(richiesta1, richiesta2, stessaLunghezza);


if(stessaLunghezza == true) {
    alert(richiesta1 + " e " + richiesta2 + " hanno la stessa lunghezza!");
    console.log(stessaLunghezza, "fuori dalla funzione")
} else if (richiesta1.length > richiesta2.length) {
    alert(richiesta1 + " è la più lunga!");
} else if (richiesta2.length > richiesta1.length) {
    alert(richiesta2 + " è la più lunga!");
}