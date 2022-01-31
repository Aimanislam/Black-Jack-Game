// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let player = { //OBJECT
    name: "Ayman",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false //when condition is true sum ==21  
let isAlive = false
let message = ""


function getRandomCard() {
    // return Math.random()                                    // 0.000 - 0.999
    // return Math.random()*13                                // 0.000 - 12.999
    let randomNumber = Math.floor(Math.random() * 13) + 1    //+1 lagane se hmre random numbers ki counting 0 se start nh hogi 1 se hogi
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    let playerEl = document.getElementById("player-el")
    playerEl.innerHTML = player.name + ": $" + player.chips
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    let messageEl = document.getElementById("message-el")
    let sumEl = document.getElementById("sum-el")
    let cardsEl = document.getElementById("cards-el")
    cardsEl.innerHTML = "Cards: "
    for (let i = 0; i < cards.length; i++) // optional "i+=1"
    {
        cardsEl.innerHTML += cards[i] + " "
    }

    sumEl.innerHTML = "Sum:" + sum
    if (sum <= 20) {
        message = ("Do you want to draw a new card?")
    } else if (sum == 21) {
        message = ("You've got Blackjack!")
        hasBlackJack = true

    } else {
        message = ("You're out of the game!")
        isAlive = false
    }

    messageEl.innerHTML = message

}

function newCard() {
    if (isAlive == true && hasBlackJack == false) {

    }
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}