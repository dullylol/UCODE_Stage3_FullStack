function concat(string1, string2) {
    phrase.count = 0

    function phrase() {
        let string2 = prompt('Enter second phrase!')
        phrase.count++
        return string1 + " " + string2;
    }

    if (string2 !== undefined) {
        return string1 + " " + string2
    }
    else {
        return phrase;
    }
}

