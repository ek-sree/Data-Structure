const Linkedlist = require('./singleLinkedListUsingTail')

class LinkedlistQueue{
    constructor() {
        this.list = new Linkedlist
    }

    enqueue(value){
        return this.list.prepend(value)
    }

    dequeue(value){
        return this.list.removeFromFront(value)
    }

    peek(){
        return this.list.isEmpty() ? null : this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    display(){
        return this.list.display()
    }
}

const queue = new LinkedlistQueue()

console.log(queue.isEmpty());

queue.enqueue(500)
queue.enqueue(600)
queue.enqueue(700)

queue.display()

queue.dequeue()
queue.display()

console.log(queue.peek());

console.log(queue.isEmpty());