//guestList
let guestList = new WeakMap()

let guest1 = new String("Alex")
let guest2 = new String("Vlad")
let guest3 = new String("Kostya")
let guest4 = new String("Ruslan")

guestList.set(guest1, "Coolest")
guestList.set(guest2, "Weaker")
guestList.set(guest3, "Sexy")
guestList.set(guest4, "Gomosekos")

guestList.delete(guest2)

console.log(guestList.get(guest3) + " and " + guestList.get(guest1))

//menu
let menu = new WeakSet()

let food1 = new String("Apple")
let food2 = new String("Salat")
let food3 = new String("Apple")

menu.add(food1)
menu.add(food2)
menu.add(food3)

menu.delete(food2)

console.log(menu.has(food1) + " " + menu.has(food2))

//bankVault

let bankVault = new Map()

bankVault.set("Alex", 10000)
bankVault.set("Vlad", 600)
bankVault.set("Kostya", 9999999999999999)

bankVault.forEach(console.log)

//coinCollection

let coinCollection = new Set()

coinCollection.add("Bitcoin")
coinCollection.clear()
coinCollection.add("Dollar")
coinCollection.add("Grivnya")

coinCollection.forEach(console.log)
