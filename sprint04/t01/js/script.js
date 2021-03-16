let elements = document.querySelectorAll("ul > li");

elements.forEach(function (element) {
    if (!element.hasAttribute("class") &&
        element.className != "good" &&
        element.className != "evil") {

        element.className = "unknown"
    }

    if (!element.hasAttribute("data-element")) {
        element.setAttribute("data-element", "none")
    }

    let dataElements = element.getAttribute("data-element").split(' ')

    element.appendChild(document.createElement("br"))

    dataElements.forEach(function(dataElement) {
        let div = document.createElement("div")
        div.className = "elem"

        div.className += " " + dataElement

        if (dataElement == "none") {
            let divNone = document.createElement("div")
            divNone.classList = "line"
            div.appendChild(divNone)
        }

        element.appendChild(div)
    })

})
