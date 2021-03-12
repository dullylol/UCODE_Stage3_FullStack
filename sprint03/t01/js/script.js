String.prototype.removeDuplicates = function() {
    var arr = this.replace(/ +/g, ' ').trim().split(" ")
    var resArr = []

    for (let i = 0; i < arr.length; i++) {
        let isSymbolRepeate = false

        for (let j = 0; j < resArr.length; j++) {
            if (arr[i] === resArr[j]) {
                isSymbolRepeate = true   
                break       
            }
        }

        if (!isSymbolRepeate) {
            resArr.push(arr[i])
        }
    }

    return resArr.join(" ")
}

/*

let str = "Giant Spiders?   What’s next? Giant Snakes?"
console.log(str)
// Giant Spiders?   What’s next? Giant Snakes?

str = str.removeDuplicates()
console.log(str)
// Giant Spiders? What’s next? Snakes?

str = str.removeDuplicates()
console.log(str)
// Giant Spiders? What’s next? Snakes?

str = ". . . . ? . . . . . . . . . . . "
console.log(str)
// . . . . ? . . . . . . . . . . .

str = str.removeDuplicates()
console.log(str)
// . ?

*/
