//incorrect cases
console.log(checkBrackets(NaN)) // -1
console.log(checkBrackets(2)) // -1
console.log(checkBrackets(true)) // -1
console.log(checkBrackets(4.8)) // -1
console.log(checkBrackets(null)) // -1

//correct cases
console.log(checkBrackets('1)()(())2(()')) // 2
console.log(checkBrackets('()()()()()()()()()()()')) // 0
console.log(checkBrackets('123(')) // 1
console.log(checkBrackets('(defr)')) // 0
console.log(checkBrackets(')))')) // 3
console.log(checkBrackets('(((')) // 3
console.log(checkBrackets(')(')) // 2
console.log(checkBrackets(')))))(((((')) // 10
console.log(checkBrackets('(1)(2)(3)')) // 0
console.log(checkBrackets(')1(2)1(')) // 2
