// (3) Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, il sistema vuole generare una falsa lista di invitati.
// Fare un array di nomi
// Fare un array di cognomi 
// Genero un numero randomico per entrambe le liste da far corrispondere alla posizione di una stringa nell'array;
// Faccio un for che ripeta l'azione per tutti i nomi e cognomi della lista;

var nomi = [
    "Sabrina",
    "Sara",
    "Valeria",
    "Rachele",
    "Arianna",
    "Giulia",
    "Nikolas",
    "Filippo",
    "Samuele",
    "Alessandro",
    "Mirko",
    "Salvatore"
]

var cognomi = [
    "Galesi",
    "Barone",
    "Magagnato",
    "Meduri",
    "Paravanti",
    "Saggia",
    "Mosca",
    "Condello",
    "Vitale",
    "Palmadessa",
    "Pinkopallino",
    "Mendola"
]

console.log(nomi.length, cognomi.length);

console.log(randomNomi, randomCognomi);

var lista = [];

for(var counter = 0; counter < 11; counter++) {
    var randomNomi = nomi[Math.floor(Math.random () * 11)];
var randomCognomi = cognomi[Math.floor(Math.random() * 11)];
    lista.push(randomNomi + " " + randomCognomi);
}

console.log(lista);


