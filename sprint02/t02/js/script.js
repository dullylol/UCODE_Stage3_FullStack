var animal = prompt("What animal is the superhero most similar to?")

if (animal !== "" && animal.length <= 20 && !animal.includes(" ")) {
    var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.")

    if (gender === "male" || gender === "female" || gender === "") {
        var age = prompt("How old is the superhero?")

        if (age.length <= 5 && (age / 10) > 0) {
            var suffix

            if (gender === "male") {
                if (age < 18) {
                    suffix = "boy"
                }
                else {
                    suffix = "man"
                }
            }

            else if (gender === "female") {
                if (age < 18) {
                    suffix = "girl"
                }
                else {
                    suffix = "woman"
                }
            }

            else if (gender === "") {
                if (age < 18) {
                    suffix = "kid"
                }
                else {
                    suffix = "hero"
                }
            }

            alert("The superhero name is: " + animal + "-" + suffix + "!")

        }
        else {
            alert("Incorrect age input!")
        }
    }
    else {
        alert("Incorrect gender input!")
    }
}
else {
    alert("Incorrect animal input!")
}