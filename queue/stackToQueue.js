class Stack{
    constructor(){
        this.items= []
    }

    isEmpty(){
        return this.items.length ==0
    }

    push(value){
        this.items[this.items.length] = value
    }

    pop(){
        let popedItem = this.items[this.items.length-1]
        this.items.length -=1
        return popedItem
    }
}

class Queue extends Stack{
    constructor(){
        super()
        this.tempStack = new Stack()
    }

    enqueue(value){
        while(!this.isEmpty()){
            this.tempStack.push(this.pop())
        }

        this.push(value)
        while(!this.tempStack.isEmpty()){
            this.push(this.tempStack.pop())
        }
    }

    dequeue(){
        return this.pop()
    }
}

const queue =  new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.dequeue());