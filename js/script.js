// FizzBuzz (senza usare le funzioni)
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var messaggio;

// genera i numeri da 1 a 100
for (var i = 1; i <= 100; i++){
  // se è divisibile per 3 e per 5 allore stampa il messaggio FizzBuzz
  if(i%3 == 0 && i%5 == 0){
    messaggio = 'FizzBuzz'
  } else if(i%3 == 0){
    // se è divisibile solo per 3 allora stampa il messaggio Fizz
    messaggio = 'Fizz';
  } else if (i%5 == 0){
    // se è divisibile solo per 5 allora stampa il messaggio Buzz
    messaggio = 'Buzz';
  } else{
    messaggio = i;
  }
  console.log(messaggio);
} 






