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
        let count = 1
        for (let i = 0; i < enemyHand.length; i++) {
            if (enemyHand[i] != null) {
                count++
                setTimeout(() => {
                    if (enemyHand[i] != null) {
                        playCard(i, "enemy")
                    }
                }, 1000 * (i + 1))
            }
        }
        for (let i = 0; i < enemyField.length; i++) {
            if (enemyField[i] != null) {
                count++
                setTimeout(() => {
                    if (enemyField[i] != null) {
                        attack(i, "enemy")
                    }
                }, 1000 * (i + 1) + enemyHand.length * 1000)
            }
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
        new Card("Iron Man", "./view/templates/cards/iron_man.jpg", 5, 4, 4),
        new Card("Hulk", "./view/templates/cards/hulk.jpeg", 10, 10, 8),
        new Card("Thanos", "./view/templates/cards/thanos.png", 20, 20, 10),
        new Card("Black panther", "./view/templates/cards/black_panther.jpeg", 3, 4, 3),
        new Card("Captain America", "./view/templates/cards/captain_america.jpeg", 2, 5, 3),
        new Card("Vanda", "./view/templates/cards/vanda.png", 20, 6, 5),
        new Card("Black Widow", "./view/templates/cards/black_widow.jpeg", 2, 1, 1),
        new Card("Thor", "./view/templates/cards/thor.jpeg", 10, 15, 9),
        new Card("Loki", "./view/templates/cards/loki.jpeg", 3, 3, 2),
        new Card("Doctor Strange", "./view/templates/cards/doctor_strange.jpeg", 8, 8, 6),
        new Card("Rocket", "./view/templates/cards/rocket.jpeg", 5, 1, 6),
        new Card("Star-Lord", "./view/templates/cards/star_lord.jpeg", 1, 3, 6),
        new Card("Grutt", "./view/templates/cards/grut.jpeg", 4, 5, 4),
        new Card("Gamora", "./view/templates/cards/gamora.png", 7, 5, 5),
        new Card("Odin", "./view/templates/cards/odin.jpeg", 15, 15, 10),
        new Card("Hela", "./view/templates/cards/hela.jpeg", 14, 14, 10),
        new Card("Spider-man", "./view/templates/cards/spider_man.jpeg", 6, 7, 5),
        new Card("Captain Marvel", "./view/templates/cards/captain_marvel.jpeg", 20, 20, 10),
        new Card("Valkyrie", "./view/templates/cards/valkyrie.jpeg", 5, 4, 4),
        new Card("Nick Fury", "./view/templates/cards/nick_fury.jpeg", 3, 3, 2)
    ]
}

function putCardToHand(gamer) {
    if (gamer == "me" && myDeck != null) {
        for (let i = 0; i < myHand.length; i++) {
            if (myHand[i] == null) {
                myHand[i] = myDeck.pop()
                document.getElementById(`my_hand_card${i}`).disabled = false
                break
            }
        }
    } else if (gamer == "enemy") {
        for (let i = 0; i < enemyHand.length; i++) {
            if (enemyHand[i] == null) {
                enemyHand[i] = enemyDeck.pop()
                document.getElementById(`enemy_hand_card${i}`).disabled = false
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
            document.getElementById(`my_field_card${index}`).className = "card my_card"
            document.getElementById(`my_field_card${index}_name`).innerHTML = element.name
            document.getElementById(`my_field_card${index}_img`).src = element.photo
            document.getElementById(`my_field_card${index}_power`).innerHTML = element.power
            document.getElementById(`my_field_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`my_field_card${index}`).className = "card my_card invisible"
        }
        index++
    })

    index = 0
    myHand.forEach(element => {
        if (element != null) {
            document.getElementById(`my_hand_card${index}`).className = "card my_card"
            document.getElementById(`my_hand_card${index}_name`).innerHTML = element.name
            document.getElementById(`my_hand_card${index}_cost`).innerHTML = element.cost
            document.getElementById(`my_hand_card${index}_img`).src = element.photo
            document.getElementById(`my_hand_card${index}_power`).innerHTML = element.power
            document.getElementById(`my_hand_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`my_hand_card${index}`).className = "card my_card invisible"
        }
        index++
    })

    // enemy
    index = 0
    enemyField.forEach(element => {
        if (element != null) {
            document.getElementById(`enemy_field_card${index}`).className = "card enemy_card"
            document.getElementById(`enemy_field_card${index}_name`).innerHTML = element.name
            document.getElementById(`enemy_field_card${index}_img`).src = element.photo
            document.getElementById(`enemy_field_card${index}_power`).innerHTML = element.power
            document.getElementById(`enemy_field_card${index}_health`).innerHTML = element.health
        } else {
            document.getElementById(`enemy_field_card${index}`).className = "card enemy_card invisible"
        }
        index++
    })

    index = 0
    enemyHand.forEach(element => {
        if (element != null) {
            document.getElementById(`enemy_hand_card${index}`).className = "card enemy_card"
           } else {
            document.getElementById(`enemy_hand_card${index}`).className = "card enemy_card invisible"
        }
        index++
    })

    //heroes
    document.getElementById("my_hero_health").innerHTML = me.health
    document.getElementById("enemy_hero_health").innerHTML = enemy.health

    //manna
    document.getElementById("manna").innerHTML = `${manna} / ${absoluteManna}`

    //deck number
    document.getElementById("my_deck_number").innerHTML = myDeck.length
    document.getElementById("enemy_deck_number").innerHTML = enemyDeck.length

}

