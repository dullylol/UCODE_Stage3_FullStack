let result = 1

while (true) {


    let number = Number(prompt("Previous result: " + result + ". Enter a new number:"))

    if (isNaN(number)) {
        console.error("Invalit number!")
        continue
    }

    result += number

    if (result > 10000) {
        result = 1
    }

    console.log("Result: " + result + ".") 

}