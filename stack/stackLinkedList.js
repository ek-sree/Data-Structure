class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    isEmpty(){
        return this.size ==0
    }

    push(value){
        const node = new Node(value)
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
            return "Underflow"
        }else{
            let popedItem = this.top.value
            this.top = this.top.next
            this.size--
            return popedItem
        }
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }else{
            return this.top.value
        }
    }

    getSize(){
       return this.size
    }

    display(){
        let current = this.top
        let result = ''
        while(current){
            result += current.value+' '
            current=current.next
        }
        console.log(result);
    }
}

const stack = new Stack()
console.log(stack.isEmpty());
console.log(stack.getSize());
stack.push(10)
stack.push(20)
stack.push(30)
console.log('min...');
console.log(stack.minValue());
console.log(stack.midValue());
console.log("size....");
console.log(stack.getSize());

stack.display()

console.log(stack.isEmpty());

console.log("pop...");
stack.pop()
console.log(stack.getSize());

stack.display()
