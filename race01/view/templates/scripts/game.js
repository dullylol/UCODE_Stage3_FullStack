class Hero {
    constructor(health) {
        this.health = health
    }
}

class Card {

    constructor (name, photo, power, health, cost)
    {
        this.name = name;
        this.photo = photo;
        this.power = power;
        this.health = health;
        this.cost = cost;
    }

}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function getDeck() {
    return [
        new Card("Iron Man", "path", 5, 4, 4),
        new Card("Hulk", "path", 10, 10, 8),
        new Card("Thanos", "path", 20, 20, 10),
        new Card("Black panther", "path", 3, 4, 3),
        new Card("Captain America", "path", 2, 5, 3),
        new Card("Socol", "path", 1, 2, 1),
        new Card("Black Widow", "path", 2, 1, 1),
        new Card("Thor", "path", 10, 15, 9),
        new Card("Loki", "path", 3, 3, 2)
    ]
}

function render() {
    // me
    let index = 0
    myField.forEach(element => {
        if (element != null) {
            document.getElementById(`my_field_card${index}`).classList = "my_card visible_card"
            document.getElementById(`my_field_card${index}_name`).innerHTML = element.name
            document.getElementById(`my_field_card${index}_cost`).innerHTML = element.cost
            document.getElementById(`my_field_card${index}_power`).innerHTML = element.power
            document.getElementById(`my_field_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`my_field_card${index}`).classList = "my_card invisible_card"
        }
        index++
    })

    index = 0
    myHand.forEach(element => {
        if (element != null) {
            document.getElementById(`my_hand_card${index}`).classList = "my_card visible_card"
            document.getElementById(`my_hand_card${index}_name`).innerHTML = element.name
            document.getElementById(`my_hand_card${index}_cost`).innerHTML = element.cost
            document.getElementById(`my_hand_card${index}_power`).innerHTML = element.power
            document.getElementById(`my_hand_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`my_hand_card${index}`).classList = "my_card invisible_card"
        }
        index++
    })

    // enemy
    index = 0
    enemyField.forEach(element => {
        if (element != null) {
            document.getElementById(`enemy_field_card${index}`).classList = "enemy_card visible_card"
            document.getElementById(`enemy_field_card${index}_name`).innerHTML = element.name
            document.getElementById(`enemy_field_card${index}_cost`).innerHTML = element.cost
            document.getElementById(`enemy_field_card${index}_power`).innerHTML = element.power
            document.getElementById(`enemy_field_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`enemy_field_card${index}`).classList = "enemy_card invisible_card"
        }
        index++
    })

    index = 0
    enemyHand.forEach(element => {
        if (element != null) {
            document.getElementById(`enemy_hand_card${index}`).classList = "enemy_card visible_card"
            document.getElementById(`enemy_hand_card${index}_name`).innerHTML = element.name
            document.getElementById(`enemy_hand_card${index}_cost`).innerHTML = element.cost
            document.getElementById(`enemy_hand_card${index}_power`).innerHTML = element.power
            document.getElementById(`enemy_hand_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`enemy_hand_card${index}`).classList = "enemy_card invisible_card"
        }
        index++
    })

    //heroes
    document.getElementById("my_hero_health").innerHTML = me.health
    document.getElementById("enemy_hero_health").innerHTML = enemy.health
}

function playCard(index, gamer) {
    if (gamer == "me") {
        for (let i = 0; i < FIELD; i++) {
            if (myField[i] == null) {
                myField[i] = myHand[index]
                myHand[index] = null
                break
            }
        }
    } else if (gamer == "enemy") {
        for (let i = 0; i < FIELD; i++) {
            if (enemyField[i] == null) {
                enemyField[i] = enemyHand[index]
                enemyHand[index] = null
                break
            }
        }
    }

    render()
}

function attack(index, gamer) {
    if (gamer == "me") {
        if (enemyField[index] != null) {
            myField[index].health -= enemyField[index].power
            enemyField[index].health -= myField[index].power
            if (myField[index].health <= 0) {
                myField[index] = null
            }
            if (enemyField[index].health <= 0) {
                enemyField[index] = null
            }
        } else {
            enemy.health -= myField[index].power
            if (enemy.health <= 0) {
                gameOver = true
                winner = "me"
            }
        }
    } else if (gamer == "enemy") {
        if (myField[index] != null) {
            myField[index].health -= enemyField[index].power
            enemyField[index].health -= myField[index].power
            if (myField[index].health <= 0) {
                myField[index] = null
            }
            if (enemyField[index].health <= 0) {
                enemyField[index] = null
            }
        } else {
            me.health -= enemyField[index].power
            if (me.health <= 0) {
                gameOver = true
                winner = "enemy"
            }
        }
    }

    // cards moving
    for (let i = 0; i < FIELD - 1; i++) {
        for (let j = 0; j < FIELD - 1; j++) {
            if (myField[j] == null) {
                myField[j] = myField[j + 1]
                myField[j + 1] = null
            }
            if (enemyField[j] == null) {
                enemyField[j] = enemyField[j + 1]
                enemyField[j + 1] = null
            }
        }
    }

    render()
}


function changeTurn() {
    if (turn == "me") {
        turn = "enemy"
        for (let i = 0; i < myButtons.length; i++) {
            myButtons[i].disabled = false
        }
        for (let i = 0; i < enemyButtons.length; i++) {
            enemyButtons[i].disabled = true
        }
    } else if (turn == "enemy") {
        turn = "me"
        for (let i = 0; i < myButtons.length; i++) {
            myButtons[i].disabled = true
        }
        for (let i = 0; i < enemyButtons.length; i++) {
            enemyButtons[i].disabled = false 
        }
    }
}


function endTurn() {
    //TODO add endTurn button
}


// constants
const DECK = 20
const HERO_HEALTH = 30
const FIELD = 6
const HAND = 4

// game variables
var gameOver = false
var winner = null
var time = 30
var turn = "me"
var myButtons = document.getElementsByClassName("my_buttons")
var enemyButtons = document.getElementsByClassName("enemy_buttons")

// cards` arrays
var me = new Hero(HERO_HEALTH)
var myDeck = getDeck()
var myHand = new Array(HAND)
var myField = new Array(FIELD)

var enemy = new Hero(HERO_HEALTH)
var enemyDeck = getDeck()
var enemyHand = new Array(HAND)
var enemyField = new Array(FIELD)

shuffle(myDeck)
for (let i = 0; i < HAND; i++) {
    myHand[i] = myDeck.pop()
}

shuffle(enemyDeck)
for (let i = 0; i < HAND; i++) {
    enemyHand[i] = enemyDeck.pop()
}

render()
changeTurn()

// turns interval
var timer = setInterval(() => {
    document.getElementById("time").innerHTML = --time
    if (gameOver) {
        clearInterval(timer)
        clearInterval(interval)
    }
}, 1000)

var interval = setInterval(() => {
    if (turn == "me") {
        changeTurn()
    } else if (turn == "enemy") {
        changeTurn()
    }
    time = 30
}, 30000)

