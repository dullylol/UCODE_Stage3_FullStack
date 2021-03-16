let wordInput = document.getElementById("word_input")
let textInput = document.getElementById("text_input")
let output = document.getElementById("output")

let phone = getCookiePhone()
let count = getCookieCount()
let replace = getCookieReplace()

document.getElementsByClassName("butt")[0].children[0].value = `To phone number [${phone}]`
document.getElementsByClassName("butt")[0].children[1].value = `Word count [${count}]`
document.getElementsByClassName("butt")[0].children[2].value = `Word replace [${replace}]`

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


    document.cookie = "phone=" + encodeURIComponent(++phone)  + '; max-age=60'

    console.log(document.cookie)

    document.getElementsByClassName("butt")[0].children[0].value = `To phone number [${phone}]`

}

function wordCount() {
    let word = wordInput.value
    let text = textInput.value

    output.value = "Word count: " + (text.split(word).length - 1);


    document.cookie = "count=" + encodeURIComponent(++count)  + '; max-age=60'
    console.log(document.cookie)

    document.getElementsByClassName("butt")[0].children[1].value = `Word count [${count}]`
}

function wordReplace() {
    let word = wordInput.value
    let text = textInput.value

    let arr = text.split(" ")

    output.value = word
    for (let i = 0; i < arr.length - 1; i++) {
        output.value += " " + word
    }

    document.cookie = "replace=" + encodeURIComponent(++replace) + '; max-age=60'
    console.log(document.cookie)

    document.getElementsByClassName("butt")[0].children[2].value = `Word replace [${replace}]`
}


function getCookieReplace() {
    let replaceNum = document.cookie.replace(/(?:(?:^|.*;\s*)replace\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return (replaceNum == "") ? 0 : Number(replaceNum)
}

function getCookiePhone() {
    let phoneNum = document.cookie.replace(/(?:(?:^|.*;\s*)phone\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return (phoneNum == "") ? 0 : Number(phoneNum)
}

function getCookieCount() {
    let countNum = document.cookie.replace(/(?:(?:^|.*;\s*)count\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return (countNum == "") ? 0 : Number(countNum)
}



