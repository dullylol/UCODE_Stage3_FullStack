function addWords(obj, wrds) {
    if (obj == null || typeof obj != "object") {
        return obj
    }

    obj.words = obj.words.replace(/ +/g, ' ').trim();
    wrds = wrds.replace(/ +/g, ' ').trim();

    removeWords(obj, wrds)

    let arr = wrds.split(" ")

    for (let i = 0; i < arr.length; i++) {
        if (!obj.words.includes(arr[i])) {
            obj.words = obj.words.concat(" ", arr[i])
        }
    }

}

function removeWords(obj, wrds) {
    if (obj == null || typeof obj != "object") {
        return obj
    }

    obj.words = obj.words.replace(/ +/g, ' ').trim();
    wrds = wrds.replace(/ +/g, ' ').trim();

    let arr = wrds.split(" ")

    for (let i = 0; i < arr.length; i++) {
        obj.words = obj.words.replace(arr[i], "")
    }

    obj.words = obj.words.replace(/ +/g, ' ').trim();
}

function changeWords(obj, oldWrds, newWrds) {
    if (obj == null || typeof obj != "object") {
        return obj
    }

    removeWords(obj, oldWrds)
    addWords(obj, newWrds)

    obj.words = obj.words.replace(/ +/g, ' ').trim();
}