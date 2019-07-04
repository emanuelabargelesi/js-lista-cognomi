// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi a che posizione della lista il nuovo utente si trova

//lista array cognomi
var cognomi = [
  'Parker',
  'Wayne',
  'Baggins',
  'Ross',
  'skywalker'
];

//domandare cognome utente
var richiesta = prompt("Ciao, scrivi il tuo cognome").toUpperCase();
//richiesta = richiesta.toUpperCase();

// inserire cognome utente in lista array cognomi
cognomi.push(richiesta);

for (var i = 0; i < cognomi.length; i++) {
  cognomi[i] = cognomi[i].toUpperCase();
}

//la variabile e il sort sono inseriti esternamente al ciclo for in quanto altrimenti andrebbero ripetute quante volte viene ripetuto
//il ciclo, andando unicamente ad appesantire il lavoro (il ciclo le rielaborerebbe a ogni giro)
var elemento;
cognomi.sort();

//stampare lista array cognomi in ordine alfabetico e la posizione in lista del cognome dell'utente pushato
for (var i = 0; i < cognomi.length; i++) {
  //la variabile la inseriamo nel for poiché deve essere costantemente aggiornata e popolata di conseguenza alla stringa sotto
  elemento = document.getElementById("listacognomi").innerHTML;
  document.getElementById("listacognomi").innerHTML = elemento + '<li>' + cognomi[i] + '</li>';
}

document.getElementById("posizione").innerHTML = cognomi.indexOf(richiesta) + 1;
