// (1) Chiedere all-utente due numeri e quale operazione vuole eseguire. Stampare a schermo il risultato dell'operazione
// Prima cosa, fare prompt in cui si chiedono due numeri e il tipo di operazione che si vuole eseguire
// con uno switch, indicare cosa fare in tutte le possibili casistiche e segnalarle con un alert

do {
    var primoNumero = parseInt(prompt("Inserisci un numero!"));
} while (isNaN(primoNumero));

do {
    var secondoNumero= parseInt(prompt("Inserisci un altro numero!"));
} while (isNaN(secondoNumero));

do {
    var operazione= prompt("Che tipo di operazione preferisci che faccia?");
} while (operazione != "somma" && operazione != "sottrazione" && operazione != "moltiplicazione" && operazione != "divisione");



console.log(primoNumero, secondoNumero, operazione);



switch(operazione) {
    case "somma":
        var somma = primoNumero + secondoNumero;
        alert("Il risultato è " + somma);
        break;
    case "sottrazione":
        var sottrazione = primoNumero - secondoNumero;
        alert("Il risultato è " + sottrazione);
        break;
    case "moltiplicazione":
        var moltiplicazione = primoNumero * secondoNumero;
        alert("Il risultato è " + moltiplicazione);
        break;
    case "divisione":
        var divisione = primoNumero / secondoNumero;
        alert("Il risultato è " + divisione);
}