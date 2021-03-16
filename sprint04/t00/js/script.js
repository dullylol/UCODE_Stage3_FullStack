function transformation() {
    let name = document.getElementById("hero").innerHTML

    if (name == "Bruce Banner") {
        document.getElementById("hero").innerHTML = "Hulk"
        document.getElementById("lab").style.background = "#70964b"
        document.getElementById("hero").style.fontSize = "130px"
        document.getElementById("hero").style.letterSpacing = "6px"
    }
    else {
        document.getElementById("hero").innerHTML = "Bruce Banner"
        document.getElementById("lab").style.background = "#ffb300"
        document.getElementById("hero").style.fontSize = "60px"
        document.getElementById("hero").style.letterSpacing = "2px"
    }
}
