let randomNumber1 = Math.floor(Math.random() *6) +1;
console.log(randomNumber1);
let newDice1 = 'dice'+randomNumber1;
console.log(newDice1);
let dice1 = document.querySelector(".container :nth-child(2) img");
dice1.setAttribute("src", '/images/'+newDice1+'.png');

let randomNumber2 = Math.floor(Math.random() *6) +1;
console.log(randomNumber2);
let newDice2 = 'dice'+randomNumber2;
console.log(newDice2);
let dice2 = document.querySelector(".container :nth-child(3) img");
dice2.setAttribute("src", '/images/'+newDice2+'.png');

let header = document.querySelector('h1');
header = win(newDice1, newDice2)

function win(newDice1, newDice2){
    if (newDice1 === newDice2){
        return header.textContent = "Draw!"
    }
    else if (newDice1 > newDice2){
        return header.textContent = "Player 1 wins!"
    }
    else{
        return header.textContent = "Player 2 wins!"
    }

}