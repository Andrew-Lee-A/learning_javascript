startGameBtn = document.getElementById("startGame-btn");
messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");

let firstCard = 1;
let secondCard = 2;
let sum = firstCard+secondCard;
//sumEl.textContent = "Sum: " + sum;

hasBlackJack = false;
isAlive = true;

let msg = "";


function startGame(){
    if (sum < 20 ){
        msg = "Do you want to draw a new card?";
    }else if (sum === 21){
        msg = "You got blackjack";
        hasBlackJack = true;
    }else{
        msg = "You out of the game";
        isAlive = false;
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = msg;
    
}
