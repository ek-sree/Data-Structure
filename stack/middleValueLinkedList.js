class Node{
    constructor(value){
        this.value = value
        this.next  = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size= 0
    }

    isEmpty(){
        return this.size==0
    }

    push(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return "UnderFLow"
        }else{
            let popedItem = this.top.value
            this.top = this.top.next
            this.size--
            return popedItem
        }
    }

    midValue(){
        let slow = this.top
        let fast = this.top
        while(fast && fast.next){
            slow= slow.next
            fast= fast.next.next
        }
        return slow.value
    }

    display(){
        let current = this.top
        let stackValues = ''
        while(current){
            stackValues += current.value+' '
            current= current.next
        }
        console.log(stackValues);
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

console.log(stack.midValue());