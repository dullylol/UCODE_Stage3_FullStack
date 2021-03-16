let wordInput = document.getElementById("word_input")
let textInput = document.getElementById("text_input")
let output = document.getElementById("output")

let phone = 0
let count = 0
let replace = 0


function toPhoneNumber() {
    let word = wordInput.value
    let isNumberCorrect = true

    for (let i = 0; i < word.length; i++) {

        if ((!Number(word[i]) && word[i] != "0") || i > 10) {
            isNumberCorrect = false
            break
        }
    }

    if (word.length == 10 && isNumberCorrect) {
        output.value = word.substr(0, 3) + "-" + word.substr(3, 3) + "-" + word.substr(6)
    }
    else {
        output.value = "Invalid phone number!"
    }

    document.cookie = "phone=" + (++phone) 
    document.cookie = "count=" + (count) 
    document.cookie = "replace=" + (replace)
    console.log(document.cookie)
}

function wordCount() {
    let word = wordInput.value
    let text = textInput.value

    output.value = "Word count: " + (text.split(word).length - 1);

    document.cookie = "phone=" + (phone) 
    document.cookie = "count=" + (++count) 
    document.cookie = "replace=" + (replace)
    console.log(document.cookie)
}

function wordReplace() {
    let word = wordInput.value
    let text = textInput.value

    let arr = text.split(" ")

    output.value = word
    for (let i = 0; i < arr.length - 1; i++) {
        output.value += " " + word
    }

    document.cookie = "phone=" + (phone) 
    document.cookie = "count=" + (count) 
    document.cookie = "replace=" + (++replace)
    console.log(document.cookie)
}


setInterval(() => {
    document.cookie = "phone=;"
    document.cookie = "count=;" 
    document.cookie = "replace=;"
}, 60000)
