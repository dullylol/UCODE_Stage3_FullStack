let textInput = document.getElementById("text_input")
let history = document.getElementById("history")
let key = 0

function addToStorage() {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    let hours = String(today.getHours()).padStart(2, '0')
    let minutes = String(today.getMinutes()).padStart(2, '0')
    let sec = String(today.getSeconds()).padStart(2, '0')

    today = '[' + mm + '.' + dd + '.' + yyyy + ',' + hours + ':' + minutes + ':' + sec + ']'
    localStorage.setItem(key++, textInput.value + today)
    history.value = "--> " + localStorage.getItem(key - 1)
    console.log(textInput.value + today)
}

function clearStorage() {
    key = 0
    localStorage.clear()
}
