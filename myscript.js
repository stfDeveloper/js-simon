let numbers = [];
 for (let i = 0; i < 5; i++) {
     let random = Math.floor(Math.random()*100+1);
    numbers.push(random);
    document.getElementById("game").innerHTML="Memorizza questi numeri <br>" +numbers;
 }
 setTimeout (tempo, 3000);
 function tempo(){
     game.innerHTML = "";
     let array2 = [];
     let numeroUtente;

     for (let index = 0; index < numbers.length; index++) {
         numeroUtente = parseInt (prompt("Inserisci i numeri visti in ordine"));
         if (numbers.includes(numeroUtente)) {
             array2.push(numeroUtente)
         }
     }game.innerHTML
      =`Hai indovinato ${array2.length} di questi numeri :${array2.join(' ')}`;
 }