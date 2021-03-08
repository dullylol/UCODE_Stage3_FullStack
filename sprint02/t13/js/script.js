function Calculator() {}

Calculator.prototype.init = function(num) {
    this.result = Number(num)
    return this
}

Calculator.prototype.add = function(num) {
    if (this.result === undefined) {
        this.result = Number(num)
    }
    else {
        this.result += num
    }
    return this
}

Calculator.prototype.mul = function(num) {
    if (this.result === undefined) {
        this.result = Number(num)
    }
    else {
        this.result *= num
    }
    return this
}

Calculator.prototype.div = function(num) {
    if (this.result === undefined) {
        this.result = Number(num)
    }
    else {
        this.result /= num
    }
    return this
}

Calculator.prototype.sub = function(num) {
    if (this.result === undefined) {
        this.result = Number(num)
    }
    else {
        this.result -= num
    }
    return this
}

Calculator.prototype.alert = function() {
    if (this.result === undefined) {
        this.result = Number(num)
    }
    alert("Result is " + this.result)
    return this
}

