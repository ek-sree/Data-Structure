class Node{
    constructor(value){
        this.value = value
        this.next = null

    }
}

class Stack{
    constructor(){
        this.top = null
        this.size =0
    }

    isEmpty(){
        return this.size==0
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
        let popedItem = this.top.value
        this.top = this.top.next
        this.size--
        return popedItem
    }

    minValue(){
        let current = this.top
        let min = current.value
        while(current){
            if(current.value < min){
                min = current.value
            }
            current = current.next
        } 
        return min
    }

    display(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let current = this.top
            let satckValues = ''
            while(current){
                satckValues += current.value+' '
                current = current.next
            }
            console.log(satckValues);
        }
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

console.log(stack.minValue());