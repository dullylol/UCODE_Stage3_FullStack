var firstName = prompt("Enter your first name")

if (!firstName.match(/^[a-zA-Z]*$/)) {
    alert("Incorrect input!")
}
else {
    var lastName = prompt("Enter your last name")

    if (!lastName.match(/^[a-zA-Z]*$/)) {
        alert("Incorrect input!")
    }
    else {
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()

        alert("Hello, " + firstName + " " + lastName + "!")
        console.log("Hello, " + firstName + " " + lastName + "!")
    }
}
