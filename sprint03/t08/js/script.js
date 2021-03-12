// You should start index.html only like liveserver!!!

import  MyLinkedList from './module.js'

function createLinkedList(arr) {
    let ll = new MyLinkedList(arr[0])
    for (let i = 1; i < arr.length; i++) {
        ll.add(arr[i])
    }
    return ll
}


const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100])
ll.log()
// "100, 1, 2, 3, 100, 4, 5, 100"

while(ll.remove(100))
    ll.log()
// "1, 2, 3, 4, 5"
ll.add(10)

ll.log()
// "1, 2, 3, 4, 5, 10"

console.log(ll.contains(10))
// "true"
let sum = 0

for(const n of ll) {
    sum += n
}
console.log(sum)
// "25"

ll.clear();
ll.log();
// ""
