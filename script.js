/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function function1() {
    let word = document.getElementById(`palindromoText`).value;
    let pluss = 0;
    for (let letter = word.length - 1 ; letter > 0; letter--) {
        
        if ( word[pluss] === word[letter] ) {
            pluss++
            document.getElementById(`palindroma`).innerHTML = `la parola ${word} è una parola palindorma`
        }else {
            document.getElementById(`palindroma`).innerHTML = `la parola ${word} non è una parola palindorma`
            break;
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

function function2() {
    let manNumber = document.getElementById(`numero`).value;
    let computerNumber = Math.floor( Math.random()* 6 );

    let newNumber = parseInt(manNumber) + parseInt(computerNumber);
    
    if ( newNumber % 2 === 0 ) {
        document.querySelector(".sfida").innerHTML=` ${newNumber} è pari complimenti hai vinto `
    } else {
        document.querySelector(".sfida").innerHTML=` ${newNumber} è dispari hai perso `
    };

    if ( parseInt(manNumber) === 1) {
        document.querySelector(".prima").classList.add("bg1")
    } else if( parseInt(manNumber) === 2) {
        document.querySelector(".prima").classList.add("bg2")
    } else if( parseInt(manNumber) === 3) {
        document.querySelector(".prima").classList.add("bg3")
    } else if( parseInt(manNumber) === 4) {
        document.querySelector(".prima").classList.add("bg4")
    } else if ( parseInt(manNumber) === 5) {
        document.querySelector(".prima").classList.add("bg5")
    };

    if (parseInt(computerNumber) === 1) {
        document.querySelector(".seconda").classList.add("bg11")
    } else if(parseInt(computerNumber) === 2) {
        document.querySelector(".seconda").classList.add("bg22")
    } else if(parseInt(computerNumber) === 3) {
        document.querySelector(".seconda").classList.add("bg33")
    } else if(parseInt(computerNumber) === 4) {
        document.querySelector(".seconda").classList.add("bg44")
    } else if(parseInt(computerNumber) === 5) {
        document.querySelector(".seconda").classList.add("bg55")
    };
}
