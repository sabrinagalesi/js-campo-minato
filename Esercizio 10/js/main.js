/* (10) Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde. 
        Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. 
    1-  Fare due div id, stampati a schermo, uno di colore rosso e uno verde
    2-  Colleghiamo i due div con js tramite dei getElementById
    3-  Creiamo un array con dentro dei numeri 
    4-  Stabiliamo quali numeri sono pari e quali numeri sono dispari
    5-  Aggiungiamo i numeri dispari del div rosso e i pari nel div verde */

    var numeri = [
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

    var numeriPari = "";
    var numeriDispari = "";

    for(i = 0; i < numeri.length; i++) { //In questo modo ho listato i numeri dentro l'array e ho stabilito quando un numero è pari e quando è dispari
        if(numeri[i] % 2 == 0) {
            console.log(numeri[i], "numero pari");
            numeriPari +=" " + numeri[i];
        } else {
            console.log(numeri[i], "numero dispari");
            numeriDispari += " " + numeri[i];
        }
    }

    document.getElementById("square-verde").innerHTML = numeriPari;
    document.getElementById("square-rosso").innerHTML = numeriDispari;