let sum = 0;
let card = []
let hasBlackJack = false;
let isAlive = false;
let message = ""

let message_el = document.getElementById("message-el");
let sum_el = document.querySelector("#sum_el");
let Card_el = document.querySelector(".Card_el");

let player = {
    name: "Sahan",
    chips: 145
}

let player_el = document.querySelector("#player-el");

player_el.textContent = player.name + ": $" + player.chips;

const getrandomcard = () => {
    let number = Math.floor(Math.random() * 13) + 1

    if (number === 1) {
        return 11;
    }
    else if (number > 10) {
        return 10;
    }
    else {
        return number
    }
}


const openstart = () => {
    isAlive = true;

    let firstCard = getrandomcard();
    let secondCard = getrandomcard();
    card = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();

}

const renderGame = () => {

    Card_el.textContent = "Cards : "

    for (let i = 0; i < card.length; i++) {
        Card_el.textContent += card[i] + ' ';
    }

    sum_el.innerText = "Sum : " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo you've got the blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    message_el.innerText = message;
}

const newCard = () => {

    if(isAlive === true && hasBlackJack === false){
        let car = getrandomcard();

    sum += car;
    card.push(car);

    renderGame();
    }
    
}
