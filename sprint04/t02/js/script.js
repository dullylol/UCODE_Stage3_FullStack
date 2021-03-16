let nameSort = 1
let strengthSort = 0
let ageSort = 0

function sortByName(array) {
    if (nameSort == 0) {
        document.getElementById("notification").innerHTML = "Sorting by Name, order: ASC"
        nameSort = 1

        array.sort((arr1, arr2) => {
            if (arr2[0] == "Name") return 0
            return (arr1[0] >= arr2[0]) ? 1 : -1
        })
    } 
    else {
        document.getElementById("notification").innerHTML = "Sorting by Name, order: DESC"
        nameSort = 0

        array.sort((arr1, arr2) => {
            if (arr2[0] == "Name") return 0
            return (arr1[0] < arr2[0]) ? 1 : -1
        })
    }
    strengthSort = 0
    ageSort = 0

    update(array)
}

function sortByStrength(array) {
    if (strengthSort == 0) {
        document.getElementById("notification").innerHTML = "Sorting by Strength, order: ASC"
        strengthSort = 1

        array.sort((arr1, arr2) => {
            if (arr2[0] == "Name") return 0
            return (arr1[1] < arr2[1]) ? 1 : -1
        })
    } 
    else {
        document.getElementById("notification").innerHTML = "Sorting by Strength, order: DESC"
        strengthSort = 0

        array.sort((arr1, arr2) => {
            if (arr2[0] == "Name") return 0
            return (arr1[1] >= arr2[1]) ? 1 : -1
        })
    }
    nameSort = 0
    ageSort = 0

    update(array)
}

function sortByAge(array) {
    if (ageSort == 0) {
        document.getElementById("notification").innerHTML = "Sorting by Age, order: ASC"
        ageSort = 1

        array.sort((arr1, arr2) => {
            if (arr2[0] == "Name") return 0
            return (arr1[2] < arr2[2]) ? 1 : -1
        })
    } 
    else {
        document.getElementById("notification").innerHTML = "Sorting by Age, order: DESC"
        ageSort = 0

        array.sort((arr1, arr2) => {
            if (arr2[0] == "Name") return 0
            return (arr1[2] >= arr2[2]) ? 1 : -1
        })
    }
    nameSort = 0
    strengthSort = 0

    update(array)
}

function update(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            document.getElementById("tr_" + i + "_" + j).innerHTML = array[i][j]
        }
    }
}

// main code
let body = document.getElementsByTagName("body")[0]
let table = document.createElement("table")

array =     [["Name", "Strength", "Age"],
            ["Black Panther", 66, 53],
            ["Captain America", 79, 137],
            ["Captain Marvel", 97, 26],
            ["Hulk", 80, 49],
            ["Iron Man", 88, 48],
            ["Spider-Man", 78, 16],
            ["Thanos", 99, 1000],
            ["Thor", 95, 1000],
            ["Yon-Rogg", 73, 52]]



document.getElementById("notification").innerHTML = "Sorting by Name, order: ASC"
for (let i = 0; i < array.length; i++) {
    let tr = document.createElement("tr")

    if (i == 0) {
        tr.style.background = "red"
    }
    else {
        tr.style.background = "lightgrey"
    }


    for (let j = 0; j < array[i].length; j++) {
        let td = document.createElement("td")

        if (i == 0) {
            if (j == 0) {
                td.setAttribute("onclick", "sortByName(array)")
            }
            else if (j == 1) {
                td.setAttribute("onclick", "sortByStrength(array)")
            }
            else if (j == 2) {
                td.setAttribute("onclick", "sortByAge(array)")
            }
        }

        td.setAttribute("id", "tr_" + i + "_" + j)

        td.appendChild(document.createTextNode(array[i][j]))
        tr.appendChild(td)
    }

    table.appendChild(tr);
}

body.appendChild(table)

