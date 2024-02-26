class Stack{
    constructor(){
        this.items =[]
    }

    isEmpty(){
        return this.items.length ==0
    }

    push(value){
        this.items[this.items.length]=value
    }

    pop(){
        if(this.isEmpty()){
            return "UnderFlow"
        }else{
            let popedItem = this.items[this.items.length-1]
            this.items.length -=1
            return popedItem
        }
    } 

    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }else{
            return this.items[this.items.length-1]
        }
    }


    size(){
        return this.items.length
    }

    clear(){
        this.items=[]
    }
    
    display(){
        let result =''
        for(let i =this.items.length-1; i>=0; i--){
            result += this.items[i]+' '
        }
        console.log(result);
    }
}

const stack = new Stack()

console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()
console.log("min...");
console.log(stack.minValue());
console.log(stack.midValue());

console.log("peek...");
console.log(stack.peek());

console.log(stack.size());
console.log(stack.isEmpty());

stack.pop()
stack.display()

stack.clear()
console.log(stack.isEmpty());
console.log(stack.size());

