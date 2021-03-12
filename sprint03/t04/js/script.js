let houseMixin = {
    wordReplace(oldWord, newWord) {
        return this.description = this.description.replace(oldWord, newWord)
    },

    wordInsertAfter(word, newWord) {
        return this.description = this.description.replace(word, word + " " + newWord)
    },

    wordDelete(word) {
        return this.description = this.description.replace(word, "")
    },

    wordEncrypt() {
        return this.description = this.description.replace(/[A-Z]/gi, c =>
            "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c) ] )
    },

    wordDecrypt() {
        return this.description = this.description.replace(/[A-Z]/gi, c =>
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
            "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(c) ] )
    }
}

const house = new HouseBuilder('88 Crescent Avenue',
        'Spacious town house with wood flooring, 2-car garage, and a back patio.',
        'J. Smith', 
        110, 
        5)

Object.assign(house, houseMixin)

/*

console.log(house.getDaysToBuild())
// 220

console.log(house.description)
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile")
console.log(house.description)
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ")
console.log(house.description)
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter("with", "marble")
console.log(house.description)
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt()
console.log(house.description)
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt()
console.log(house.description)
// Spacious house with marble tile flooring, 2-car garage, and a back patio

*/