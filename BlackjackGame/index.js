
let cards = [];
let compcards = [];
let sum = 0;
let compsum = 0;
let hasBlackJack = false
let isAlive = true
let stayRound = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let compsumEl = document.querySelector("#sum-el-comp")
let compcardsEl = document.getElementById("cards-el-comp")

let player = {
     name : "Player",
     chips : 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;



function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*11) + 1 ;
    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else {
        return randomNumber
    }
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let compfirstCard = getRandomCard();
    let compSecondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    compcards = [compfirstCard,compSecondCard];
    compsum = compfirstCard + compSecondCard;
    isAlive = true;
    renderGame();
    comprendergame();
}
function renderGame(){
    cardsEl.textContent = "Your Cards: " 
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";    
    }
    sumEl.textContent = "Your Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card ? "
    } else if (sum === 21) {
        message = "Congrats! You've got Blackjack!"
        hasBlackJack = true;
    } else if (sum > 21 && compsum <= 21) {
        message = "Computer Won! "
        isAlive = false;
    } else if (sum > 21 && compsum > 21) {
        message = "You both lost"
    }
    
    messageEl.textContent = message;
    console.log(message);
}

function comprendergame(){
    compcardsEl.textContent = "Computer's Cards: ";
    
    for (let i=0; i<compcards.length; i++){
        compcardsEl.textContent += compcards[i] + " ";
    }
    compsumEl.textContent= "Computer's Sum: " + compsum;

    if (sum<16 ){
        
    } else if (sum>=16){
        isAlive = false;
    }

}

function compNewCard(){
    let compcard = getRandomCard();
    compsum += compcard;
    compcards.push(compcard);
    comprendergame();
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function stopRaund(){
    stayRound = true;
    if (isAlive === true && hasBlackJack === false){
        isAlive = false;
    }
}
