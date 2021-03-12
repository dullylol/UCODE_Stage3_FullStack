validator = {
    get(target, prop) {
        return "Trying to access the property \'" + prop + "\'..."
    },

    set(target, prop, value) {
        if (value < 0 || value > 200) {
            console.error("Uncaught Range: ErrorThe age is invalid")
            return false
        }
        if (typeof value != "number" && prop == "age") {
            console.error("Uncaught TypeError: The age is not an integer")
            return false
        }
        console.log(`Setting value '${value}' to '${prop}'`)
        return true
    }
}

/*

let person = new Proxy({}, validator)

person.age = 100
// Setting value '100' to 'age'

console.log(person.age)
// Trying to access the property 'age'...
// 100

person.gender = "male"
// Setting value 'male' to 'gender' 

person.age = 'young'
// Uncaught TypeError: The age is not an integer

person.age = 300
// Uncaught RangeError: The age is invalid

*/