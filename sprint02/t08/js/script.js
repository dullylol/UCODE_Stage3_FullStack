function checkBrackets(str) {
    if (typeof str !== "string" || !str.match(/[()]/)) {
        return -1
    }
    var count = 0
    var arr = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == ')') {
            arr.push(str[i])
        }
    }
    arr = arr.join("")
    arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {
        arr = arr.replace("()", "")
    }
    
    return arr.length
}

