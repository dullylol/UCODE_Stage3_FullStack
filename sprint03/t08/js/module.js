// You should start index.html only like liveserver!!!

export default class MyLinkedList {

    constructor(data) {
        this.data = data
        this.next = null
    }

    add(data) {
        let node = this
        while (node.next != null) {
            node = node.next
        }
        node.next = new MyLinkedList(data)
    }

    remove(data) {
        let node = this

        while (this.data == data) {
            this.data = this.next.data
            this.next = this.next.next
            return true
        }

        while (node.next != null) {
            if (node.next.data == data) {
                node.next = node.next.next
                return true
            }
            node = node.next
        }

        return false
    }

    contains(data) {
        let node = this
        while (node.next != null) {
            if (node.data == data) {
                return true
            }
            node = node.next
        }
        if (node.data == data) {
            return true
        }
        return false
    }
    
    clear() {
        let node = this

        while (node.next != null) {
            delete node.next.data
            node.next = node.next.next
        }

        delete this.data
        this.next = null
    }

    count() {
        let node = this
        let count = 0
        if (this.data == undefined) {
            return 0
        }
        while(node != null) {
            node = node.next
            count++
        }
        return count
    }

    log() {
        if (this.data == undefined) {
            return ""
        }

        let str = String(this.data)
        let node = this

        while(node.next != null) {
            node = node.next
            str += ", " + String(node.data)
        }

        console.log(str)
    }

    [Symbol.iterator]() {
        let node = this

        return {
            next() {
                let value
                let done = true

                if (node !== null) {
                    value = node.data
                    done = false
                    node = node.next
                }

                return {
                    value: value, done: done
                }
            }
        }
    }

}


