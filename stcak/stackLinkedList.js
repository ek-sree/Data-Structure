const Linkedlist = require('./singleLinkedListUsingTail')

class LinkedlistStack{
    constructor(){
        this.list = new Linkedlist
    }

    push(value){
        return this.list.append(value)
    }

    pop(value){
        return this.list.removeFromEnd(value)
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

const stack = new LinkedlistStack()

console.log(stack.isEmpty())

stack.push(100)
stack.push(200)
stack.push(300)

stack.display()

stack.pop()
stack.display()

console.log(stack.peek())

console.log(stack.isEmpty())
