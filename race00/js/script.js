let resultStr = document.getElementById("result_str")
let inputStr = document.getElementById("input_str")

//===============================onclick functions===============================//
function addNewNumber(num) {
    if (resultStr.value == 0) {
        resultStr.value = ""
    }
    resultStr.value += num

}

function arithmeticOperation(operation) {
    let input = inputStr.innerHTML

    if (input != "" && resultStr.value == "" && isOperation(input[input.length - 1])) {
        inputStr.innerHTML = input.substring(0, input.length - 1) + operation
    }
    else {
        inputStr.innerHTML += resultStr.value + operation
        resultStr.value = ""
    }
}

function equals() {
    resultStr.value = Number(eval(replaceHardOperations(inputStr.innerHTML + resultStr.value)))
    inputStr.innerHTML = ""
}

function toggleNumber() {
    if (resultStr.value == "") {
        return // I should realize taking number from inputStr.innerHTML
    }

    resultStr.value = -Number(resultStr.value)
}

function percent() {
    if (resultStr.value == "") {
        return // I should realize taking number from inputStr.innerHTML
    }

    resultStr.value = Number(resultStr.value) / 100
}

function reset() {
    resultStr.value = "0"
    inputStr.innerHTML = ""
}

function squareRoot() {
    if (resultStr.value != "" && resultStr.value > 0) {
        resultStr.value = Math.pow(Number(resultStr.value), 0.5)
    }
}

//-----------------------History-----------------------
function memoryRecall() {
    if (resultStr.value != "") {
        localStorage.setItem("result", resultStr.value)
    }
}

function memoryClear() {
    localStorage.setItem("result", "")
}

function memoryPlus() {
    if (localStorage.getItem("result") != "") {
        localStorage.setItem("result", Number(localStorage.getItem("result")) +
            Number(resultStr.value))

        resultStr.value = localStorage.getItem("result")
    }
}

function memoryMinus() {
    if (localStorage.getItem("result") != "") {
        localStorage.setItem("result", Number(localStorage.getItem("result")) -
            Number(resultStr.value))

        resultStr.value = localStorage.getItem("result")
    }
}


//===============================helping functions===============================//


function isOperation(operation) {
    return operation == "+" || operation == "-" || operation == "*"
        || operation == "/" || operation == "+" || operation == "ˆ"
        || operation == "!"
}

function replaceHardOperations(input) {
    let str = ""

    for (let i = 0; i < input.length; i++) {
        str += input[i]
        if (isOperation(input[i + 1]) || isOperation(input[i])) {
            str += " "
        }
    }

    let arrStr = str.split(" ")
    let resArr = []

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i + 1] == "ˆ") {
            resArr.push(Math.pow(arrStr[i], arrStr[i + 2]))
            i += 2
        }
        else if (arrStr[i + 1] == "!") {
            resArr.push(factorial(arrStr[i]))
            i += 2
        }
        else {
            resArr.push(arrStr[i])
        }
    }
    
    return resArr.join("")
}

function factorial(num) {
    let total = 1

    for (let i = 1; i <= Number(num); i++) {
        total *= i
    }
    return total

}
