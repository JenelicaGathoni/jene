let cards = []
let sum = 0 ;
let hasBlackJack = false;
let isAlive = false;
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")


let player  = {
    name:"Jenelle",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $" + player.chips;

//let sumEl = document.getElementById("sum-el") 
function getRandomCard(){
   
    let randomNumber = Math.floor( Math.random() *13) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}


function newCard (){
    if ( isAlive === true && hasBlackJack === false){
    let card = getRandomCard ();
    sum += card;
    cards.push(card)
    renderGame()
    }
}
function renderGame (){
if (sum <= 20) {
    message = "Do you want to draw a new card ";
    
}
else if(sum === 21) {
    message =  " You've got blackjack " ;
    hasBlackJack = true;
}
else {
    message = "You are out of the game! ";
    isAlive = false;
}

// CASH OUT
messageEl.textContent = message
sumEl.textContent = "sum: "  + sum ;
cardsEl.textContent = "cards: "
for (i =0; i < cards.length; i++){
    cardsEl.textContent += cards[i] +" "
}
}
function startGame (){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame()
}
