

let cards = [];


let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Andrew",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function startGame(){
    cards = [];
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    hasBlackJack = false;
    isAlive = true;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent+=" " + cards[i];
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 20 ){
        msg = "Do you want to draw a new card?";
    }else if (sum === 21){
        msg = "You got blackjack";
        hasBlackJack = true;
    }else{
        msg = "You out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = msg;
    
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let newCard = getRandomCard();
        cards.push(newCard);
        sum+= newCard;
    
        renderGame();
        
    }
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1;
    if (randomCard > 10){
        return 10;
    }else if (randomCard === 1){
        return 11;
    }else{
        return randomCard;
    }

}

