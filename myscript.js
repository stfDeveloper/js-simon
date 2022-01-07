let numbers = [];
 for (let i = 0; i < 5; i++) {
     let random = Math.floor(Math.random()*100+1);
    numbers.push(random);
    document.getElementById("game").innerHTML="Memorizza questi numeri <br>" +numbers;
 }

