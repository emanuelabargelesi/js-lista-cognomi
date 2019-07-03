//lista array di cognomi
var cognomi = [
  'Kent',
  'Banner',
  'Wayne',
  'Parker',
  'Prince'
];

//do la variabile elemento alla stringa document.getElementById("listacognomi"); solo per non doverla ripetere in caso
//si riutilizzasse all'interno del codice
var elemento = document.getElementById("listacognomi");


//chiedi cognome all'utente e con .toUpperCase() lo trasporma poiché se gli array sono con lettera capitale per
//inserirlo correttamente nella posizione in ordine alfabetico dovrà essere anche esso con lettera capitale (o tutto maiuscolo)
// o posso trasformare tutto minuscolo con .toLowerCase();
var cognome = prompt("Scrivi il tuo cognome").toUpperCase();


//inserisci cognome nella listacognomi
cognomi.push(cognome);

//stampa la lista ordinata alfabeticamente
for (var i = 0; i < cognomi.length; i++) {

  elemento.innerHTML = cognomi.sort();

//stampa la posizione del cognome utente
  var a = cognomi.indexOf(cognome);
  document.getElementById("posizione").innerHTML = "La tua posizione è: " + a;
}
