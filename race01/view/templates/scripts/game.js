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

//============================SUPER BOT==================================
class Bot {
    start() {
        let count = 0
        for (let i = 0; i < enemyHand.length; i++) {
            if (enemyHand[i] != null) count++
            setTimeout(() => {
                if (enemyHand[i] != null) {
                    playCard(i, "enemy")
                }
            }, 1000 * i)
        }
        for (let i = 0; i < enemyField.length; i++) {
            if (enemyField[i] != null) count++
            setTimeout(() => {
                if (enemyField[i] != null) {
                    attack(i, "enemy")
                }
            }, 1000 * i + enemyHand.length * 1000)

        }
        setTimeout(() => {
            pass()
        }, count * 1000)
    }
}
//=======================================================================

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

function putCardToHand(gamer) {
    if (gamer == "me" && myDeck != null) {
        for (let i = 0; i < myHand.length; i++) {
            if (myHand[i] == null) {
                myHand[i] = myDeck.pop()
                document.getElementById(`my_hand_card${i}_button`).disabled = false
                break
            }
        }
    } else if (gamer == "enemy") {
        for (let i = 0; i < enemyHand.length; i++) {
            if (enemyHand[i] == null) {
                enemyHand[i] = enemyDeck.pop()
                document.getElementById(`enemy_hand_card${i}_button`).disabled = false
                break
            }
        }
    }
}

function render() {
    // me
    let index = 0
    myField.forEach(element => {
        if (element != null) {
            document.getElementById(`my_field_card${index}`).classList = "card my_card visible_card"
            document.getElementById(`my_field_card${index}_name`).innerHTML = element.name
            document.getElementById(`my_field_card${index}_cost`).innerHTML = element.cost
            document.getElementById(`my_field_card${index}_power`).innerHTML = element.power
            document.getElementById(`my_field_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`my_field_card${index}`).classList = "card my_card invisible_card"
        }
        index++
    })

    index = 0
    myHand.forEach(element => {
        if (element != null) {
            document.getElementById(`my_hand_card${index}`).classList = "card my_card visible_card"
            document.getElementById(`my_hand_card${index}_name`).innerHTML = element.name
            document.getElementById(`my_hand_card${index}_cost`).innerHTML = element.cost
            document.getElementById(`my_hand_card${index}_power`).innerHTML = element.power
            document.getElementById(`my_hand_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`my_hand_card${index}`).classList = "card my_card invisible_card"
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

    //manna
    document.getElementById("manna").innerHTML = `${manna} / ${absoluteManna}`

}

function playCard(index, gamer) {
    if (gamer == "me" && myHand[index] != null && myHand[index].cost <= manna) {
        manna -= myHand[index].cost
        document.getElementById("manna").innerHTML = `${manna} / ${absoluteManna}`

        for (let i = 0; i < FIELD; i++) {
            if (myField[i] == null) {
                myField[i] = myHand[index]
                myHand[index] = null
                break
            }
        }
    } else if (gamer == "enemy" && enemyHand[index] != null && enemyHand[index].cost <= manna) {
        manna -= enemyHand[index].cost
        document.getElementById("manna").innerHTML = `${manna} / ${absoluteManna}`

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
    if (gamer == "me" && document.getElementById(`my_field_card${index}_button`).disabled == false) {
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
        document.getElementById(`my_field_card${index}_button`).disabled = "true"

    } else if (gamer == "enemy" && document.getElementById(`enemy_field_card${index}_button`).disabled == false) {
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
        document.getElementById(`enemy_field_card${index}_button`).disabled = "true"
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
        putCardToHand("me")
        turn = "enemy"
        for (let i = 0; i < myButtons.length; i++) {
            if (!myButtons[i].parentNode.classList.toString().includes("invisible_card")) {
                myButtons[i].disabled = false
            }
        }
        for (let i = 0; i < enemyButtons.length; i++) {
            enemyButtons[i].disabled = true
        }
    } else if (turn == "enemy") {
        putCardToHand("enemy")
        turn = "me"
        for (let i = 0; i < myButtons.length; i++) {
            myButtons[i].disabled = true
        }
        for (let i = 0; i < enemyButtons.length; i++) {
            if (!enemyButtons[i].parentNode.classList.toString().includes("invisible_card")) {
                enemyButtons[i].disabled = false
            }
        }
    }
}


function pass() {
    clearInterval(interval)
    time = 31
    if (turn == "me") {
        changeTurn() 
    } else if (turn == "enemy") {
        changeTurn()
        bot.start()
        if (absoluteManna < 10) {
            absoluteManna++
        }
    }
    manna = absoluteManna
    interval = setInterval(() => {
        if (gameOver) {
            gameOverFunc()
            clearInterval(interval)
            clearInterval(timer)
        }
        if (turn == "me") {
            changeTurn() 
        } else if (turn == "enemy") {
            changeTurn()
            bot.start()
            if (absoluteManna < 10) {
                absoluteManna++
            }
        }
        manna = absoluteManna
        time = 31
    }, 30000)
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
var absoluteManna = 1
var manna = 1
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

//bot
var bot = new Bot()

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
changeTurn()

if (Math.random() < 0.5) {
    changeTurn()
}
if (turn == "me") {
    bot.start()
}

// turns interval
var timer = setInterval(() => {
    document.getElementById("time").innerHTML = --time
    render()
    if (gameOver) {
        gameOverFunc()
        clearInterval(interval)
        clearInterval(timer)
    }
}, 1000)

var interval = setInterval(() => {
    if (turn == "me") {
        changeTurn()
    } else if (turn == "enemy") {
        changeTurn()
        bot.start()
        if (absoluteManna < 10) {
            absoluteManna++
        }
    }
    manna = absoluteManna
    time = 31
}, 30000)


function gameOverFunc() {
    alert("Game over! Winner: " + winner)
}