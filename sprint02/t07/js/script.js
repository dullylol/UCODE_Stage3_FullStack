function sortEvenOdd(array) {
    array.sort(sortByOrderComparator).sort(sortByEvenOddComparator)
}

function sortByEvenOddComparator(var1, var2) {
    return var1 % 2 - var2 % 2
}

function sortByOrderComparator(var1, var2) {
    return var1 - var2
}