function playCard(index, gamer) {
    if (gamer == "me" && turn == "enemy" && myHand[index] != null && myHand[index].cost <= manna) {
        manna -= myHand[index].cost
        document.getElementById("manna").innerHTML = `${manna} / ${absoluteManna}`

        for (let i = 0; i < FIELD; i++) {
            if (myField[i] == null) {
                myField[i] = myHand[index]
                myHand[index] = null
                break
            }
        }
    } else if (gamer == "enemy" && turn == "me" && enemyHand[index] != null && enemyHand[index].cost <= manna) {
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
    if (gamer == "me" && document.getElementById(`my_field_card${index}`).disabled == false) {
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
        document.getElementById(`my_field_card${index}`).disabled = true

    } else if (gamer == "enemy" && document.getElementById(`enemy_field_card${index}`).disabled == false) {
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
        document.getElementById(`enemy_field_card${index}`).disabled = true
    }

    // cards moving
    for (let i = 0; i < FIELD - 1; i++) {
        for (let j = 0; j < FIELD - 1; j++) {
            if (myField[j] == null) {
                myField[j] = myField[j + 1]
                myField[j + 1] = null
                document.getElementById(`my_field_card${j}`).disabled = document.getElementById(`my_field_card${j + 1}`).disabled
            }
            if (enemyField[j] == null) {
                enemyField[j] = enemyField[j + 1]
                enemyField[j + 1] = null
                document.getElementById(`enemy_field_card${j}`).disabled = document.getElementById(`enemy_field_card${j + 1}`).disabled
            }
        }
    }

    render()
}


function changeTurn() {
    if (turn == "me") {
        document.getElementById("pass").style.visibility = "visible"
        putCardToHand("me")
        turn = "enemy"
        for (let i = 0; i < myCards.length; i++) {
            if (!myCards[i].className.toString().includes("invisible")) {
                myCards[i].disabled = false
            }
        }
        for (let i = 0; i < enemyCards.length; i++) {
            enemyCards[i].disabled = true
        }
    } else if (turn == "enemy") {
        document.getElementById("pass").style.visibility = "hidden"
        putCardToHand("enemy")
        turn = "me"
        for (let i = 0; i < myCards.length; i++) {
            myCards[i].disabled = true
        }
        for (let i = 0; i < enemyCards.length; i++) {
            if (!enemyCards[i].className.toString().includes("invisible")) {
                enemyCards[i].disabled = false
            }
        }
    }
}

function pass() {
    if (!gameOver) {
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
var myCards = document.getElementsByClassName("my_card")
var enemyCards = document.getElementsByClassName("enemy_card")

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

var timer = setInterval(() => {
    document.getElementById("time").innerHTML = --time
    render()
    if (gameOver) {
        clearInterval(interval)
        gameOverFunc()
        clearInterval(timer)
    }
}, 1000)

function start() {
        // game variables
    gameOver = false
    winner = null
    time = 30
    turn = "me"
    absoluteManna = 1
    manna = 1
    myCards = document.getElementsByClassName("my_card")
    enemyCards = document.getElementsByClassName("enemy_card")

    // cards` arrays
    me = new Hero(HERO_HEALTH)
    myDeck = getDeck()
    myHand = new Array(HAND)
    myField = new Array(FIELD)

    enemy = new Hero(HERO_HEALTH)
    enemyDeck = getDeck()
    enemyHand = new Array(HAND)
    enemyField = new Array(FIELD)

    //bot
    bot = new Bot()

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

    var timer = setInterval(() => {
        document.getElementById("time").innerHTML = --time
        render()
        if (gameOver) {
            clearInterval(interval)
            gameOverFunc()
            clearInterval(timer)
        }
    }, 1000)
}

function gameOverFunc() {
    document.getElementById("game_field").style.display = "none"
    let cards = document.getElementsByClassName("card")
    for (let i = 0; i < cards.length; i++) {
        cards[i].className = "card invisible"
    }

    document.getElementById("game_over_screen").style.display = "flex"

    if (winner == "me") {
        document.getElementById("result").innerHTML = "You won!"
    } else if (winner == "enemy") {
        document.getElementById("result").innerHTML = "You lost!"
    }
}

function restart() {
    document.getElementById("game_field").style.display = ""
    document.getElementById("game_over_screen").style.display = "none"
    start()
}
