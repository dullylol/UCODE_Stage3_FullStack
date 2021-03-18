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
    if (resultStr.value == "0") {
        return
    }

    let input = inputStr.innerHTML

    if (input != "" && resultStr.value == "0" && isOperation(input[input.length - 1])) {
        inputStr.innerHTML = input.substring(0, input.length - 1) + operation
    }
    else {
        inputStr.innerHTML += resultStr.value + operation   
        resultStr.value = ""
    }
}

function equals() {
    resultStr.value = Number(eval(inputStr.innerHTML + resultStr.value))
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


//===============================helping functions===============================//
function isOperation(operation) {
    return operation == "+" || operation == "-" || operation == "*" 
                            || operation == "/" || operation == "+"
}

