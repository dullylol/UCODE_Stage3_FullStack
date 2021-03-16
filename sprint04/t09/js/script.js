let textInput = document.getElementById("text_input")
let history = document.getElementById("history")
var key = 0

while (true) {
    if (localStorage.getItem(key) == null) {
        break;
    }
    else {
        key++
    }
}


if (localStorage.getItem(key - 1) == null) {
    history.value = "empty"
}
else {
    for (let i = 0; i < key; i++) {
        history.value += "--> " + localStorage.getItem(i) + "\n"
    }
}

function addToStorage() {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    let hours = String(today.getHours()).padStart(2, '0')
    let minutes = String(today.getMinutes()).padStart(2, '0')
    let sec = String(today.getSeconds()).padStart(2, '0')

    today = ' [' + mm + '.' + dd + '.' + yyyy + ', ' + hours + ':' + minutes + ':' + sec + ']'
    localStorage.setItem(key++, textInput.value + today)
    history.value += "--> " + localStorage.getItem(key - 1) + "\n"
    console.log(textInput.value + today)
}

function clearStorage() {
    key = 0
    localStorage.clear()
}
