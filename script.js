/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function function1() {
    let word = document.getElementById(`palindromoText`).value;
    const wordRevers = [];
    let pluss = 0;
    for (let letter = word.length - 1 ; letter > 0; letter--) {
        
        if ( word[pluss] === word[letter] ) {
            wordRevers.push( word[letter] )
            pluss++
            alert("prosegue")
        }else {
            alert("non prosegue")
        }
    }
}



/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


